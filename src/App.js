import React, { Component } from 'react'
import 'normalize.css'
import './app.css'
import styled from 'styled-components'
import Header from './components/header/header'
import VenueCard from './components/venue-card/venue-card.js'

const VenuesContainer = styled.div`
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
        <VenuesContainer>
          <VenueCard
            venueName="Rickshaw Stop"
            venueID="14791-rickshaw-stop"
            venueUrl="//www.rickshawstop.com"
            songkick
          />
          <VenueCard
            venueName="Bottom of the Hill"
            venueID="248-bottom-of-the-hill"
            venueUrl="//www.bottomofthehill.com"
            songkick
          />
          <VenueCard
            venueName="1015 Folsom"
            venueID="5670-1015-folsom"
            venueUrl="//www.1015.com"
            songkick
          />
          <VenueCard
            venueName="Audio"
            venueID="2393199-audio"
            venueUrl="//www.audiosf.com"
            songkick
          />
          <VenueCard
            venueName="Fox Theater"
            venueID="953251-fox-theater"
            venueUrl="//www.thefoxoakland.com"
            songkick
          />
          <VenueCard
            venueName="The Independent"
            venueID="324-independent"
            venueUrl="//www.theindependentsf.com"
            songkick
          />
          <VenueCard
            venueName="The Mezzanine"
            venueID="329-mezzanine"
            venueUrl="//www.mezzaninesf.com"
            songkick
          />
          <VenueCard
            venueName="Hotel Utah Saloon"
            venueID="328-hotel-utah-saloon"
            venueUrl="//www.hotelutah.com"
            songkick
          />
          <VenueCard
            venueName="The Chapel"
            venueID="2029634-chapel"
            venueUrl="//www.thechapelsf.com"
            songkick
          />
          <VenueCard
            venueName="Slim's"
            venueID="1489-slims"
            venueUrl="//www.slims-sf.com"
            songkick
          />
          <VenueCard
            venueName="Public Works"
            venueID="1108926-public-works"
            venueUrl="//publicsf.com"
            songkick
          />
          <VenueCard
            venueName="Halcyon"
            venueID="3429914-halcyon"
            venueUrl="//www.halcyon-sf.com"
            songkick
          />
          <VenueCard
            venueName="Monarch"
            venueID="1595753-monarch"
            venueUrl="http://www.monarchsf.com/"
            songkick
          />
          <VenueCard
            venueName="Great American Music Hall"
            venueID="1261-great-american-music-hall"
            venueUrl="http://www.slimspresents.com/venue_detail/gamh/"
            songkick
          />
          <VenueCard
            venueName="The Warfield"
            venueID="949-warfield"
            venueUrl="http://thewarfieldtheatre.com/"
            songkick
          />
          <VenueCard
            venueName="The Midway"
            venueID="3013529-midway"
            venueUrl="http://www.themidwaysf.com/"
            songkick
          />
          <VenueCard
            venueName="The Great Northern"
            venueID="3366109-great-northern-san-francisco"
            venueUrl="http://www.thegreatnorthernsf.com/"
            songkick
          />
          <VenueCard
            venueName="Neck of the Woods"
            venueID="2091824-neck-of-the-woods"
            venueUrl="http://neckofthewoodssf.com/"
            songkick
          />
          <VenueCard
            venueName="Hemlock Tavern"
            venueID="31153-hemlock-tavern"
            venueUrl="http://www.hemlocktavern.com/"
            songkick
          />
          <VenueCard
            venueName="Temple"
            venueID="32793-temple"
            venueUrl="http://www.templesf.com/"
            songkick
          />
          <VenueCard
            venueName="Greek Theatre"
            venueID="841-greek-theatre"
            venueUrl="http://thegreekberkeley.com/"
            songkick
          />
          <VenueCard
            venueName="Bill Graham Civic Auditorium"
            venueID="65-bill-graham-civic-auditorium"
            venueUrl="http://www.billgrahamcivicauditorium.com/"
            songkick
          />
          <VenueCard
            venueName="Brick & Mortar Music Hall"
            venueID="1296241-brick-and-mortar-music-hall"
            venueUrl="http://brickandmortarmusic.com/"
            songkick
          />
          <VenueCard
            venueName="Social Hall SF"
            venueID="3068854-social-hall-sf"
            venueUrl="http://www.socialhallsf.com/"
            songkick
          />
          <VenueCard
            venueName="The Regency Ballroom"
            venueID="1418-regency-ballroom"
            venueUrl="http://www.theregencyballroom.com/"
            songkick
          />
          <VenueCard
            venueName="The Great Northern"
            venueID="3366109-great-northern-san-francisco"
            venueUrl="http://www.thegreatnorthernsf.com/"
            songkick
          />
          <VenueCard
            venueName="Cobb's Comedy Club"
            venueID="KovZpZAEkFEA"
            venueUrl="http://www.cobbscomedy.com/"
            ticketmaster
          />
          <VenueCard
            venueName="Punch Line"
            venueID="KovZpZAE6e7A"
            venueUrl="http://www.punchlinecomedyclub.com/"
            ticketmaster
          />
        </VenuesContainer>
      </div>
    );
  }
}

export default App;
