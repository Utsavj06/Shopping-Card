import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()

  const handleNav = () => {
    navigate('/login')
  }
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='50vh'>
        <Button onClick={handleNav}>Redirect to Login</Button>
    </Box>
  )
}

export default Home