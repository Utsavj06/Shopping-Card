import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'
import { Box, Typography, TextField, Button, Divider } from '@mui/material'

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
    const [user, setUser] = useState('')

    const handleLogin = () => {
      // auth.Login(user)
      if(user === 'Utsav'){
        navigate('/e-commerce')
      } else {
        alert('Wrong User')
      }
    }
  return (
    <Box >
        <Box display='flex' justifyContent='center' alignItems='flex-end' height='50vh' gap={5}>
                <Typography variant='subtitle2'>User :</Typography>
                <TextField id="outlined-basic" size='small' 
                           variant="outlined" onChange={(e)=>setUser(e.target.value)}/>
        </Box>
        <Divider />
        <Box display='flex' justifyContent='center' mt={4}>
              <Button variant='outlined' onClick={handleLogin}>Login</Button>
        </Box>
    </Box>
  )
}

export default Login