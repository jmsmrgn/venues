import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
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
    right: 165px;
    top: 10px;
  }
  &:hover {
    background-color: rgb(248, 212, 207);
    cursor: pointer;
    transform: translateY(-2px);
  }
  &.close {
    right: 5px;
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
      <Provider store={store}>
        <AppContainer>
          <VenuesContainer>
          <ToggleAll onClick={this.openAll}>OPEN ALL</ToggleAll>
          <ToggleAll className="close" onClick={this.closeAll}>CLOSE ALL</ToggleAll>
            <VenueCard
              venueName="Rickshaw Stop"
              venueID="14791"
              venueUrl="//www.rickshawstop.com"
              site="songkick"
            />
            <VenueCard
              venueName="Bottom of the Hill"
              venueID="248"
              venueUrl="//www.bottomofthehill.com"
              site="songkick"
            />
            <VenueCard
              venueName="1015 Folsom"
              venueID="5670"
              venueUrl="//www.1015.com"
              site="songkick"
            />
            <VenueCard
              venueName="Audio"
              venueID="2393199"
              venueUrl="//www.audiosf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Fox Theater"
              venueID="953251"
              venueUrl="//www.thefoxoakland.com"
              site="songkick"
            />
            <VenueCard
              venueName="The Independent"
              venueID="324"
              venueUrl="//www.theindependentsf.com"
              site="songkick"
            />
            <VenueCard
              venueName="The Mezzanine"
              venueID="329"
              venueUrl="//www.mezzaninesf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Hotel Utah Saloon"
              venueID="328"
              venueUrl="//www.hotelutah.com"
              site="songkick"
            />
            <VenueCard
              venueName="The Chapel"
              venueID="2029634"
              venueUrl="//www.thechapelsf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Slim's"
              venueID="1489"
              venueUrl="//www.slims-sf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Public Works"
              venueID="1108926"
              venueUrl="//publicsf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Halcyon"
              venueID="3429914"
              venueUrl="//www.halcyon-sf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Monarch"
              venueID="1595753"
              venueUrl="http://www.monarchsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Great American Music Hall"
              venueID="1261"
              venueUrl="http://www.slimspresents.com/venue_detail/gamh/"
              site="songkick"
            />
            <VenueCard
              venueName="The Warfield"
              venueID="949"
              venueUrl="http://thewarfieldtheatre.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Midway"
              venueID="3013529"
              venueUrl="http://www.themidwaysf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Great Northern"
              venueID="3366109"
              venueUrl="http://www.thegreatnorthernsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Neck of the Woods"
              venueID="2091824"
              venueUrl="http://neckofthewoodssf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Hemlock Tavern"
              venueID="31153"
              venueUrl="http://www.hemlocktavern.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Temple"
              venueID="32793"
              venueUrl="http://www.templesf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Greek Theatre"
              venueID="841"
              venueUrl="http://thegreekberkeley.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Bill Graham Civic Auditorium"
              venueID="65"
              venueUrl="http://www.billgrahamcivicauditorium.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Brick & Mortar Music Hall"
              venueID="1296241"
              venueUrl="http://brickandmortarmusic.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Social Hall SF"
              venueID="3068854"
              venueUrl="http://www.socialhallsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Regency Ballroom"
              venueID="1418"
              venueUrl="http://www.theregencyballroom.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Great Northern"
              venueID="3366109"
              venueUrl="http://www.thegreatnorthernsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Thee Parkside"
              venueID="258"
              venueUrl="http://www.theeparkside.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Cobb's Comedy Club"
              venueID="KovZpZAEkFEA"
              venueUrl="http://www.cobbscomedy.com/"
              site="ticketmaster"
            />
            <VenueCard
              venueName="Punch Line"
              venueID="KovZpZAE6e7A"
              venueUrl="http://www.punchlinecomedyclub.com/"
              site="ticketmaster"
            />
          </VenuesContainer>
        </AppContainer>
      </Provider>
    );
  }
}

export default App;
