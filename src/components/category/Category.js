import React , { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box, IconButton } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Categories } from './Generator'

const Category = (props) => {
  const navigate = useNavigate();
  const list = useSelector(state=> state.orderReducer)
  const [value, setValue] = useState();
  const [count, setCount] =useState(0)

  useEffect(()=>{
    let array = Object.keys(list).map(key=> list[key])
    setCount(array.length)
  },[list])

  const handleCartButton = () => {
    navigate('./cart')
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.categoryResult(newValue)
  };

  return (
  <>
  <Box sx={{display: 'flex' , justifyContent: 'space-between', width:'90vw'}}>
    <Box>
    <BottomNavigation sx={{backgroundColor:'#8aa9eb' , width:'1000px'}} value={value} onChange={handleChange}>
      {Categories.map((category ) => {
      return <BottomNavigationAction
      key={category.item}
        label={category.item}
        value={category.item}
        icon={<category.icon />}
      />
        
      })}
    </BottomNavigation>
    </Box>
    <Box display='flex' alignItems='flex-end'>
      {count? <Box display='flex' justifyContent='center' mb={3} ml={-1}
                         sx={{backgroundColor: 'red', width: '20px', 
                              borderRadius: '50%',fontSize: '15px', position:'absolute' }}>
                  {count}
              </Box> : <></> }
       <IconButton  onClick={handleCartButton} >
           <ShoppingBagOutlinedIcon cursor='pointer' sx={{fontSize: '40px' , color:'blue' , marginTop:'10px'}}  />
       </IconButton>
    </Box>
  </Box>
  </>
  )
}

export default Category