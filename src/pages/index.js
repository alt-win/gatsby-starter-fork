import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import PlaceImg1 from '../assets/images/place-img1.jpg'
import PlaceImg2 from '../assets/images/place-img2.jpg'
import PlaceImg3 from '../assets/images/place-img3.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="BCH DevCon III" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Bitcoin Cash DevCon III - Los Angeles, California</h2>
                </header>
                <p>
                  The community gathers to host BCHDevcon III, a 32 hours non-stop
                  hackathon on the 5th and 6th of September 2020. A chance for all hackers to compete for top prizes.

                </p>


                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Register for Free
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
            <div>
            <header className="major">
              <h2>Venue Info</h2>
            </header>
              <img className="" src={PlaceImg1}></img>
              <img className="" src={PlaceImg2}></img>
              <img className="" src={PlaceImg3}></img>
              <p>The BCH DevCon is Being held at the Blockchain Plug near the LAX airport in Los Angeles.  With over </p>
            </div>
          </section>
          <section id="first" className="main special">
            <header className="major">
              <h2>Sponsors</h2>
            </header>
            <p></p>
            <ul className="sponsors">
              <li>

                <span className="icon major spotlight image fit">
                <img src=""></img>
                </span>
              </li>
              <li>

                <span className="icon major spotlight image fit">
                <img src=""></img>
                </span>
              </li><li>

                <span className="icon major spotlight image fit">
                <img src=""></img>
                </span>
              </li>


            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a onClick="toggleTamView()" className="button" id="viewfullteam">

                  </a>
                </li>
              </ul>
            </footer>
          </section>
          <section id="first" className="main special">
            <header className="major">
              <h2>Contribute</h2>
            </header>
            <p>

            </p>

            <ul className="contribute">
              <li>
                <h3>Help fund our FlipStarter Campaign</h3>
                <span className="icon major spotlight image fit">
                <img src=""></img>
                </span>
              </li>
              <li>
                <h3>Become a Sponsor</h3>
                <span className="icon major spotlight image fit">
                <img src=""></img>
                </span>
              </li>
              <li>
                <h3>Donate to our multi-sig addresses</h3>
                <span className="icon major spotlight image fit">
                <img src=""></img>
                </span>
              </li>


            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a onClick="toggleTamView()" className="button" id="viewfullteam">
                    View Full Team
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Team</h2>
            </header>
            <ul className="features">
              <li>

                <span className="icon major spotlight image fit">
                <img src="https://pbs.twimg.com/profile_images/1147044290100678656/rDWEGeFw_400x400.png"></img>
                </span>



                <h3>Christian#1000♦️</h3>
                <h4>Event Host</h4>
                <p>
                  Christian is a Bitcoin Cash leader in southern California, USA
                  who is focused on spreading merchant adoption.  He also runs the
                  <a href="https://youtube.com/BitcoinCast"> Bitcoin Cast</a> podcast.


                </p>
              </li>
              <li>
                <span className="icon major spotlight image fit"><img src="https://pbs.twimg.com/profile_images/1113077204068503552/OFQH0xXt_400x400.png"></img></span>
                <h3>Eléonore Blanc</h3>
                <h4>Event Organizer</h4>

                <p>
                  Elenore is the organizer of the past two bitcoin cash DevCon events both in the Netherlands, and SanFransisco.
                  Her main platform is <a href="https://cryptocanal.org">CryptoCanal</a>.
                </p>
              </li>
              <li>

                <span className="icon major spotlight image fit">
                <img src="https://pbs.twimg.com/profile_images/952295826658795520/7ICtooLL_400x400.jpg"></img>
                </span>



                <h3>Chris Troutner</h3>
                <h4>Mentor</h4>
                <p>
                  Chris is the founder of the <a href="">Permissionless Software Foundation</a>, which seeks to
                  build out the infrastructure for bitcoin cash full stack developers.

                </p>
              </li>
              <li>

                <span className="icon major spotlight image fit">
                <img src="https://i.ibb.co/7tPQmGc/sechet.jpg"></img>
                </span>



                <h3>Amaury Séchet</h3>
                <h4>Mentor</h4>
                <p>
                  Amaury is the lead developer for <a href="https://bitcoinabc.org">Bitcoin ABC</a>,
                  which is currently the most popular fullnode implementation for Bitcoin Cash.


                </p>
              </li>
              <div id="fullteam">
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              </div>

            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a onClick="toggleTamView()" className="button" id="viewfullteam">
                    View Full Team
                  </a>
                </li>
              </ul>
            </footer>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Index

function toggleTamView() {
  var element = document.getElementById("fullteam");
  element.classList.toggle("mystyle");
}
