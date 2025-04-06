/*
매개변수를 가진 함수 - 도어락

도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/

function doorLock(password = '') {
  const pwd = '1234';
  const subPassword = password.slice(-pwd.length);
  if (subPassword === pwd) {
    console.log('문이 열립니다.');
  } else {
    console.log('비상 비상 초비상!!! 비상 비상 초비상!!!');
  }
}

doorLock('11111111');
doorLock('12121212121234');
doorLock();
