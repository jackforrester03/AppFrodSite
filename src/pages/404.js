import React from "react"

import BaseLayout from "../components/BaseLayout"
import SEO from "../components/seo"
import "../components/App.css"

const NotFoundPage = () => (
  <BaseLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BaseLayout>
)

export default NotFoundPage
