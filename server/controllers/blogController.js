// ติดต่อ / ดำเนินการกับ database

const slugify = require("slugify")
const Blogs = require('../models/blogSchema')

// บันทึกข้อมูล
module.exports.create = (req,res)=>{
    const {title,content,author} = req.body
    const slug = slugify(title)

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
    .catch((err)=>{res.status(400).json({error:err})})
}

