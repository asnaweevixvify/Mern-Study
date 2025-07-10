const express = require("express")
const router = express.Router()
const {create,getAllBlog,singleBlog,remove,update} = require('../controllers/blogController')

router.post('/create',create)
router.get('/blogs',getAllBlog)
router.get('/blog/:slug',singleBlog)
router.delete('/blog/:slug',remove) //ลบข้อมูล
router.put('/blog/:slug',update) //อัพเดตข้อมูล

module.exports = router