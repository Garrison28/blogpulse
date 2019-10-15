const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
    db.post.findAll().then(function (posts) {
        res.render('posts/index');
    });
});

router.get('/:id', function (req, res) {
    db.post.findByPk(parseInt(req.params.id))
        .then(function (post) {
            post.getComments().then(function(comments) {
                post.getAuthor().then(function (author) {
                res.render('posts/show', { post, author, comments });
                })
            });
        });
});
// router.get('/:id/comments', function(req, res) {
//     db.post.findByPk(parseInt(req.params.id))
//         .then(function(post) {
//             post.getComments().then(function(comments) {
//                 res.render(`posts/${post.id}`, {post, comments})
//             })
//         })
// })

router.post('/:id/comments', function(req, res) {
    console.log(req.params.id)
    console.log(req.body)
    db.post.findByPk(parseInt(req.params.id))
        .then(function(post) {
            post.createComment(req.body).then(function(comment) {
                res.redirect(`/posts/${req.params.id}`)
            })
        })
})

router.get('/new', function (req, res) {
    res.render('posts/new');
});


module.exports = router;