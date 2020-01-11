import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => (
  <>
    <h1>Swaleh Mhina</h1>
    <nav>
      <ul>
        <li>
          <Link className={headerStyles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/process">Process</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Header
