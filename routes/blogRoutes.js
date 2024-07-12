const express = require('express')
const { 
    getAllBlogsController, 
    createBlogController, 
    updateBlogController,
    getBlogByIdController, 
    deleteBlogController,  
    userBlogController
} = require('../controllers/blogController')

//router object
const router  = express.Router()

//router
//GET all blogs
router.get('/all-blog',getAllBlogsController)

//POST create blog
router.post('/create-blog',createBlogController)

//PUT update blog
router.put('/update-blog/:id',updateBlogController)

//GET single blog details
router.get('/get-blog/:id',getBlogByIdController)

//DELETE delete blog
router.delete('/delete-blog/:id',deleteBlogController)

//GET user blog
router.get('/user-blog/:id',userBlogController)
module.exports = router;