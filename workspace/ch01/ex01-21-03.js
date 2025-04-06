/* 
for문을 이용해서 구구단 작성

출력 예시
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 9 = 27
*/

const dan = 3;

for (let i = 1; i <= 9; i++) {
  // console.log(dan + ' x ' + i + ' = ' + dan * i);
  console.log(`${dan} x ${i} = ${dan * i}`);
}

/*
2단부터 9단까지 출력
출력 예시
2*1 = 2
2*2 =4
....
9*8=72
9*9=81
*/

for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
  console.log('------------------------------');
}

/*
2단부터 9단까지 출력
출력 예시
2*1=2 3*1=3 ...
2*2=4 3*2=6 ...
...
2*9=18 3*9=27 ...
*/

// 구구단 출력 코드
for (let dan = 1; dan <= 9; dan++) {
  let line = '';
  for (let i = 2; i <= 9; i++) {
    line += `${i} x ${dan} = ${i * dan}`.padEnd(13);
  }
  console.log(line);
}
