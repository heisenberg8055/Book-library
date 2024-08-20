import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'
import DeleteBook from './pages/DelereBook'
import EditBook from './pages/EditBook'
import CreateBook from './pages/CreateBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook />}/>
      <Route path='/books/details/:id' element={<ShowBook />}/>
      <Route path='/books/edit/:id' element={<EditBook />}/>
      <Route path='/books/delete/:id' element={<DeleteBook />}/>
    </Routes>
  )
}

export default App