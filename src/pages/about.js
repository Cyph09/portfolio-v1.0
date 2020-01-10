import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <p>
      Hi! My name is Swaleh Mhina. I'm passionate about web development. I build
      sites with HTML5, CSS3, and JavaScript.
    </p>

    <p>
      Want me to build something for you?{" "}
      <Link to="/contact">Let talk about it.</Link>
    </p>
  </Layout>
)

export default About
