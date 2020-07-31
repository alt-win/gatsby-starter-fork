import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'sponsors', 'contribute', 'team'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="sponsors">
                    <a href="#">Sponsors</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contribute">
                    <a href="#">Contribute</a>
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
