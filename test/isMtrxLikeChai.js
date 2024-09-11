const { expect } = require('chai'); // Імпортуємо expect з Chai
const isMtrxLike = require('../src/isMtrxLike'); // Імпортуємо функцію isMtrxLike

describe('isMtrxLike', function() {
  it('повертає boolean значення', function() {
    let a = [[1, 2, 3], [2, 3, 5]]; // Правильна матриця
    let b = [[1, 2, 4], [3, 2]]; // Матриця з неповними рядками
    let c = [[undefined, 1, 3], [2, 3, 4]]; // Матриця з невизначеними значеннями
    let d = [['a', 2, 3], [3, 2, 4]]; // Матриця з нечисловими значеннями

    // Перевіряємо, що матриця a є матрицею, подібною до масиву
    expect(isMtrxLike(a)).to.be.true;

    // Перевіряємо, що матриця b не є матрицею, подібною до масиву
    expect(isMtrxLike(b)).to.be.false;

    // Перевіряємо, що матриця c не є матрицею, подібною до масиву
    expect(isMtrxLike(c)).to.be.false;

    // Перевіряємо, що матриця d не є матрицею, подібною до масиву
    expect(isMtrxLike(d)).to.be.false;
  });
});
