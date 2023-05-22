export class Matrix {
  constructor(str) {
    this.matrix = str;
  }

  get rows() {
    return this.matrix
      .split('\n')
      .map((num) => num.split(' ').map((n) => Number.parseInt(n)));
  }

  get columns() {
    return this.rows[0].map((col, i) => this.rows.map((row) => row[i]));
  }
}

/*
 * Accepts an input string and validates whether the string
 * has only unique characters, not repeated in the string.
 * Return true if no duplicate characters exist, otherwise false.
 */
/*
function uniqueChar(str) {
  let obj = {};
  const arr = str.split('')
}
   
console.log(uniqueChar('abcd')); // true
   
console.log(uniqueChar('abcccd')); // false

*/
