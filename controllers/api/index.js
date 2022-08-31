const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes');

const Post = require('../../models/Post.js');
const User = require('../../models/User.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;