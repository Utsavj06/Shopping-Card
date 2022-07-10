import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Divider, Typography } from '@mui/material'
import ItemCard from '../common/ItemCard'
import { items } from './BillingCart'

const CartCard = ({allItem}) => {
    const list = useSelector(state=> state.orderReducer)
    const [arrayData, setArrayData] = useState([])

    useEffect(()=>{
       let array = Object.keys(list).map(key=> list[key])
      setArrayData(array)
    },[list])

    useEffect(()=>{
      arrayData.map(item=>{
        console.log(item.quantity)
      })
    },[arrayData])

    return (
      <Box height='100%' width='100%' display='flex' flexDirection='column' alignItems='center' borderLeft='1px solid black'>
          <Box display='flex' 
               justifyContent='center' 
               height='60px' 
               width='60%'
               alignItems='center' borderBottom={1}>
            <Typography variant='subtitle2'>Items</Typography>
          </Box>
          <Box height='65vh' width='50%'>
            {arrayData.map(item=>{
                return <Box key={item.id}>
                         <ItemCard item={item} />
                       </Box>
            })}
          </Box>
          <Box width='50%'>
            <Typography variant='body1' sx={{color:'black'}}>Total Price</Typography>
            <Divider />
            <Box display='flex' justifyContent="space-around">
            
            </Box>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='flex-end' mt={2}>
            <Button variant='outlined'>Place Order</Button>
          </Box>
      </Box>
    )
}

export default CartCard;