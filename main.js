const timerPromise = new Promise((resolve, reject) => { // 이곳에 정의된 함수가 executor
    setTimeout(() => {
        console.log('First');
            resolve();
        }, 1000);
    });
/*
Promise를 생성할 때, resolve와 reject라는 함수를 받는다.
resolve와 reject는 각 pending에서 fulfilled와 rejected상태로 넘어갈 때 실행될 함수이다.
then()과 catch()로 resolve와 reject함수를 정의할 수 있다.
*/
// 이 시점에서 timerPromise는 Fulfilled Promise라고 부를 수 있다.

timerPromise.then(() => {
    console.log('Middle');
    console.log('Last');
});

// Print: First
// Middle
// Last





const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First');
        reject('Error!!'); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주됩니다.
    }, 1000);
});
/*
reject를 바로 실행시킬 경우
바로 catch를 실행한다.
then().catch() 이런 식이나,
catch().then() 이런 식으로 적을 수 있다.

실행할 때 promise 선언 때 resolve()와 reject() 안에 삽입된 변수가
then catch의 안으로 들어간다.
*/
errorPromise.then(() => {
    console.log('Middle');
    console.log('Last');
}).catch((error) => {
    console.log('에러 발생!', error);
});

// Print: '에러 발생! Error!!'