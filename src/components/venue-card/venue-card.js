import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import getDayOfWeek from '../../utils/get-day-of-week.js'
import {
  Container,
  Card,
  List,
  ListHeading,
  ListItem,
  DayOfWeek,
  DayOfMonth
} from './venue-card-styles.js'

class VenueCard extends Component {
  static propTypes = {
    venueName: PropTypes.string.isRequired,
    venueID: PropTypes.string.isRequired,
    venueUrl: PropTypes.string.isRequired
  }

  state = {
    data: [],
    fetched: false,
    showList: false
  }

  fetchListings = async () => {
    const venueID = this.props.venueID
    let res

    if (this.props.songkick) {
      res = await axios.get(`http://api.songkick.com/api/3.0/venues/${venueID}/calendar.json?apikey=Ap6UKNWuYTXt70qi`)
    }
    if (this.props.ticketmaster) {
      res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?venueId=${venueID}&size=100&apikey=Mv7NCYbJ8sByB1QdoDCulutzK64yBJA1`)
    }

    const data = this.props.songkick ? res.data.resultsPage.results.event : res.data._embedded.events

    this.setState({
      data,
      fetched: true,
      showList: true
    })
  }

  toggleList = () => {
    if (this.state.showList) {
      this.setState({
        showList: false
      })
    }
  }

  render() {
    // default to ticketmaster if no songkick prop
    const sk = this.props.songkick
    const renderList = this.state.data.map((item, key) => {
      const dayOfWeek = getDayOfWeek(sk ? item.start.date : item.dates.start.localDate)
      const date = sk ? item.start.date : item.dates.start.localDate
      const dateShort = date.substring(date.indexOf('-') + 1);

      return (
        <ListItem key={key}>
          <DayOfMonth>{dateShort}</DayOfMonth>
          <DayOfWeek>{dayOfWeek}</DayOfWeek>
          <a
            href={sk ? item.uri : item.url}
            target="_blank"
          >
            {sk ? item.performance[0].artist.displayName : item.name}
          </a>
        </ListItem>
      )
    })

    return (
      <Container>
        <Card onClick={this.fetchListings} venueID={this.props.value} data-card>

          <div className="inner">
            {this.props.venueName}
            <a href={this.props.venueUrl} target="_blank" onClick={(e) => e.stopPropagation()}>SITE</a>
          </div>
        </Card>
        {
          this.state.showList
            ? <List onClick={this.toggleList}>
                <ListHeading>{this.props.venueName}</ListHeading>
                {renderList}
              </List>
            : null
        }
      </Container>
    )
  }
}

export default VenueCard
