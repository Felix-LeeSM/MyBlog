const express = require("express");
const res = require('express/lib/response');
const app = express(); // express 서버 객체를 받아온다.
const port = 3000;
// require은 package를 불러오는 함수이다. 

app.get('/', (req, res) => {
    res.send("Hello World");
});
// get이라는 요청을 받았는데, /주소일 때 그 뒤의 function을 실행하라.

// loop back 주소라는 것이 있다. << 자신의 컴퓨터를 가르키는 주소.
// 이것의 별명이 localhost이다.
// => localhost == 127.0.0.1

app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!");
});
