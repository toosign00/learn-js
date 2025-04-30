"use strict";
// 주요 내장 함수 - setTimeout
(() => {
    console.log('시작');
    const timerId = setTimeout((a, b) => {
        console.log('3초 후에 실행', a + b);
    }, 1000 * 3, 10, 20);
    console.log('종료');
    clearTimeout(timerId); // setTimeout을 취소하는 함수
})();
