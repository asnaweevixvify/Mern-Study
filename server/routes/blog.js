const express = require("express")
const router = express.Router()
const {create,getAllBlog,singleBlog,remove} = require('../controllers/blogController')

router.post('/create',create)
router.get('/blogs',getAllBlog)
router.get('/blog/:slug',singleBlog)
router.delete('/blog/:slug',remove)

module.exports = router