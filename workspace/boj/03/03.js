/*
제목: 합
설명: 1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다.
제출: https://www.acmicpc.net/submit/8393

문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1
3

예제 출력 1
6
*/

const fs = require('fs');
// 아래 코드로 실행하니 런타임 에러가 남
// const fileData = fs.readFileSync(0).toString().trim();
const fileData = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(fileData);

let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log(sum);
/*
========== 수학 공식으로 푸는 법 ==========
const result = ((N + 1) * N) / 2;

console.log(result);
*/
