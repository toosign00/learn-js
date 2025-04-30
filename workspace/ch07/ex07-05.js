"use strict";
// 내장 객체 - JSON
(() => {
    const haru = { name: '하루', age: 5 };
    console.log(typeof haru, haru);
    // JSON 문자열로 변환
    const jsonString = JSON.stringify(haru);
    console.log(typeof jsonString, jsonString); // string
    // JSON 문자열을 객체로 변환
    const jsonObject = JSON.parse(jsonString);
    console.log(typeof jsonObject, jsonObject); // object
})();
