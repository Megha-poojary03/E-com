import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Category from './Pages/Category'
import  Contact from './Pages/Contact'
import FilterPr from './Pages/FilterPr'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      
    <Navbar/>
    <Routes>

      <Route/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Products/>}/>
      
      <Route path='/category' element={<Category/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path= '/cat-Product/:catname' element={<FilterPr/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}
