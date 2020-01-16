import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return <p className={footerStyles.footer}>{data.site.siteMetadata.author} (c) 2020</p>
}

export default Footer
