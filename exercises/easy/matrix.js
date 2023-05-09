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
