const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use([cors()]);
//미들웨어이다. 모든 요청에 대해서 cors 에러가 나지 않도록 한다.

app.get('/cors-test', (req, res) => {
    res.send('hi!');
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 켜졌어요');
});

