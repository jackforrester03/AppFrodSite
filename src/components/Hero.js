import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { RiArrowDownCircleFill } from "react-icons/ri"
import scrollTo from "gatsby-plugin-smoothscroll"

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
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
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
      <HeroImgContainer>
        <HeroImg fluid={data.placeholderImage.childImageSharp.fluid} />
      </HeroImgContainer>
      <HeroContent>
        <HeroMainText>{data.site.siteMetadata.title}</HeroMainText>
        <Link to="/">
          <IconButton onClick={() => console.log("hi")}>
            {/* scrollTo("#cardContainer") */}
            <ArrowDown />
          </IconButton>
        </Link>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroImgContainer = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
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
  height: 50%;
  top: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0px 0;
`
const HeroMainText = styled.div`
  /* margin: auto; */
  color: #ffffff;
  font-size: clamp(3rem, 6vw, 10rem);
  font-weight: bold;
  padding: 10px 20px;
  /* margin-top: 50%; */
  border-color: #ffffff;
  border-style: solid;
  border-width: 0 5px 0px 0;
  max-width: 40vw;
  text-align: left;
  @media only screen and (max-width: 600px) {
    max-width: 60vw;
  }
`

const ArrowDown = styled(RiArrowDownCircleFill)`
  font-size: clamp(5rem, 5vw, 7rem);
  color: white;
  margin-top: 20px;
  cursor: pointer;
`
const IconButton = styled.button`
  margin: 0px;
  padding: 0px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`
