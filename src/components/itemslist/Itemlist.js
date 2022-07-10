import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Box, Divider , Grid, Typography} from '@mui/material'
import {ItemList} from './Generator'
import Card from '../common/Card'
import { orderBilling } from '../../Setup/action/action'

const Itemlist = ({value}) => {

    const dispatch = useDispatch()
    const [shoppingItem, setShoppingItem] = useState(ItemList)
    const [myItem, setMyItem]= useState([])
    const [itemObj, setItemObj] = useState({})
    const [order, setOrder] = useState();
    
    
    useEffect(()=>{
        if(value!==undefined){
            const newArray = ItemList.filter((item, index)=>{
                return item.item === value
            })
            setShoppingItem(newArray)
        }
    },[value])

    const addItem = (item) => {
        const currentItem = item.id

        setOrder(item);

        if(itemObj[currentItem]){
            itemObj[currentItem].quantity +=1
            // console.log(itemObj[currentItem])
        }
        else{
            itemObj[currentItem]= item
        }
        setItemObj({ ...itemObj });
        dispatch(orderBilling(itemObj))
    }


  return (
    <Box mt={1} ml={5}>
        <Typography variant='h5'><u>Categories</u></Typography>
        <Grid container>
        {shoppingItem.map((items)=>{
            return <Box key={items.id} width='100%' 
                        display='flex' gap={5} mt={3}>
                            <Grid item md={2}>
                                <Box width='100px' display='flex' 
                                     height='100%' borderRight='1px solid black'
                                     alignItems='center'>
                                    <Typography variant='body2'>{items.item}</Typography>
                                </Box>
                            </Grid>
                            {items.subitem.map((item)=>{
                                return <Grid item={7} key={item.id}>
                                         <Card click={()=>addItem(item)}>
                                           <Box>
                                                <Box>{`Rs. ${item.price}`}</Box>
                                                <Box>{item.item}</Box>
                                           </Box>
                                       </Card>
                                       </Grid>
                            })}
                            <Divider />
                   </Box>
        })}
        </Grid>
    </Box>
  )
}

export default Itemlist