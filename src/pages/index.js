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
      if (element[i].style.display === "none") {
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
          <section id="venue" className="main">
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
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd1OInMhJczCwTD-5ch5Lx5F7nFpdIKmLwpKUJ2SYWSrxUGTw/viewform?usp=sf_link" className="button">
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
              <div id="place-swiper" className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="place-img img1"></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="place-img img2"></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="place-img img3"></div>
                  </div>
                </div>
              </div>
              <p>The BCH DevCon is Being held at the Blockchain Plug near the LAX airport in Los Angeles.  </p><br></br>
              <h3>Address</h3>
              <p><address>614 East Manchester Blvd, Inglewood, CA 90301, United States</address></p>
          </div>
          </section>
          <section id="sponsors" className="main special">
            <header className="major">
              <h2>Sponsors</h2>
            </header>
            <p>coming soon</p>
            <ul className="sponsors">
              <div className="lg-sponsors">
                <a href="#"><div className="sponsor-logo sponsor1"></div></a>
                <a href="#"><div className="sponsor-logo sponsor2"></div></a>
                <a href="#"><div className="sponsor-logo sponsor3"></div></a>
              </div>
              <div className="md-sponsors">
                <a href="#"><div className="sponsor-logo sponsor4"></div></a>
                <a href="#"><div className="sponsor-logo sponsor5"></div></a>
                <a href="#"><div className="sponsor-logo sponsor6"></div></a>
                <a href="#"><div className="sponsor-logo sponsor7"></div></a>
              </div>
              <div className="sm-sponsors">
                <a href="#"><div className="sponsor-logo sponsor8"></div></a>
                <a href="#"><div className="sponsor-logo sponsor9"></div></a>
                <a href="#"><div className="sponsor-logo sponsor10"></div></a>
                <a href="#"><div className="sponsor-logo sponsor11"></div></a>
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1OInMhJczCwTD-5ch5Lx5F7nFpdIKmLwpKUJ2SYWSrxUGTw/viewform?usp=sf_link"><img className="mt-sm-25" src={competeIcon} /></a>
              </li>
              <li>
                <h3>Help fund our FlipStarter Campaign</h3>
                <a href="http://flipstarter.devcon.cash"><img src={helpIcon} /></a>
              </li>
              <li>
                <h3>Become a Sponsor</h3>
                <a href="mailto:contact@devcon.cash"><img className="mt-sm-25" src={sponsorIcon} /></a>
              </li>
              <li className="donate">
                <h3>Donate to our multi-sig addresses</h3>
                <a href="https://explorer.bitcoin.com/bch/address/bitcoincash:pr508v7nem4z67u82rh5qqtpcctzkw6gfvdyvk6ag2"><img src={donateIcon} /></a>
              </li>
              <li>
                <h3>Join Our Discord Server</h3>
                <a href="https://discord.gg/NnmvC7c"><img src={discordIcon} /></a>
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
                <img src="https://avatars3.githubusercontent.com/u/44456286?s=400&u=ba1782a28c76c8c7a2e9908ad7977c31517e33b8&v=4"></img>
              </span>
              <h3>JT Freeman</h3>
              <h4>Mentor</h4>
              <p>
                JT is a developer who has contributed a lot to the SLP ecosystem including the npm-js library.
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
            <li>
              <span className="icon major spotlight image fit">
                <img src="https://bitcoincashnode.org/static/img/team/im_uname.png"></img>
              </span>
              <h3>Imaginary Username</h3>
              <h4>Mentor</h4>
              <p>
                Uname is a Bitcoin Cash dev infrastructure provider, and contributor to various projects.
              </p>
            </li>
            <li>
              <span className="icon major spotlight image fit">
                <img src="https://gitlab.com/uploads/-/system/user/avatar/630849/avatar.png"></img>
              </span>
              <h3>Tom Zander</h3>
              <h4>Mentor</h4>
              <p>
                Tom Zander is a C++ developer, and creator of <a href="https://flowee.org/">Flowee the Hub</a> bitcoin cash node.
              </p>
            </li>

              <li className="fullteam-item">
                <span className="icon major spotlight image fit">
                  <img src={person} />
                </span>
                <h3>More to come here. . </h3>
                <h4>Mentor</h4>
                <p>
                  Let us know if you'd like to be a mentor.
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
