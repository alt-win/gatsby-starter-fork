import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import '../assets/scss/place-swiper.scss'
import '../assets/scss/sponsors.scss'
import '../assets/scss/join.scss'
import competeIcon from '../assets/images/join/compete.svg'
import sponsorIcon from '../assets/images/join/sponsor.svg'
import discordIcon from '../assets/images/join/discord.svg'
import donateIcon from '../assets/images/join/donate.svg'
import helpIcon from '../assets/images/join/help.svg'
import person from '../assets/images/person.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  componentDidMount(){
    this.placeSwiper = new Swiper('#place-swiper', {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }
    });
  }

  toggleTeamView = () => {
    const element = document.getElementsByClassName('fullteam-item');
    const btn = document.getElementById('viewfullteam-btn');

    for(let i=0; i<element.length; i++)
    {
      if (element[i].style.display != "block") {
        element[i].style.display = "block";
        btn.innerText = "View less";
      } else {
        element[i].style.display = "none";
        btn.innerText = "View Full Team";
      }
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
          <section id="home" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Bitcoin Cash DevCon III - Global</h2>
                </header>
                <p>
                  The community gathers to host BCHDevcon III, a 32 hours non-stop
                  hackathon on the 5th and 6th of September 2020. The event provides a chance for all hackers to compete for top prizes.

                </p>


                <ul className="actions">
                  <li>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd1OInMhJczCwTD-5ch5Lx5F7nFpdIKmLwpKUJ2SYWSrxUGTw/viewform?usp=sf_link" target="_blank" className="button">
                      Register for Free
                    </Link>
                    <Link to="https://discord.gg/NnmvC7c" target="_blank" className="button">
                      Join our Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
            </section>

            <section id="schedule" className="main">
            <header className="major">
              <h2>Schedule (Tentative)</h2>
            </header>
            <p>
            <h3>Saturday September 5th, 2020 (All times are listed in PDT)</h3>
              <ul>
                <li><b>10:00</b> - Coding Begins</li>
              </ul>
            <h3>Sunday, September 6th, 2020 </h3>
              <ul>
                <li><b>18:00</b> - Coding Stops, Project Presentations Begin</li>
                <li><b>19:30</b> - Judging Begins</li>
                <li><b>21:00</b> - Winners Announced</li>
              </ul>

            </p>
            </section>


          <section id="sponsors" className="main special">
            <header className="major">
              <h2>Sponsors</h2>
            </header>
            <ul className="sponsors">
              <div className="lg-sponsors">

              </div>
              <div className="md-sponsors">

              </div>
              <div className="sm-sponsors">
                <a href="https://fullstack.cash/" target="_blank"><div className="sponsor-logo image sponsor11"><br></br><br></br><br></br><br></br><br></br><br></br><span>FullStack.cash</span></div></a>
                <a href="https://generalprotocols.com/" target="_blank"><div className="sponsor-logo image sponsor12"><br></br><br></br><br></br><br></br><br></br><br></br><span>General Protocols</span></div></a>
              </div>
            </ul>
          </section>
          <section id="join" className="main special">
            <header className="major">
              <h2>Be a Part of BCH DevCon</h2>
            </header>

            <ul className="features">
              <li>
                <h3>Compete in BCH DevCon</h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1OInMhJczCwTD-5ch5Lx5F7nFpdIKmLwpKUJ2SYWSrxUGTw/viewform?usp=sf_link" target="_blank"><img className="mt-sm-25" src={competeIcon} /></a>
              </li>
              <li>
                <h3>Help fund our FlipStarter Campaign</h3>
                <a href="http://flipstarter.devcon.cash" target="_blank"><img src={helpIcon} /></a>
              </li>
              <li>
                <h3>Become a Sponsor</h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYomkD9j8rf4uZ_bX2SCcSZVroMFfP_15Hk4ISYR25ro3QTw/viewform?usp=sf_link" target="_blank"><img className="mt-sm-25" src={sponsorIcon} /></a>
              </li>
              <li className="donate">
                <h3>Donate to our multi-sig addresses</h3>
                <a href="https://explorer.bitcoin.com/bch/address/bitcoincash:pr508v7nem4z67u82rh5qqtpcctzkw6gfvdyvk6ag2" target="_blank"><img src={donateIcon} /></a>
              </li>
              <li>
                <h3>Join Our Discord Server</h3>
                <a href="https://discord.gg/NnmvC7c" target="_blank"><img src={discordIcon} /></a>
              </li>

            </ul>

          </section>

          <section id="team" className="main special">
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
                  <a target="_blank" href="https://youtube.com/BitcoinCast"> Bitcoin Cast</a> podcast.
                </p>
              </li>

              <li>
                <span className="icon major spotlight image fit">
                  <img src="https://pbs.twimg.com/profile_images/1113077204068503552/OFQH0xXt_400x400.png"></img>
                </span>
                <h3>Eléonore Blanc</h3>
                <h4>Event Organizer</h4>
                <p>
                  Elenore organized the last BCHDevCon hackathon in Amsterdam. She works with <a target="_blank" href="https://www.satoshisangels.com">Satoshi's Angels</a> to spread knowledge about p2p electronic cash.
                </p>
              </li>

              <li>
                <span className="icon major spotlight image fit">
                  <img src="https://pbs.twimg.com/profile_images/952295826658795520/7ICtooLL_400x400.jpg"></img>
                </span>
                <h3>Chris Troutner</h3>
                <h4>Mentor</h4>
                <p>
                  Chris is the founder of the <a target="_blank" href="https://psfoundation.cash">Permissionless Software Foundation</a>, which seeks to
                  build out the infrastructure for bitcoin cash full stack developers.
                </p>
              </li>

              <li>
                <span className="icon major spotlight image fit amaury">
                  <img src="https://i.ibb.co/7tPQmGc/sechet.jpg"></img>
                </span>
                <h3>Amaury Séchet</h3>
                <h4>Mentor</h4>
                <p>
                  Amaury is the lead developer for <a target="_blank" href="https://bitcoinabc.org">Bitcoin ABC</a>,
                  which is currently the most popular fullnode implementation for Bitcoin Cash.
                </p>
              </li>
              <li>
                <span className="icon major spotlight image fit">
                  <img src="https://i.ibb.co/59snY6t/vinarmani.jpg" />
                </span>
                <h3>Vin Armani</h3>
                <h4>Presenter</h4>
                <p>
                  Vin is the CTO of <a href="https://cointext.io/" target="_blank">CoinText</a>.  Some of his other contributions to bitcoin cash include the SLP postage protocol, and the SWAP protocol.
                </p>
              </li>
              <li>
                <span className="icon major spotlight image fit">
                  <img src="https://i.ibb.co/1fcWMRg/collinenstad2.jpg" />
                </span>
                <h3>Collin Enstad</h3>
                <h4>Media</h4>
                <p>
                  Collin is the #1 livestreamer in bitcoin cash, and will be streaming through the DevCon.
                </p>
              </li>
              <li>
              <span className="icon major spotlight image fit">
                <img src="https://avatars3.githubusercontent.com/u/44456286?s=400&u=ba1782a28c76c8c7a2e9908ad7977c31517e33b8&v=4"></img>
              </span>
              <h3>JT Freeman</h3>
              <h4>Mentor</h4>
              <p>
                JT is the organizer of the SLP Virtual Hackathon, co-founder of <a href="https://fountainhead.cash/" target="_blank">fountainhead.cash</a> developer services, and SLP Foundation lead developer.
              </p>
            </li>
              <li>
              <span className="icon major spotlight image fit">
                <img src="https://bitcoincashnode.org/static/img/team/calin.jpg"></img>
              </span>
              <h3>Calin Culianu</h3>
              <h4>Mentor</h4>
              <p>
                Calin is an Electron Cash maintainer, Fulcrum creator, Bitcoin Cash Node developer, and former Bitcoin ABC co-founder.
              </p>
            </li>
            <li className="fullteam-item">
              <span className="icon major spotlight image fit">
                <img src="https://bitcoincashnode.org/static/img/team/im_uname.png"></img>
              </span>
              <h3>Imaginary Username</h3>
              <h4>Mentor</h4>
              <p>
                Uname is a Bitcoin Cash dev infrastructure provider, and contributor to various projects.
              </p>
            </li>
            <li className="fullteam-item">
            <span className="icon major spotlight image fit">
              <img src="https://i.ibb.co/1zYDHSC/Fernando-Knuth-1x1.jpg" />
              </span>
              <h3>Fernando Pelliccioni</h3>
              <h4>Mentor</h4>
              <p>
                Fernando is the founder and lead developer of <a href="https://kth.cash/" target="_blank">Knuth</a>, Bitcoin Cash Node contributor, and former Bitcoin ABC developer.
              </p>
            </li>

              <li className="fullteam-item">
              <span className="icon major spotlight image fit">
                <img src="https://gitlab.com/uploads/-/system/user/avatar/630849/avatar.png"></img>
              </span>
              <h3>Tom Zander</h3>
              <h4>Mentor</h4>
              <p>
                Tom Zander is the founder of <a href="https://flowee.org/" target="_blank">Flowee</a>, has been active in Bitcoin for 6 years and today works on providing APIs, infrastructure and tools to the Bitcoin Cash economy.
              </p>
              </li>

              <li className="fullteam-item">
                <span className="icon major spotlight image fit">
                  <img src={person} />
                </span>
                <h3>More to come here. . </h3>
                <h4>Mentor</h4>
                <p>
                  <a href="mailto:contact@devcon.cash">Let us know</a> if you'd like to be a mentor.
                </p>
              </li>


            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a onClick={this.toggleTeamView} className="button" id="viewfullteam-btn">
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
