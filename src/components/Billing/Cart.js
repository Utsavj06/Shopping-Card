import React from 'react'
import { Box, Typography } from '@mui/material'
import CartCard from './CartCard'
import { items } from './BillingCart'

const Cart = () => {
    // console.log(items)
  return (
    <Box height='91vh'>
        <Box sx={{height:'55px', 
                 display:'flex', 
                 alignItems:'center', 
                 justifyContent:'center', 
                 borderBottom:'1px solid black', 
                 borderLeft:'1px solid black'}}>
            <Typography variant='h4'>
                Your Cart
            </Typography>
        </Box>
        <CartCard allItem={items} />
    </Box>
  )
}

export default Cart