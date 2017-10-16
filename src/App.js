import React, { Component } from 'react'
import 'normalize.css'
import './app.css'
import styled from 'styled-components'
import VenueCard from './components/venue-card/venue-card.js'
import bg from './assets/img/bg.png'

const AppContainer = styled.div`
  padding: 20px;
  background: url(${bg});
  min-height: 100vh;
  @media (min-width: 500px) {
    padding: 60px;
  }
`
const VenuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 60px;
  position: relative;
`

const Toggle = styled.a`
  position: absolute;
  top: 25px;
  right: 120px;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(248, 212, 207, 0.8);
  text-align: center;
  width: 110px;
  padding: 5px;
  font-size: 14px;
  @media (min-width: 500px) {
    border-radius: 10px;
    width: 150px;
    padding: 10px;
    font-size: 18px;
    right: 160px;
    top: 10px;
  }
  &:hover {
    background-color: rgb(248, 212, 207);
    cursor: pointer;
    transform: translateY(-2px);
  }
  &.close {
    right: 0;
  }
`

const ToggleAll = (props) => (
  <Toggle
    className={props.className}
    onClick={props.onClick}
  >
    {props.children}
  </Toggle>
)

class App extends Component {
  openAll() {
    const divArray = [...document.querySelectorAll('[data-card]')]
    const divArrayChildren = divArray.map(div => div.children[0])
    divArrayChildren.forEach(div => {
      div.click()
    })
  }

  closeAll() {
    const divArray = [...document.querySelectorAll('[data-list]')]
    const divArrayChildren = divArray.map(div => div.children[0])
    divArrayChildren.forEach(div => {
      div.click()
    })
  }

  render() {
    return (
      <AppContainer>
        <VenuesContainer>
        <ToggleAll onClick={this.openAll}>OPEN ALL</ToggleAll>
        <ToggleAll className="close" onClick={this.closeAll}>CLOSE ALL</ToggleAll>
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
            venueName="Thee Parkside"
            venueID="258-thee-parkside"
            venueUrl="http://www.theeparkside.com/"
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
      </AppContainer>
    );
  }
}

export default App;
