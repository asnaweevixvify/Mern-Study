import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { getToken } from '../../services/authorize'

function Edit() {

    const [state,setState] = useState({
        title:'',
        content:'',
        author:'',
    })

    const {title,content,author} = state
    const {slug} = useParams() 

    function fetchData(){
        axios.get(`${import.meta.env.VITE_APP_API}/blog/${slug}`)
        .then((res)=>{
            const {title,content,author} = res.data
            setState({...state,title,content,author})
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])

    function inputValue(name){
        return (e)=>{setState({...state,[name]:e.target.value})}
    }

    function submitData(e){
        e.preventDefault()
        axios.put(`${import.meta.env.VITE_APP_API}/blog/${slug}`,{title,content,author},{
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then((res)=>{
            Swal.fire({
                title: "อัพเดทข้อมูลเรียบร้อย",
                icon: "success",
                draggable: true
              })
              const {title,content,author,slug} = res.data
              setState({...state,title,content,author})
        })
        .catch((err)=>{
            Swal.fire({
                icon: "error",
                title: "อัพเดทไม่สำเร็จ",
                text: err.response.data.error
              });
        })
    }

  return (
    <div className='form-container'>
        <h1>แก้ไขบทความ</h1>
        <form onSubmit={submitData}>
            <h4>ชื่อบทความ</h4>
            <input type='text' value={title} onInput={inputValue('title')}></input>
            <h4>เนื้อหาบทความ</h4>
            <textarea type='text' value={content} onInput={inputValue('content')}></textarea>
            <h4>ผู้เขียน</h4>
            <input type='text' value={author} onInput={inputValue('author')}></input>
            <button type='submit'>อัพเดทบทความ</button>
        </form>
    </div>
  )
}

export default Edit