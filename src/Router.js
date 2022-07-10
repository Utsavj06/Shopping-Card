import {Routes, Route} from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import ReqLogin from './components/ReqLogin/ReqLogin'
import Cart from './components/Billing/Cart'

const Router = () => {
    return (
    <Routes>
        <Route path='/Shopping-Card' element={<Home />} />
        <Route path='/e-commerce' element={<ShoppingCart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/e-commerce/cart' element={<Cart />} />
        <Route path='/*' element={<h1>Page Not Found</h1>} />
    </Routes>
    )
}

export default Router