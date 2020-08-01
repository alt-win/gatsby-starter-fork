import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Email:</dt>
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
          <a href="https://discord.gg/NnmvC7c" className="icon fa-discord alt">
            <span className="label">Discord</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      BCH DevCon III
    </p>
  </footer>
)

export default Footer
