import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h2>Habari!</h2>
      <h3>
        I'm Swaleh Mhina, I'm a full stack developer from Arusha Tanzania.
      </h3>
      <p>
        Need a developer? <Link to="/contact">Contact me!</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
