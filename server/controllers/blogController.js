// ติดต่อ / ดำเนินการกับ database

const slugify = require("slugify")
const Blogs = require('../models/blogSchema')
const { v4: uuidv4 } = require('uuid');

// บันทึกข้อมูล
module.exports.create = (req,res)=>{
    const {title,content,author} = req.body
    const slug = slugify(title)

    if(!slug){
        slug=uuidv4()
    }

    // ตรวจสอบข้อมูล
    if(!title){
        return res.status(400).json({error:"กรุณาป้อนชื่อบทความ"})
       }
    if(!content){
        return res.status(400).json({error:"กรุณาป้อนบทความ"})
    }

    // บันทึกข้อมูล
    Blogs.create({title,content,author,slug})
    .then((blog)=>{res.json(blog)})
    .catch((err)=>{res.status(400).json({error:"มีชื่อบทความซ้ำกัน"})})
}

// ดึงข้อมูลบทความ
module.exports.getAllBlog = (req,res)=>{
    Blogs.find() // ดึงข้อมูลทั้งหมด
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json({error:err})) 
}

// ดึงข้อมูลบทความเดียว อ้างอิงตาม slug
module.exports.singleBlog = (req,res)=>{
    const slug = req.params //req.params => { slug: 'ชื่อ slug ใน url' }
    Blogs.findOne(slug)
    .then((singleData)=>res.json(singleData))
    .catch((err)=>res.status(400).json({error:err}))
}

// ลบข้อมูล
module.exports.remove = (req,res)=>{
    const {slug} = req.params
    Blogs.findOneAndDelete({slug})
    .then((removeData)=>res.json("ลบบทความเรียบร้อยแล้ว"))
    .catch(err=>res.status(400).json({error:err}))
}

// อัพเดทข้อมูล
module.exports.update = (req,res)=>{
    const {slug} = req.params

    // ส่งข้อมูลใหม่เข้ามา
    const {title,content,author} = req.body
    Blogs.findOneAndUpdate({slug},{title,content,author},{new:true})
    .then((updateData)=>res.json(updateData))
    .catch(err=>res.status(400).json({error:err}))
}