/*
반환값이 있는 함수
*/

add(); // 110
add100(10); // 110
add100(20); // 120
sum(100, 200); // 300


// 10 + 100의 결과를 출력하는 함수 (add)
function add() {
  let num = 10;
  let result = num + 100;
  console.log(result);
}
// 전달 받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(num) {
  let result = num + 100;
  console.log(result);
}

// 전달 받은 두 숫자의 합계를 출력하는 함수 (sum)
function sum(a, b) {
  return a + b;
  console.log(result);
}





/*
0 1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 0
2 3 4 5 6 7 8 9 0 1
3 4 5 6 7 8 9 0 1 2
4 5 6 7 8 9 0 1 2 3
5 6 7 8 9 0 1 2 3 4
6 7 8 9 0 1 2 3 4 5
7 8 9 0 1 2 3 4 5 6
8 9 0 1 2 3 4 5 6 7
9 0 1 2 3 4 5 6 7 8
*/



for (let i = 0; i < 10; i++) {
  // i를 0부터 9까지 증가하는 변수, 줄 생성
  let reset = ""; // 각 줄이 시작할 때마다 문자열 초기화, 초기화 안하면 이전 줄에 내용이 남아 계속 추가됨.
  for (let k = i; k < i + 10; k++) {
    // k를 각 줄에서 출력할 숫자 하나하나를 담당하는 변수로 i부터 i+9까지 반복함.
    reset += k % 10; // %는 나머지를 구하는 연산자. k를 10으로 나눈 나머지를 의미하여 숫자가 10이 넘어가도 다시 0~9 사이에서 반복되도록 함. (i = 3일 때 k 값은 3~12, k % 10을 하면 3 4 5 6 7 8 9 0 1 2가 됨.)
    reset += " "; // 각 숫자 사이에 공백을 추가하여 보기 쉽게 만들기 위함.
  }
  console.log(reset);
}