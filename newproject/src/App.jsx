import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Aboutus from './arsha.jsx/aboutus'
import Aboutus2 from './arsha.jsx/aboutus2'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Aboutus3 from './arsha.jsx/aboutus3'
import Navbar from './arsha.jsx/navbar'

function App() {
  return(
    <>
    <div>
       <Navbar/>
    <Aboutus/>
      <Aboutus2/>
      <Aboutus3/>
      
      
    </div>
    
    </>
  
  )
}
export default App
