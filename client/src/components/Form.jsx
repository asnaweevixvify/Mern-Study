import React from 'react'
import { useState } from 'react'

function Form() {

    const [state,setState] = useState({
        title:'',
        content:'',
        author:''
    })

    const {title,content,author} = state

    function inputValue(name){
        return (e)=>{setState({...state,[name]:e.target.value})}
    }

    function submitData(e){
        e.preventDefault()
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