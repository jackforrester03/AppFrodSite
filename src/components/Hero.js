import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

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
      placeholderImage: file(relativePath: { eq: "img2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
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
      <HeroImg fluid={data.placeholderImage.childImageSharp.fluid} />
      <HeroContent>
        <HeroMainText>{data.site.siteMetadata.title}</HeroMainText>
        <HeroSubText to="/about">Find Out More</HeroSubText>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;
  height: 75vh;
  text-align: center;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroImg = styled(Img)`
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`
const HeroContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  top: 5%;
  @media screen and (max-width: 768px) {
    right: 0px;
    text-align: center;
  }
`
const HeroMainText = styled.div`
  /* margin: auto; */
  color: #ffffff;
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: bold;
  padding: 0 0px;
  margin: 0 1000px;
`

const HeroSubText = styled(Link)`
  /* margin: auto; */
  color: green;
  font-size: clamp(1.5rem, 3vw, 3rem);
  padding: 0 50px;
  background: white;
  margin: 10px;
  border-style: solid;
  border-color: green;
  border-width: 3px;
  border-radius: 15px;
  padding: 10px 50px;
`
