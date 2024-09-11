const { expect } = require('chai');
const compan = require('../src/compan');

describe('compan', function() {
  it('повинна повернути компаньйон матриці', function() {
    let a = [[1, 2, 1], [2, 1, 4], [8, 7, 6]];
    let expected = [[-22, -5, 7], [20, -2, -2], [6, 9, -3]];

    // Перевірка кожного елемента матриці з допуском
    expected.forEach((row, i) => {
      row.forEach((value, j) => {
        expect(compan(a)[i][j]).to.be.closeTo(value, 0.0001); // Допустима похибка 0.0001
      });
    });
  });

  it('для особливої матриці', function() {
    let a = [[1, 1, 2], [3, 3, 6], [8, 9, 6]];
    let expected = [[-36, -30, 3], [-12, -10, 1], [0, 0, 0]];

    // Перевірка кожного елемента матриці з допуском
    expected.forEach((row, i) => {
      row.forEach((value, j) => {
        expect(compan(a)[i][j]).to.be.closeTo(value, 0.0001); // Допустима похибка 0.0001
      });
    });
  });
});
