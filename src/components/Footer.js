import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Aliquam sed mauris</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:contact@devcon.cash">Contact@DevCon.cash</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://t.me/BCHDevCon" className="icon fa-telegram alt">
            <span className="label">Telegram</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/DevConcash" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DevConcash" className="icon fa-discord alt">
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
