import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
  width: 100%;
  @media (min-width: 500px) {
    width: 50%;
  }
  @media (min-width: 767px) {
    width: 33.33%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
  @media (min-width: 1600px) {
    width: 20%;
  }
`

const Button = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 20px;
  background: oldlace;
  color: #29BEA5;
  text-decoration: none;
  :hover {
    cursor: pointer;
    margin-top: -1px;
  }
  a {
    color: white;
    font-weight: normal;
    display: block;
    background: burlywood;
    text-decoration: none;
    margin: 10px auto 0 auto;
    width: 80px;
    &:hover {
      background-color: navajowhite;
    }
  }
`

const List = styled.ul`
  background: mediumaquamarine;
  list-style-type: none;
  text-align: left;
  padding: 5px 10px;
  margin: 0;
  li {
    color: papayawhip;
    font-size: 11px;
    margin-bottom: 2px;
  }
`

const ListItem = styled.li`
  display: flex;
  align-content: flex-start;
`

const DayOfWeek = styled.span`
  width: 65px;
  margin-right: 5px;
  font-size: 12px;
`

const DayOfMonth = styled.span`
  color: firebrick;
  width: 40px;
  margin-right: 5px;
  font-size: 12px;
`

class Venue extends Component {
  static propTypes = {
    venueName: PropTypes.string.isRequired,
    venueID: PropTypes.string.isRequired,
    venueUrl: PropTypes.string.isRequired
  }

  constructor() {
    super()
    this.state = {
      data: [],
      fetched: false,
      showList: false
    }
  }

  fetchVenue = async () => {
    if (this.state.fetched) {
      this.setState({ showList: !this.state.showList })
      return
    }

    const venueID = this.props.venueID
    const res = await axios.get(`http://api.songkick.com/api/3.0/venues/${venueID}/calendar.json?apikey=Ap6UKNWuYTXt70qi`)

    this.setState({
      data: res.data.resultsPage.results.event,
      fetched: true,
      showList: true
    })
  }

  getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getUTCDay()
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  render() {
    const renderList = this.state.data.map((item, key) => {
      const dayOfWeek = this.getDayOfWeek(item.start.date)
      const date = item.start.date
      const dateShort = date.substring(date.indexOf('-') + 1);

      return (
        <ListItem key={key}>
          <DayOfMonth>{dateShort}</DayOfMonth>
          <DayOfWeek>{dayOfWeek}</DayOfWeek>
          <a href={item.uri} target="_blank">{item.performance[0].artist.displayName}</a>
        </ListItem>
      )
    })

    return (
      <Container>
        <Button onClick={this.fetchVenue} venueID={this.props.value}>
          {this.props.venueName}
          <a href={this.props.venueUrl} target="_blank" onClick={(e) => e.stopPropagation()}>website</a>
        </Button>
        {
          this.state.showList ? <List>{renderList}</List> : null
        }
      </Container>
    )
  }
}

export default Venue
