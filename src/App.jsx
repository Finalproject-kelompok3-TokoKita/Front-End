import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './style.css'
import Home from './Pages/Home'
import Productlist from './Pages/Productlist'
import Sellerpage from './Pages/Sellerpage'
import Userprofile from './Pages/Userprofile'
import Contact from './Pages/Contact'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productlist' element={<Productlist/>} />
        <Route path='/sellerpage' element={<Sellerpage/>} />
        <Route path='/userprofile' element={<Userprofile/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
