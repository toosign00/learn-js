/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true;
const isUser = false;
const isSeller = false;
const isAdmin = true;

let userType = '';

if (isUser) {
  userType = '사용자';
} else if (isSeller) {
  userType = '판매자';
} else if (isAdmin) {
  userType = '관리자';
} else {
  userType = '분류되지 않은 사용자';
}

// 출력
console.log(isLogin ? '로그인 상태' : '로그아웃 상태');
console.log(userType);
console.log(`${userType} ${isLogin ? '로그인' : '로그아웃'} 상태`);
