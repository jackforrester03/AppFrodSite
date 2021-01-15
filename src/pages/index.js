import React from "react"

import BaseLayout from "../components/BaseLayout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Cards, { CardContainer } from "../components/Cards"
import { cardData } from "../components/CardData"
import Sponsors, { SponCardContainer, SponText } from "../components/Sponsors"
import { sponCardData } from "../components/SponsorData"

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Hero />
    <CardContainer id="cardContainer">
      {cardData.map((card, index) => (
        <Cards key={index} title={card.title} description={card.description} />
      ))}
    </CardContainer>
    <div style={{ height: "100vh", backgroundColor: "rgba(41, 98, 32, 0.8)" }}>
      Teams as like a list
    </div>
    <SponCardContainer>
      <SponText>Thank you to our sponsors</SponText>
      {sponCardData.map((card, index) => (
        <Sponsors
          key={index}
          title={card.title}
          description={card.description}
          img={card.img}
        />
      ))}
    </SponCardContainer>
    <div style={{ height: "100vh", backgroundColor: "rgba(41, 98, 32, 0.8)" }}>
      Posts
    </div>
  </BaseLayout>
)

export default IndexPage
