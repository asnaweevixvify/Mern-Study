import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { authenticate } from '../../services/authorize'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../services/authorize'

function Login() {
    const [state,setState] = useState({
        username:'',
        password:''
    })

    const {username,password} = state

    const navigate = useNavigate()

    function inputValue(name){
        return (e)=>{setState({...state,[name]:e.target.value})}
    }

    function submitData(e){
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_APP_API}/login`,{username,password})
        .then((res)=>{
            Swal.fire({
                title: "เข้าสู่ระบบสำเร็จ",
                icon: "success",
                draggable: true
              })
            authenticate(res)
        })
        .then(()=>{
            navigate('/create')
        })
        .catch((err)=>{
            Swal.fire({
                icon: "error",
                title: "เข้าสู่ระบบไม่สำเร็จ",
                text: err.response.data.error
              });
        })
    }

    useEffect(()=>{
        getUser() && navigate('/')
    },[])

  return (
    <div className='form-container'>
        <h1>เข้าสู่ระบบ | Admin</h1>
        <form onSubmit={submitData}>
            <h4>Username</h4>
            <input type='text' value={username} onInput={inputValue('username')}></input>
            <h4>Password</h4>
            <input type='password' value={password} onInput={inputValue('password')}></input>
            <button type='submit'>เข้าสู่ระบบ</button>
        </form>
    </div>
  )
}

export default Login