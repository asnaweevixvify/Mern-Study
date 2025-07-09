import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'

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
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home