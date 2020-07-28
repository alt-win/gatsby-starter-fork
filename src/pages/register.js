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
      <div id="main">
      <section>
      <h1>Register</h1>
        <p>
          <ol>
            <li>Join our <a href="https://discord.gg/NnmvC7c">Discord</a></li>
            <li>Fill out some basic info:</li>
            <form action="/action_page.php">
              <label for="slp">SLP addresss:</label>
              <input type="text" id="slp" name="slp"></input><br></br><br></br>
              <label for="discord">Discord Username:</label>
              <input type="text" id="discord" name="discord"></input><br></br><br></br>
              <label for="github">Github profile:</label>
              <input type="text" id="github" name="github"></input><br></br><br></br>
              <label for="vattend">Check here if you can only attend virtually:</label>
              <input type="checkbox" id="vattend" name="vattend"></input><br></br><br></br>
              <label for="agree">Check here that you hve read and agree to the rules:</label>
              <input type="checkbox" id="agree" name="agree"></input><br></br><br></br>
              <input type="submit" value="Submit"></input>
              </form>
            <li>Submit info</li>
          </ol>
        </p>
      </section>
      </div>
      </Layout>
    )
  }
}

export default Index
