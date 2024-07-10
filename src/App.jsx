import { useState } from 'react'
import Header from './components/Header'
import { Home } from './components/Home'
import Works from './components/Works'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Works />
      
      
    </>
  )
}

export default App
