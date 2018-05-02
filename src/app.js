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
              venueName="Public Works Loft"
              venueID="3036394"
              venueUrl="//publicsf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Phoenix Hotel"
              venueID="460441"
              venueUrl="https://www.phoenixsf.com/"
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
              venueName="The Fillmore"
              venueID="6239"
              venueUrl="http://www.thefillmore.com/"
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
              venueName="PianoFight"
              venueID="2842438"
              venueUrl="http://pianofight.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Cafe Du Soleil"
              venueID="1924859"
              venueUrl="//publicsf.com"
              site="songkick"
            />
            <VenueCard
              venueName="Club Deluxe"
              venueID="34906"
              venueUrl="http://www.liveatdeluxe.com/"
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
              venueName="The ENDUP"
              venueID="9783"
              venueUrl="https://theendupsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="F8"
              venueID="2007629"
              venueUrl="//feightsf.com"
              site="songkick"
            />
            <VenueCard
              venueName="The Regency Ballroom"
              venueID="1418"
              venueUrl="http://www.theregencyballroom.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Swedish American Hall"
              venueID="11561"
              venueUrl="https://www.swedishamericanhall.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Café du Nord"
              venueID="555661"
              venueUrl="http://www.cafedunord.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Knockout"
              venueID="31067"
              venueUrl="https://www.theknockoutsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Biscuits and Blues"
              venueID="11497"
              venueUrl="http://www.biscuitsandblues.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Boom Boom Room"
              venueID="11491"
              venueUrl="http://www.boomboomblues.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Amnesia"
              venueID="31103"
              venueUrl="http://amnesiathebar.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Elbo Room"
              venueID="341"
              venueUrl="http://www.elbo.com/"
              site="songkick"
            />
            <VenueCard
              venueName="El Rio"
              venueID="31117"
              venueUrl="http://www.elriosf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Saloon"
              venueID="31138"
              venueUrl="http://www.sfblues.net/Saloon.html"
              site="songkick"
            />
            <VenueCard
              venueName="DNA Lounge"
              venueID="7516"
              venueUrl="http://www.dnalounge.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Make-Out Room"
              venueID="31096"
              venueUrl="http://www.makeoutroom.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Milk Bar"
              venueID="31417"
              venueUrl="http://www.milksf.com"
              site="songkick"
            />
            <VenueCard
              venueName="The Lost Church"
              venueID="1443733"
              venueUrl="http://www.thelostchurch.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Bazaar Cafe"
              venueID="31094"
              venueUrl="http://www.bazaarcafe.com/calendar/"
              site="songkick"
            />
            <VenueCard
              venueName="Red Poppy Art House"
              venueID="31061"
              venueUrl="http://redpoppyarthouse.org/"
              site="songkick"
            />
            <VenueCard
              venueName="Madrone Art Bar"
              venueID="977016"
              venueUrl="http://www.madroneartbar.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Revolution Cafe"
              venueID="36415"
              venueUrl="http://www.revolutioncafesf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Sofar Sounds"
              venueID="2954803"
              venueUrl="https://www.sofarsounds.com/san-francisco"
              site="songkick"
            />
            <VenueCard
              venueName="Royale"
              venueID="31110"
              venueUrl="http://www.theroyalesf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Rite Spot Cafe"
              venueID="31099"
              venueUrl="http://www.ritespotcafe.net/"
              site="songkick"
            />
            <VenueCard
              venueName="Amoeba Music"
              venueID="537711"
              venueUrl="https://www.amoeba.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Eagle Tavern"
              venueID="31163"
              venueUrl="http://www.sf-eagle.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Hawthorn"
              venueID="2751608"
              venueUrl="http://hawthornsf.launchrock.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Honey Hive Gallery"
              venueID="2501134"
              venueUrl="http://honeyhivecollective.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Harlot"
              venueID="12974"
              venueUrl="http://www.harlotsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Masonic"
              venueID="5614"
              venueUrl="http://sfmasonic.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Davies Symphony Hall"
              venueID="505"
              venueUrl="http://sfwmpac.org/symphonyhall/sh_index.html"
              site="songkick"
            />
            <VenueCard
              venueName="Palace of Fine Arts"
              venueID="33807"
              venueUrl="http://www.palaceoffinearts.org/"
              site="songkick"
            />
            <VenueCard
              venueName="Golden Gate Park"
              venueID="5832"
              venueUrl="http://www.sfgov.org/site/recpark_index.asp"
              site="songkick"
            />
            <VenueCard
              venueName="SFJAZZ Center"
              venueID="2020904"
              venueUrl="https://www.sfjazz.org"
              site="songkick"
            />
            <VenueCard
              venueName="Bender's"
              venueID="31167"
              venueUrl="http://www.bendersbar.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Bimbo's 365 Club"
              venueID="1236"
              venueUrl="http://www.bimbos365club.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Gray Area Theater"
              venueID="2726288"
              venueUrl="https://grayarea.org/"
              site="songkick"
            />
            <VenueCard
              venueName="Alamo Drafthouse"
              venueID="3206908"
              venueUrl="https://drafthouse.com/sf/"
              site="songkick"
            />
            <VenueCard
              venueName="Le Colonial Restaurant"
              venueID="13009"
              venueUrl="http://www.lecolonialsf.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Love + Propaganda"
              venueID="3160144"
              venueUrl="http://www.loveandpropaganda.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Blondie's"
              venueID="31102"
              venueUrl="http://www.blondiesbarsf.com/calendar.html"
              site="songkick"
            />
            <VenueCard
              venueName="California Academy of Sciences"
              venueID="49388"
              venueUrl="https://www.calacademy.org/"
              site="songkick"
            />
            <VenueCard
              venueName="Castro Theatre"
              venueID="10317"
              venueUrl="http://www.castrotheatre.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The Armory"
              venueID="2486689"
              venueUrl="http://armoryclub.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Greek Theatre"
              venueID="841"
              venueUrl="http://thegreekberkeley.com/"
              site="songkick"
            />
            <VenueCard
              venueName="The New Parish"
              venueID="523156"
              venueUrl="http://www.thenewparish.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Starline Social Club"
              venueID="1522398"
              venueUrl="http://www.starlinesocialclub.com/"
              site="songkick"
            />
            <VenueCard
              venueName="Cornerstone Craft Beer"
              venueID="3629749"
              venueUrl="https://www.cornerstoneberkeley.com/"
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
