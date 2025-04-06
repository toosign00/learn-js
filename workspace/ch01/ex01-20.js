// for문으로 1부터 10까지 출력

for (i = 1; i <= 10; i++) {
  console.log(i);
}

let oddNum = 0;
// 홀수만 반복
for (let i = 1; i <= 10; i += 2) {
  oddNum += i;
}
console.log(oddNum);

let evenNum = 0;
// 짝수만 반복
for (let i = 2; i <= 10; i += 2) {
  evenNum += i;
}
console.log(evenNum);
