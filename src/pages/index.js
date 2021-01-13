import React from "react"

import BaseLayout from "../components/BaseLayout"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Hero />
  </BaseLayout>
)

export default IndexPage
