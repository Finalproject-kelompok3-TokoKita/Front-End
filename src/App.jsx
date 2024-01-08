import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './style.css'
import Home from './Pages/Home'
import Productlist from './Pages/Productlist'
import Sellerpage from './Pages/Sellerpage'
import Userprofile from './Pages/Userprofile'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Dashboard from './Pages/Dashboard'
import Statusorder from './Pages/Statusorder'
import Login from './Pages/Froms/Login'
import Register from './Pages/Froms/Register'
import Sellersignup from './Pages/Froms/Sellersignup'
import Useredit from './Pages/Froms/Useredit'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        {/* Main */}    
        <Route path='/' element={<Home/>} />
        <Route path='/productlist' element={<Productlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* Seller */}
        <Route path='/seller-register' element={<Sellersignup/>} />
        <Route path='/sellerpage' element={<Sellerpage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/orderlist' element={<Statusorder/>} />
        {/* User */}
        <Route path='/useredit' element={<Useredit/>} />
        <Route path='/userprofile' element={<Userprofile/>} />
      </Routes>
    </Router>
  )
}

export default App
