import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
import Form from './components/Form'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/create' element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
