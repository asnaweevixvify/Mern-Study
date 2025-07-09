import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Nav from './components/Nav'
import Single from './components/Single'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Form/>}></Route>
        <Route path='/blog/:slug' element={<Single/>}></Route>
      </Routes>
    </>
  )
}

export default App
