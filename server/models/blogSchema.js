// title , content , author , slug(url)

const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true //ห้ามป้อนค่าว่าง
    },
    content:{
        type:{},
        required:true
    },
    author:{
        type:String,
        default:"Admin" //ค่าเริ่มต้น
    },
    slug:{
        type:String,
        lowercase:true, //ปรับเป็นตัวพิมพ์เล็ก
        required:true,
        unique:true //ห้ามตั้งชื่อซ้ำ
    }
},{timestamps:true}) //เก็บวันเดือนปีที่เขียน

module.exports = mongoose.model("Blog",blogSchema)