import { ADD_API_DATA } from './actions'
import axios from 'axios'

export function addAPIData(data, site) {
  return { type: ADD_API_DATA, payload: data, site };
}

export function getAPIDetails(venueID, site) {
  let endpoint
  let schema

  if (site === 'songkick') {
    endpoint = `https://api.songkick.com/api/3.0/venues/${venueID}/calendar.json?apikey=${process.env.REACT_APP_SONGKICK_API_KEY}`
    schema = 'res.data.resultsPage.results.event'
  }

  if (site === 'ticketmaster') {
    endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?venueId=${venueID}&size=100&apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`
    schema = 'res.data._embedded.events'
  }

  return (dispatch) => {
    axios
      .get(endpoint)
      .then(res => {
        dispatch(addAPIData(eval(schema), site)) /* eslint no-eval: 0 */
      })
      .catch(err => {
        console.error('axios error', err)
      })
  }
}
