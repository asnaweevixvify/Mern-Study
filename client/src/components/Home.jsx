import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Home() {
    const [data,setData] = useState([])

    function fetchData(){
        axios.get(`${import.meta.env.VITE_APP_API}/blogs`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    },[])

    //substring(0,180) คือตัดเอาแค่ข้อความ 180 ตัวแรก

    function confirmDelete(slug){
        Swal.fire({
            title: "ต้องการลบข้อมูลหรือไม่?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ลบข้อมูล",
            cancelButtonText:"ยกเลิก"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteBlog(slug)
            }
          })
    }

    function deleteBlog(slug){
        //ส่ง request ไปที่ api เพื่อลบข้อมูล
        axios.delete(`${import.meta.env.VITE_APP_API}/blog/${slug}`)
        .then((res)=>{
            Swal.fire({
                title: res.data, //res.data => ลบบทความเรียบร้อยแล้ว
                icon: "success"
              })
            fetchData() //ดึงข้อมูลบทความที่เหลือหลังลบบทความเสร็จ
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div className='home-container'>
        <h1>MERN-STACK-WORKSHOP</h1>
        <div className="blog-container">
            {data.map((e,index)=>{
                return(
                    <div className="blog-box" key={index}>
                        <Link to={`/blog/${e.slug}`}>
                            <div className="title-box">
                                {e.title}
                            </div></Link>
                        <div className="content-box">
                            {e.content.substring(0,180)} 
                        </div>
                        <div className="author-box">
                            {e.author},เผยแพร่วันที่ {new Date(e.createdAt).toLocaleString()}
                        </div>
                        <hr></hr>
                        <div className="btn-box">
                            <button className='btn-del' onClick={()=>confirmDelete(e.slug)}>ลบบทความ</button>
                            <Link to={`/blog/edit/${e.slug}`}><button className='btn-up'>แก้ไขบทความ</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home