import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <HeroContainer>
      <HeroText>{data.site.siteMetadata.title}</HeroText>
      <HeroImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  text-align: center;
  top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroImg = styled(Img)`
  position: relative;
  top: 0px;
  height: 100%;
  width: 100%;
  background: cover;
`
const HeroText = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  top: 50%;
  z-index: 2;
  color: #ffffff;
  font-size: 2rem;
`
