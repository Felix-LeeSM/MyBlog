const express = require('express');
const Comments = require('../schemas/comment.js');
const Post = require('../schemas/post.js');
const router = express.Router();

// const postSchema = new mongoose.Schema({
//     postId: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     postAuthor: {
//         type: String,
//         required: true
//     },
//     postTitle: {
//         type: String,
//         required: true
//     },
//     postBody: {
//         type: String,
//         required: true
//     },
//     postDate: {
//         type: String,
//         required: true
//     }
// });

router.get('/', async (req, res) => {
    let posts = await Post.find();
    const { postTitle, postAuthor, postDate, order } = req.query

    if (postTitle) {
        posts = posts.filter((post) => post.postTitle === postTitle);
        console.log(1)
    }
    if (postAuthor) {
        posts = posts.filter((post) => post.postAuthor === postAuthor);
        console.log(2)
    }
    if (postDate) {
        posts = posts.filter((post) => post.postDate === Number(postDate));
        console.log(3)
    }
    if (order === '1') {
        posts.sort((prev, present) => {
            return prev.postDate - present.postDate
        });
        console.log(4)
    }

    //제목, 작성자명, 작성 날짜를 조회하기

    if (posts.length) {
        return res.json(posts);
    }

    res.status(400).json({ success: false, errorMessage: '해당 조건의 게시글이 없습니다.' });
});

// /post/write
router.post('/write', async (req, res) => {
    const post = await Post.find();
    const postId = post[post.length - 1].postId + 1;
    const { postAuthor, postTitle, postBody } = req.body;

    const today = new Date();
    const month = today.getMonth.length > 1 ? today.getMonth() : '0' + today.getMonth();
    const day = today.getDate.length > 1 ? today.getDate() : '0' + today.getDate();
    const postDate = Number('' + today.getFullYear() + month + day);

    await Post.create({
        postId,
        postAuthor,
        postTitle,
        postBody,
        postDate
    });

    res.json({ success: true });
});

router.put('/write/:postId', async (req, res) => {
    const { postId } = req.params; // string 상태이다.
    //제목, 작성자명, 작성 내용 수정하기
    const { postTitle, postAuthor, postBody } = req.body;

    await Post.updateOne({ postId: Number(postId) }, {
        $set: {
            postTitle,
            postAuthor,
            postBody
        }
    });
    res.json({ success: true })
});

router.get('/:postId', async (req, res) => {
    const { postId } = req.params;

    const [post] = await Post.find({ postId: Number(postId) });

    if (post) {
        return res.json(post);
    }
    res.status(400).json({ success: false, errorMessage: '해당 게시글은 존재하지 않습니다.' });
});

module.exports = router;