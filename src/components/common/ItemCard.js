import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import { Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCards = Styled.div`
      width: 100%;
      height: 50px;
      background-color: #e5f0aa;
      display:flex;
      align-items: center;
      padding-left: 10px;
      justify-content: space-between;
`

const ItemCard = ({item, price, quantity}) => {
  const [quant, setQuant]= useState(quantity)
  const [itemPrice, setItemPrice]= useState(price)
  const [totalPrice, setTotalPrice]= useState(0)

  const handleIncreaseItems = () => {
    setQuant(quant+1)
  }

  const handleDecreaseItems = () => {
    setQuant(quant-1)
  }
// console.log(itemPrice)
  useEffect(()=>{
    setItemPrice(price*quant)
  },[quant])

  return (
    <>
    <ItemCards>
        <Box width='200px' display='flex' justifyContent='center'>
          <Box width='100px' display='flex' justifyContent='flex-start'>{item}</Box>
        </Box>
        <Box width='100px'>{itemPrice}</Box>
        <Box display='flex' gap={1.5}>
          <Box>
            <RemoveIcon onClick={handleDecreaseItems}/></Box>
            <Box mt={0.4}>{quant}</Box> 
          <Box>
            <AddIcon onClick={handleIncreaseItems} /></Box>
        </Box>
    </ItemCards>
    </>
  )
}

export default ItemCard