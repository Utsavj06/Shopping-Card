import React from 'react'
import { Box } from '@mui/material'
import Styled from 'styled-components'

const Cards = Styled.button`
    width: 100px;
    background-color: #9265ba;
    height: 100px;
    margin-top: 20px;
    background-image: linear-gradient(150deg, blue, yellow);
    border-radius: 20%;

    &:hover {
    background-image: linear-gradient(150deg, #c0eb78, yellow);
    cursor: pointer;
    }
` 

const Card = ({children , click}) => {
  return (
    <>
    <Cards onClick={click}>
        <Box width='100%' display='flex' 
             justifyContent='center' 
             alignItems='center'>
        {children}
        </Box>
    </Cards>
    </>
  )
}

export default Card