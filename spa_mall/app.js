const express = require("express");
const connect = require('./schemas')
// const connect = requrie('./schemas')로 작성하여도 된다.
// 저런 식으로 쓰면, schemas라는 js파일을 먼저 찾고, 폴더를 찾은 후 
// 'index.js'를 찾아본다.
const res = require('express/lib/response');
const app = express(); // express 서버 객체를 받아온다.
const port = 3000;

connect();

// require은 package를 불러오는 함수이다.
const goodsRouter = require("./routes/goods");
//const cartsRouter = require('./routes/carts')// .js는 생략 가능

const requestMiddleware = (req, res, next) => {
    console.log("Request URL :", req.originalUrl, " - ", new Date());
    next();
}

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded());
app.use(requestMiddleware);
/*
app.use((req, res, next) => {
    console.log("미들웨어가 구현되었나?"); // 새로고침 만큼 뜬다.
    console.log("Request URL :", req.originalUrl, " - ", new Date());
    // log를 남기는 미들웨어
    
    
    // res.send("미들웨어의 응답이에요");
    
    // console.log("주소는?", req.path); 
    // localhost:3000/test >> /text, localhost:3000/ >> / 

    if (req.path === "/test") {
        res.send("test 주소로 왔구나?");
    }


    next(); // 다음의 미들웨어로 넘어간다. 
    // next()가 없으면 무한 로딩이 걸린다.
    
    
});
// 미들웨어 구현 << 이게 가장 위에 있어야 다른 것이 모두 영향을
// 받을 수 있다.
*/

app.use("/api", [goodsRouter]);
// /api로 들어왔을 떄, [goodsRouter, cartsRouter]의 함수가 실행된다.
// 뒤에 함수를 [f1, f2]로 설정하여 각각에 대해 검사도 가능하다.
// 여기선, /api로 들어왔을 때 해당 뒷 부분에 따라서 goodsRouter가 동작한다.
// 자세한 이해를 위해서는 goods.js 파일을 다시 보면 된다.

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
// app.listen은 서버를 해당 포트로 켤 것이라는 뜻이다. 서버가 켜지면, 그 후의 function이 작동한다.
