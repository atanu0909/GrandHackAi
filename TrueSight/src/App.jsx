import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'


function App() {

  return (
    <>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}
      <Navbar />
        <Welcome />
  
    </>
  )
}

export default App
