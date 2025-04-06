/*
for문
*/

/*
 *
 **
 ***
 ****
 *****
 */
const lines = 5;
for (let i = 0; i < lines; i++) {
  let star = ' ';
  for (let k = 0; k <= i; k++) {
    star += '* ';
  }
  console.log(star);
}