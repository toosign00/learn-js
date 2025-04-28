const userType = 'seller';
let result = '';
switch (userType) {
  case 'seller':
    result += '판매자 메인 페이지로 이동';
  case 'user':
    result += '구매자 메인 페이지로 이동';
    break;
  case 'admin':
    result += '관리자 메인 페이지로 이동';
    break;
  default:
    result += '손님 페이지로 이동';
}
console.log(result);
