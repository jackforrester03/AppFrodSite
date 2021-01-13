import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GlobalStyle from "../components/GlobalStyle"

const BaseLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <NavBarContainer>
        <div>{data.site.siteMetadata.title}</div>
      </NavBarContainer>
      {children}
    </>
  )
}

export default BaseLayout

const NavBarContainer = styled.nav`
  height: 80px;
  justify-content: center;
  background: transparent;
  z-index: 10000;
`
