import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import getDayOfWeek from '../../utils/get-day-of-week.js'
import { Container, Card, List, ListHeading, ListItem, DayOfWeek, DayOfMonth } from './venue-card-styles.js'
import { getAPIDetails } from '../../action-creators'
import Spinner from '../spinner/spinner'

class VenueCard extends Component {
  static propTypes = {
    venueName: PropTypes.string.isRequired,
    venueID: PropTypes.string.isRequired,
    venueUrl: PropTypes.string.isRequired,
    getAPIDetails: PropTypes.func.isRequired,
  }

  state = {
    fetched: false,
    showList: false,
    counter: 0,
    intervalId: null
  }

  showList = () => {
    if (!this.state.fetched) {
      this.props.getAPIDetails()

      const intervalId = setInterval(() => {
        this.setState(prevState => ({ counter: prevState.counter + 1}))
      }, 1000);

      this.setState({
        fetched: true,
        intervalId: intervalId
      })
    }

    this.setState({
      showList: true,
    })
  }

  hideList = () => {
    if (this.state.showList) {
      this.setState({
        showList: false,
      })
    }
  }

  render() {
    // default to ticketmaster
    const sk = this.props.site === 'songkick' ? true : false
    let renderList
    if (this.props.data.length) {
      renderList = this.props.data.map((item, key) => {
        const dayOfWeek = getDayOfWeek(sk ? item.start.date : item.dates.start.localDate)
        const date = sk ? item.start.date : item.dates.start.localDate
        const dateShort = date.substring(date.indexOf('-') + 1)

        return (
          <ListItem key={key}>
            <DayOfMonth>{dateShort}</DayOfMonth>
            <DayOfWeek>{dayOfWeek}</DayOfWeek>
            <a href={sk ? item.uri : item.url} target="_blank" onClick={e => e.stopPropagation()}>
              {sk ? item.performance[0].artist.displayName : item.name}
            </a>
          </ListItem>
        )
      })
    } else {
      if (this.state.counter < 3) {
        renderList = <Spinner />
      } else {
        clearInterval(this.state.intervalId);
        renderList = <Spinner noData />
      }
    }

    const renderFront = () => (
      <Card onClick={this.showList} venueID={this.props.value} data-card>
        <div className="inner">
          {this.props.venueName}
          <a href={this.props.venueUrl} target="_blank" onClick={e => e.stopPropagation()}>
            SITE
          </a>
        </div>
      </Card>
    )

    const renderBack = () => (
      <List onClick={this.hideList} data-list>
        <ListHeading>{this.props.venueName}</ListHeading>
        {renderList}
      </List>
    )

    return <Container>{!this.state.showList ? renderFront() : renderBack()}</Container>
  }
}

const mapStateToProps = (state, ownProps) => {
  const events = state.events[ownProps.venueID] ? state.events[ownProps.venueID] : []
  return {
    data: [...events],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIDetails() {
    dispatch(getAPIDetails(ownProps.venueID, ownProps.site))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VenueCard)
