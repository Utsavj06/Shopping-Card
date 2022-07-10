import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './components/auth';
import { Box, Button } from "@mui/material";
import Category from "./components/category/Category";
import Itemlist from "./components/itemslist/Itemlist";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [selectedCategory, setSelectedCategory] = useState()

    const category = (item) => {
      setSelectedCategory(item)
    } 
    const handleLogout = () => {
      auth.logout();
      navigate('/login')
    }
  return (
    <Box>
        <Button onClick={handleLogout}>Logout</Button>
        <Box display='flex'>
          <Box sx={{width:'90%'}}>
            <Category categoryResult={category}/>
            <Itemlist value={selectedCategory} />
          </Box>
        </Box>
    </Box>
  )
}

export default ShoppingCart