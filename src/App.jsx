import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'

const Home = () => {
  return <div>Home Page</div>
}


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

      </Route>

    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App