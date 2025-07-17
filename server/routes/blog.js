const express = require("express")
const router = express.Router()
const {create,getAllBlog,singleBlog,remove,update} = require('../controllers/blogController')
const {requireLogin} = require('../controllers/authController')

router.post('/create',requireLogin,create)
router.get('/blogs',getAllBlog)
router.get('/blog/:slug',singleBlog)
router.delete('/blog/:slug',requireLogin,remove) //ลบข้อมูล
router.put('/blog/:slug',requireLogin,update) //อัพเดตข้อมูล

module.exports = router