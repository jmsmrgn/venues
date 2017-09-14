import React, { Component } from 'react'
import 'normalize.css'
import './app.css'
import styled from 'styled-components'
import Header from './components/header/header'
import Venue from './components/venue/venue'

const VenueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="SF Venues" />
        <VenueContainer>
          <Venue
            venueName="Rickshaw Stop"
            venueID="14791-rickshaw-stop"
            venueUrl="//www.rickshawstop.com"
          />
          <Venue
            venueName="Bottom of the Hill"
            venueID="248-bottom-of-the-hill"
            venueUrl="//www.bottomofthehill.com"
          />
          <Venue
            venueName="1015 Folsom"
            venueID="5670-1015-folsom"
            venueUrl="//www.1015.com"
          />
          <Venue
            venueName="Audio"
            venueID="2393199-audio"
            venueUrl="//www.audiosf.com"
          />
          <Venue
            venueName="Fox Theater"
            venueID="953251-fox-theater"
            venueUrl="//www.thefoxoakland.com"
          />
          <Venue
            venueName="The Independent"
            venueID="324-independent"
            venueUrl="//www.theindependentsf.com"
          />
          <Venue
            venueName="The Mezzanine"
            venueID="329-mezzanine"
            venueUrl="//www.mezzaninesf.com"
          />
          <Venue
            venueName="Hotel Utah Saloon"
            venueID="328-hotel-utah-saloon"
            venueUrl="//www.hotelutah.com"
          />
          <Venue
            venueName="The Chapel"
            venueID="2029634-chapel"
            venueUrl="//www.thechapelsf.com"
          />
          <Venue
            venueName="Slim's"
            venueID="1489-slims"
            venueUrl="//www.slims-sf.com"
          />
          <Venue
            venueName="Public Works"
            venueID="1108926-public-works"
            venueUrl="//publicsf.com"
          />
          <Venue
            venueName="Halcyon"
            venueID="3429914-halcyon"
            venueUrl="//www.halcyon-sf.com"
          />
        </VenueContainer>
      </div>
    );
  }
}

export default App;
