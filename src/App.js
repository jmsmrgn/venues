import React, { Component } from 'react'
import 'normalize.css'
import './app.css'
import styled from 'styled-components'
import Header from './components/header/header'
import Venue from './components/venue/venue'

const VenueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
          <Venue
            venueName="Monarch"
            venueID="1595753-monarch"
            venueUrl="http://www.monarchsf.com/"
          />
          <Venue
            venueName="Great American Music Hall"
            venueID="1261-great-american-music-hall"
            venueUrl="http://www.slimspresents.com/venue_detail/gamh/"
          />
          <Venue
            venueName="The Warfield"
            venueID="949-warfield"
            venueUrl="http://thewarfieldtheatre.com/"
          />
          <Venue
            venueName="The Midway"
            venueID="3013529-midway"
            venueUrl="http://www.themidwaysf.com/"
          />
          <Venue
            venueName="The Great Northern"
            venueID="3366109-great-northern-san-francisco"
            venueUrl="http://www.thegreatnorthernsf.com/"
          />
          <Venue
            venueName="Neck of the Woods"
            venueID="2091824-neck-of-the-woods"
            venueUrl="http://neckofthewoodssf.com/"
          />
          <Venue
            venueName="Hemlock Tavern"
            venueID="31153-hemlock-tavern"
            venueUrl="http://www.hemlocktavern.com/"
          />
          <Venue
            venueName="Temple"
            venueID="32793-temple"
            venueUrl="http://www.templesf.com/"
          />
          <Venue
            venueName="Greek Theatre"
            venueID="841-greek-theatre"
            venueUrl="http://thegreekberkeley.com/"
          />
          <Venue
            venueName="Bill Graham Civic Auditorium"
            venueID="/65-bill-graham-civic-auditorium"
            venueUrl="http://www.billgrahamcivicauditorium.com/"
          />
          <Venue
            venueName="Brick & Mortar Music Hall"
            venueID="1296241-brick-and-mortar-music-hall"
            venueUrl="http://brickandmortarmusic.com/"
          />
          <Venue
            venueName="Social Hall SF"
            venueID="3068854-social-hall-sf"
            venueUrl="http://www.socialhallsf.com/"
          />
          <Venue
            venueName="The Regency Ballroom"
            venueID="1418-regency-ballroom"
            venueUrl="http://www.theregencyballroom.com/"
          />
        </VenueContainer>
      </div>
    );
  }
}

export default App;
