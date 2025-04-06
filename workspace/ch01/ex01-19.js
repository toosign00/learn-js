/*
switch문
*/

const pingName = '하츄핑';
let modifier = '';

switch (pingName) {
  case '하츄핑':
    modifier = '사랑의';
    break;
  case '포실핑':
    modifier = '복슬복슬';
    break;
  case '눈꽃핑':
    modifier = '흰백의';
    break;
  case '꾸래핑':
    modifier = '꾸러기';
    break;
  case '빛나핑':
    modifier = '빛나는';
    break;
  case '머핑':
    modifier = '맛있는';
    break;
  default:
    '모르는';
}
console.log(`${modifier} ${pingName}`);
