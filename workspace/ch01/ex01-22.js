/*
반복문 - break, continue
*/

// n ~ m 까지의 정수중에서 가장 작은짝수를 찾아서 출력하세요.
// n < m

const n = 1;
const m = 10;

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// n ~ m 까지의 정수중에서 홀수만 출력하세요.
// for (let i = n; i <= m; i++) {
//   if (i % 2 === 1) {
//     console.log(`${i}은(는) 홀수입니다.`);
//   }
// }

// n ~ m 까지의 정수중에서 홀수와 짟를 구분해서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log(`${i}은(는) 홀수입니다.`);
  } else {
    console.log(`${i}은(는) 짝수입니다.`);
  }
}
