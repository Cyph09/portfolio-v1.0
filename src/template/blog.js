import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const blogTemplate = props => {
    console.log(props.data);
  return (
    <Layout>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
    </Layout>
  )
}

export default blogTemplate
