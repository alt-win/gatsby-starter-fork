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
import '../assets/scss/home-swipers.scss'
import sponsor1 from '../assets/images/sponsors/sponsor1.svg'
import sponsor2 from '../assets/images/sponsors/sponsor2.png'
import sponsor3 from '../assets/images/sponsors/sponsor3.png'
import sponsor4 from '../assets/images/sponsors/sponsor4.png'
import sponsor5 from '../assets/images/sponsors/sponsor5.png'
import sponsor6 from '../assets/images/sponsors/sponsor6.svg'
import sponsor7 from '../assets/images/sponsors/sponsor7.svg'
import sponsor8 from '../assets/images/sponsors/sponsor8.svg'
import sponsor9 from '../assets/images/sponsors/sponsor9.png'
import sponsor10 from '../assets/images/sponsors/sponsor10.png'
import sponsor11 from '../assets/images/sponsors/sponsor11.png'


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
    this.sponsorsLg = new Swiper('#sponsors-lg-swiper', {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }
    }); 
    this.sponsorsMd = new Swiper('#sponsors-md-swiper', {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        },
      }
    }); 
    this.sponsorsSm = new Swiper('#sponsors-sm-swiper', {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
      }
    });
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
              <p>The BCH DevCon is Being held at the Blockchain Plug near the LAX airport in Los Angeles.  With over </p>
          </div>
          </section>
          <section id="sponsors" className="main special">
            <header className="major">
              <h2>Sponsors</h2>
            </header>
            <p></p>
            <ul className="sponsors">
                <div id="sponsors-lg-swiper" className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"><a href="#"><img src={sponsor1} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor2} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor3} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor4} alt="sponsor" title="sponsor"/></a></div>
                  </div>
                </div>
                <div id="sponsors-md-swiper" className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"><a href="#"><img src={sponsor5} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor6} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor7} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor8} alt="sponsor" title="sponsor"/></a></div>
                  </div>
                </div>
                <div id="sponsors-sm-swiper" className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"><a href="#"><img src={sponsor9} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor10} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor11} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor6} alt="sponsor" title="sponsor"/></a></div>
                    <div className="swiper-slide"><a href="#"><img src={sponsor5} alt="sponsor" title="sponsor"/></a></div>
                  </div>
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
                <a href="https://discord.gg/NnmvC7c" className="icon major image fa-trophy fit">
                  <span className="label">Discord</span>
                </a>
              </li>
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
                <a href="https://discord.gg/NnmvC7c" className="icon major image fa-prizes fit">
                  <span className="label">Discord</span>
                </a>
              </li>
              <li>
                <h3>Join Our Discord Server</h3>
                <a href="https://discord.gg/NnmvC7c" className="icon major image fa-discord fit">
                  <span className="label">Discord</span>
                </a>
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
                  Elenore is the organizer of the past two bitcoin cash DevCon events both in the Netherlands, and SanFransisco.
                  Her main platform is <a target="_blank" href="https://cryptocanal.org">CryptoCanal</a>.
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
