import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import University1 from './pages/University1'
import University2 from './pages/University2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <h1>hi this is landing page</h1>
      <Routes>
        <Route path='/unit1' element={<University1/>}/>
        <Route path='/unit2' element={<University2/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
