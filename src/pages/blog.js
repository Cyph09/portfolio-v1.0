import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const Blog = () => {
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
          }
        }
      }
    }
  `)
  console.log(posts.allMarkdownRemark.edges)
  const postsTitles = posts.allMarkdownRemark.edges.map(post => {
    return (
      <li key={post.node.id}>
        <h2>{post.node.frontmatter.title}</h2>
        <p>Published: {post.node.frontmatter.date}</p>
      </li>
    )
  })
  return (
    <Layout>
      <h2>Latest articles about web development.</h2>
      <ol>{postsTitles}</ol>
    </Layout>
  )
}

export default Blog
