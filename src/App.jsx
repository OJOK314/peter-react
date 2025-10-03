import React from 'react'
import Navigations from './components/Navigations'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'



import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Contact' element={<Contact />} />
        
        </Routes>
      </BrowserRouter>

    </div>   
  )
}

export default App;
