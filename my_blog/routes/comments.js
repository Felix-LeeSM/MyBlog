const express = require('express');
const Comments = require('../schemas/comment.js');
const router = express.Router();

router.get('/comment/:postId', async (req, res) => {
    const { postId } = req.params;
    const order = req.query;
    const comments = await Comments.find({ postId: Number(postId) });

    if (order === '1') {
        comments.sort((prev, present) => {
            return prev.commentDate - present.commentDate
        })
    }
    res.send(comments);
});

router.post('/comment/:postId', async (req, res) => {
    const { postId } = req.params;
    const { commentAuthor, commentBody } = req.body;

    if (!commentBody) {
        return res.status(400).json({ success: false, errorMessage: '댓글 내용을 입력해주세요' })
    }

    const comments = await Comments.find();
    const commentId = comments[comments.length - 1].commentId + 1
    const today = new Date();
    const month = today.getMonth.length > 1 ? today.getMonth() : '0' + today.getMonth();
    const day = today.getDate.length > 1 ? today.getDate() : '0' + today.getDate();
    const commentDate = Number('' + today.getFullYear() + month + day);

    await Comments.create({
        commentId,
        postId,
        commentAuthor,
        commentBody,
        commentDate,
    });

    res.json({ success: true });
});

router.put('/comment/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const { commentBody } = req.body;

    if (!commentBody) {
        return res.status(400).json({ success: false, errorMessage: '댓글 내용을 입력해주세요' })
    }

    await Comments.updateOne({ commentId: Number(commentId) }, {
        $set: {
            commentBody
        }
    });
    res.json({ success: true });
});

router.delete('/comment/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const comment = await Comments.find({ commentId: Number(commentId) });

    if (!comment.length) {
        return res.status(400).json({ success: false, errorMessage: '해당 댓글은 존재하지 않습니다.' });
    }

    await Comments.deleteOne({ commentId: Number(commentId) });
    res.json({ success: true });
})

module.exports = router;
