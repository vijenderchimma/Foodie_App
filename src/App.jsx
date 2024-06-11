import React from 'react'
import UserLanadingPage from './Foodie/pages/UserLanadingPage'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import ProductMenu from './Foodie/components/ProductMenu'

const App = () => {
  return (
      <Routes>
        <Route exact path = "/" element={<UserLanadingPage/>} />
        <Route exact path= "/products/:firmId" element = {<ProductMenu/>} />
      </Routes>
  )
}

export default App