const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs } = require('../controllers/blogController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', verifyToken, createBlog);
router.get('/', verifyToken, getAllBlogs);

module.exports = router;