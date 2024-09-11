const { expect } = require('chai'); // Імпортуємо expect з Chai
const isDiag = require('../src/isDiag'); // Імпортуємо функцію isDiag

describe('isDiag', function() {
  it('повертає boolean значення', function() {
    let a = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    let b = [[0, 1, 3], [0.1, 0, 8], [4, 2, 0]];

    // Перевіряємо, що матриця a є діагональною
    expect(isDiag(a)).to.be.true;

    // Перевіряємо, що матриця b не є діагональною
    expect(isDiag(b)).to.be.false;
  });
});
