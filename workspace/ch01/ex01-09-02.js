/*
대입 연산자 +-를 이용해서 1부터 10까지의 모든 수의 합을 출력하시오.
출력결과 : 55
*/

const num1 = 0; // 초기값
const num2 = 10; // 마지막 수

let result = num1;

for (let i = 1; i <= num2; i++) {
  result += i;
}

console.log(result); // 55


let sum = 0;

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
sum += 6;
sum += 7;
sum += 8;
sum += 9;
sum += 10;

console.log(sum); // 55