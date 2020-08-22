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
      <h2>Donations:</h2>
      <dl className="alt">
        <dt>BCH:</dt>
        <dd>
          <a href="bitcoincash:pr508v7nem4z67u82rh5qqtpcctzkw6gfvdyvk6ag2">bitcoincash:pr508v7nem4z67u82rh5qqtpcctzkw6gfvdyvk6ag2</a>
        </dd>
        <dt>SLP:</dt>
        <dd>
          <a href="simpleledger:pr508v7nem4z67u82rh5qqtpcctzkw6gfvpl8d0ak5">simpleledger:pr508v7nem4z67u82rh5qqtpcctzkw6gfvpl8d0ak5</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://t.me/BCHDevCon" target="_blank" className="icon fa-telegram alt">
            <span className="label">Telegram</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/DevConcash" target="_blank" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://discord.gg/NnmvC7c" target="_blank" className="icon fa-discord alt">
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
