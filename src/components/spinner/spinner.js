import React from 'react'
import styled from 'styled-components'
import png from '../../assets/img/loading.svg'

const Image = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: calc(50% - 15px);
`

const Div = styled.div`
  color: firebrick;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  width: 120px;
  position: absolute;
  top: 50%;
  left: calc(50% - 60px);
`

const Spinner = (props) => {
  if (props.noData) {
    return <Div>FEED DOWN</Div>
  }
  return (
    <Image src={png} alt="loading indicator" />
  )
}

export default Spinner
