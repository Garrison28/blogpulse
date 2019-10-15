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
        })
})



module.exports = router;