/*

*/

// 1부터 10까지 홀수의 합출력
i = 1;
let oddNum = 0;

while (i <= 10) {
  // 홀수인지 확인
  if (i % 2 === 1) {
    oddNum += i;
  }
  i++;
}

console.log(oddNum);

// 1부터 10까지 짝수의 합 출력
i = 1;
let evenNum = 0;

while (i <= 10) {
  // 짝수인지 확인
  if (i % 2 === 0) {
    evenNum += i;
  }
  i++;
}

console.log(evenNum);

// 두 while 문을 합쳐서 짝수와 홀수의 합을 동시에 출력
i = 1;
oddNum = 0;
evenNum = 0;
while (i <= 10) {
  // 홀수인지 확인
  if (i % 2 === 1) {
    oddNum += i;
  } else {
    evenNum += i;
  }
  i++;
}
console.log(oddNum);
console.log(evenNum);
