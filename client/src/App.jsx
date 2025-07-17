import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Nav from './components/Nav'
import Single from './components/Single'
import Edit from './components/Edit'
import Login from './components/Login'
import { getUser } from '../services/authorize'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!getUser() && location.pathname === '/create'){
      navigate('/login')
    }
    else if(!getUser() && location.pathname.startsWith('/blog/edit/')){
      navigate('/login')
    }
  },[location])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Form/>}></Route>
        <Route path='/blog/:slug' element={<Single/>}></Route>
        <Route path='/blog/edit/:slug' element={<Edit/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
