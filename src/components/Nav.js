import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['home', 'schedule', 'sponsors', 'join', 'team'] } currentClassName="is-active" offset={-300}>
            <li>
              <Scroll type="id" element="home">
                <a href="#">Home</a>
              </Scroll>
            </li>
            <li>
              <Scroll type="id" element="schedule">
                <a href="#">Schedule</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="sponsors">
                    <a href="#">Sponsors</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="workshops">
                    <a href="#">Workshops</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="join">
                    <a href="#">Join</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="team">
                    <a href="#">Team</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
