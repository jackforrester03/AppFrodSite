import React from "react"

import BaseLayout from "../components/BaseLayout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Cards from "../components/Cards"

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Hero />
    <Cards />
    <div style={{ height: "100vh" }}>idnbisng fibnfibn</div>
  </BaseLayout>
)

export default IndexPage
