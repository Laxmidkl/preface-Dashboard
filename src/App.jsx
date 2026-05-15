import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Sales from './pages/Sales'
import Todo from './pageComponents/todo/Todo'


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Layout />}>
           <Route index element={<Sales />} />
           <Route path='app-todo' element={<Todo/>} />

      </Route>

    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App