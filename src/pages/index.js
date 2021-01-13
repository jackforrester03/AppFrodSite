import React from "react"
import { Link } from "gatsby"
import "../components/App.css"

import BaseLayout from "../components/BaseLayout"
import HeroImage from "../components/HeroImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <HeroImage />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div> */}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </BaseLayout>
)

export default IndexPage
