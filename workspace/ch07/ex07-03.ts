// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사

(() => {
  console.log('시작');

  const timerId = setInterval(
    (a: number, b: number) => {
      console.log('3초 후에 실행', a + b);
    },
    1000 * 3,
    10,
    20
  );

  console.log('종료');

  // clearInterval(timerId); // setTimeout을 취소하는 함수
})();
