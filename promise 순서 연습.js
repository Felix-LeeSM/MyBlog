console.log(1);
const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first');
        resolve('done')
    }
    , 1000)
})
console.log(2);
result.then((value) => {
    console.log('second');
    console.log('third')
    console.log(value)
})

console.log(3);
/*
1
2
3
first
second
last
done
*/


// resolve함수 실행 경우
const result = new Promise((resolve, reject) => {
    setTimeout(() => resolve('king'), 1000);
    })
result.then((item) => {
    console.log('1초 경과');
    console.log(item)
    console.log(result) // Promise { undefined } << 왜 undefined가 되지..?
                        // resolve 함수 안에 변수를 집어넣을 경우, Promise { 'king' } 이런 식으로 쓴다.
                        // fulfilled인 경우, 결과값이 들어간다.
});

console.log(result); // Promise { <pending> } << 얘가 먼저 나옴.



// reject 함수 실행 경우
const errorMaker = new Promise((resolve, reject) => {
    setTimeout(() => reject('shitscript'), 1000);
})
errorMaker.catch((item) => {
    console.log(item); 
    console.log(errorMaker);
}); // Promise { <rejected> 'shitscript' } << rejected인 경우 따로 표기해준다
console.log(errorMaker) // <<Promise { <pending> } 





// 생성에 따른 실행 여부 판독
let k = [1, 2, 3]
const excute = new Promise((resolve, reject) => {
    k[1]++;
})
console.log(k); // [ 1, 3, 3 ] << new 생성자로 생성할 경우, 생성과 동시에 실행이 되는 듯 하다?
