import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GlobalStyle from "../components/GlobalStyle"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
import { FaBars } from "react-icons/fa"

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
        <NavBrand alt="logo" src={Logo}></NavBrand>
        <Bars />
      </NavBarContainer>
      {children}
    </>
  )
}

export default BaseLayout

const NavBarContainer = styled.nav`
  height: 80px;
  top: 0px;
  justify-content: space-between;
  background: transparent;
  z-index: 10000;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 1300px;
  padding: 0 calc((100vw - 1300px) / 2);
`

const NavLink = styled(Link)`
  color: green;
  font-size: 2rem;
  padding: 0 20px;
`

const NavBrand = styled.img`
  color: white;
  height: 100%;
  mix-blend-mode: multiply;
  padding: 0 20px;
`

const Bars = styled(FaBars)`
  font-size: 2rem;
  color: white;
  padding: 2px;
  background-color: green;
  margin: 20px;
`

const NavLinks = styled.div``
