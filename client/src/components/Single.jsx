import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'

function Single() {

    const {slug} = useParams() //รับค่าจาก parameter ใน url
    const [blog,setBlog] = useState({})

    function fetchData(){
        axios.get(`${import.meta.env.VITE_APP_API}/blog/${slug}`)
        .then((res)=>setBlog(res))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    //.data? เช็คว่ามีค่าใน data ไหม
  return (
    <div className="blog-box">
        <div className="title-box">
            {blog.data?.title}
        </div>
        <div className="content-box">
            {blog.data?.content} 
        </div>
        <div className="author-box">
            {blog.data?.author},เผยแพร่วันที่ {new Date(blog.data?.createdAt).toLocaleString()}
        </div>
        <hr></hr>
    </div>
  )
}

export default Single