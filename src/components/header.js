import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => (
  <div className={headerStyles.header}>
    <h1>
      <Link className={headerStyles.title} to="/">
        Swaleh Mhina
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/about"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/process"
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
