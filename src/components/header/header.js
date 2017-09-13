import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #999;
  margin-bottom: 30px;
`

const H1 = styled.h1`
  text-align: center;
  padding: 30px;
  font-size: 60px;
  margin: 0;
`
const Header = (props) => {
  return(
    <Container>
      <H1>{props.title}</H1>
    </Container>
  )
}

export default Header
