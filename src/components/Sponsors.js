import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function renderImage(file) {
  // handle svgs
  if (file.node.extension === "svg") {
    return <img src={file.node.publicURL} alt=""></img>
  } else {
    return <Img fluid={file.node.childImageSharp.fluid} />
  }
}

const MyImg = props => {
  console.log(props.img)
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(
          image => image.node.relativePath === props.img
        )
        return renderImage(image)
      }}
    />
  )
}

const Sponsors = props => {
  console.log(props)
  return (
    <SponCardMain>
      <SponImg>
        <MyImg img={props.img} />
      </SponImg>
    </SponCardMain>
  )
}

export default Sponsors

export const SponCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  padding: 50px 0;
  border-style: solid;
  border-width: 5px 0;
  border-color: green;
`

const SponCardMain = styled.div`
  width: 250px;
  height: 150px;
  margin: 20px 0;
  background: #fff;
  padding: 5px 5px;
  border-color: #296220;
  border-style: solid;
  border-radius: 10px;
  color: #296220;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SponImg = styled.div`
  margin: 10px 10px;
  width: 100%;
  height: 50%;
`

export const SponText = styled.div`
  width: 100vw;
  text-align: center;
  padding: 50px 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
`
