import React from "react"
import styled from "styled-components"

const Cards = props => {
  return (
    <CardMain>
      <h3>{props.title}</h3>
      <p>{props.descption}</p>
    </CardMain>
  )
}

export default Cards

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  padding: 100px 0;
  border-style: solid;
  border-width: 5px 0;
  border-color: green;
`

const CardMain = styled.div`
  width: 300px;
  height: 300px;
  background: #296220;
  padding: 10px 20px;
  border-style: solid;
  border-radius: 10px;
  margin: 20px 0;
  color: white;
`
