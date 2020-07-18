import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

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
                  global hackathon on the 5th and 6th of September 2020. A chance for all hackers to compete for top prizes.

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
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Team</h2>
            </header>
            <ul className="features">
              <li>

                <span class="icon major spotlight image fit">
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
                <span class="icon major spotlight image fit"><img src="https://pbs.twimg.com/profile_images/1113077204068503552/OFQH0xXt_400x400.png"></img></span>
                <h3>Eléonore Blanc</h3>
                <h4>Event Organizer</h4>

                <p>
                  Elenore is the organizer of the past two bitcoin cash DevCon events both in the Netherlands, and SanFransisco.
                  Her main platform is <a href="https://cryptocanal.org">CryptoCanal</a>.
                </p>
              </li>
              <li>

                <span class="icon major spotlight image fit">
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

                <span class="icon major spotlight image fit">
                <img src="https://i.ibb.co/7tPQmGc/sechet.jpg"></img>
                </span>



                <h3>Amaury Séchet</h3>
                <h4>Mentor</h4>
                <p>
                  Amaury is the lead developer for <a href="https://bitcoinabc.org">Bitcoin ABC</a>,
                  which is currently the most popular fullnode implementation for Bitcoin Cash.


                </p>
              </li>
              <div class="fullteam"></div>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="" className="button" id="viewfullteam">
                    View Full Team
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
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
