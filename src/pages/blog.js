import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const postsTitles = posts.allMarkdownRemark.edges.map(edge => {
    return (
      <Link to={`/blog/${edge.node.fields.slug}`}>
        <li key={edge.node.id}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>Published: {edge.node.frontmatter.date}</p>
        </li>
      </Link>
    )
  })
  return (
    <Layout>
      <h2>Latest articles about web development.</h2>
      <ol>{postsTitles}</ol>
    </Layout>
  )
}

export default BlogPage
