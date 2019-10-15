const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/posts/:id', function(req, res) {
    db.post.findOne({
        where: {id: parseInt(req.params.id)},
        include: [db.comment]
    })
        .then(function(comment) {
            console.log(post.comment)
            res.render('posts/show', { comment });
            // post.getComments().then(function(comments) {
            //     res.render(`posts/${post.id}`, {post, comments})
            // })
        })
})

// router.post('/:id/comments', function(req, res) {
//     db.post.findByPk(parseInt(req.params.id))
//         .then(function(post) {
//             post.createComment(req.body).then(function(comment) {
//                 res.redirect(`posts/${post.id}`)
//             })
//         })
// })

// router.get('/:id/comments', function(req, res) {
//     db.post.findByPk(parseInt(req.params.id))
//         .then(function(post) {
//             post.getComment().then(function(comment) {
//                 res.render('posts/show', {post, comment})
//             })
//         })
// });



module.exports = router;