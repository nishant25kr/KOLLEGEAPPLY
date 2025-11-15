import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import University1 from './pages/University1'
import University2 from './pages/University2'
import Landing from './pages/Landing'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/unit1' element={<University1 />} />
        <Route path='/unit2' element={<University2 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
