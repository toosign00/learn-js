/*
반복문 - for문
*/

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);


// 1부터 몇까지 더하면 10000이 넘을까?
let sum2 = 0;
let count = 0;
while (sum2 <= 10000) {
  count++;
  sum2 += count;
}
console.log(`1부터 ${count}까지 더하면 ${sum2}이 된다.`);