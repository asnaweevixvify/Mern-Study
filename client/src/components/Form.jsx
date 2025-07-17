import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { getUser , getToken } from '../../services/authorize'

function Form() {

    const [state,setState] = useState({
        title:'',
        content:'',
        author:getUser()
    })

    const {title,content,author} = state

    function inputValue(name){
        return (e)=>{setState({...state,[name]:e.target.value})}
    }

    function submitData(e){
        e.preventDefault()
        //import.meta.env.VITE_APP_API = process.env.VITE_APP_API ใช้ในฝั่ง client
        axios.post(`${import.meta.env.VITE_APP_API}/create`,
        {title,content,author},{
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(()=>{
            Swal.fire({
                title: "บันทึกข้อมูลเรียบร้อย",
                icon: "success",
                draggable: true
              })
              setState({...state,title:'',content:'',author:''})
        })
        .catch((err)=>{
            Swal.fire({
                icon: "error",
                title: "บันทึกข้อมูลไม่สำเร็จ",
                text: err.response.data.error
              });
        })
    }

  return (
    <div className='form-container'>
        <h1>สร้างบทความ</h1>
        <form onSubmit={submitData}>
            <h4>ชื่อบทความ</h4>
            <input type='text' value={title} onInput={inputValue('title')}></input>
            <h4>เนื้อหาบทความ</h4>
            <textarea type='text' value={content} onInput={inputValue('content')}></textarea>
            <h4>ผู้เขียน</h4>
            <input type='text' value={author} onInput={inputValue('author')}></input>
            <button type='submit'>บันทึกบทความ</button>
        </form>
    </div>
  )
}

export default Form