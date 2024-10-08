const { expect } = require('chai'); // Імпортуємо expect з Chai
const create = require('../src/create'); // Імпортуємо функцію create

describe('create', function() {
  it('завжди повертає функцію', function() {
    // Перевіряємо, що create повертає функцію
    expect(typeof create(() => 0)).to.equal('function');
  });

  it('приймає функцію, яка описує значення на позиціях (i, j)', function() {
    // Перевіряємо, що функція, яка описує значення як i * j + j, правильно створює матрицю
    expect(create((i, j) => i * j + j)(2, 3)).to.deep.equal([[0, 1, 2], [0, 2, 4]]);
  });

  it('повертає функцію, яка приймає число і повертає n*n матрицю', function() {
    // Перевіряємо, що функція, яка заповнює матрицю нулями, правильно створює матрицю розміром 3x3
    expect(create(() => 0)(3)).to.deep.equal([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });

  it('повертає функцію, яка приймає два числа і повертає n*m матрицю', function() {
    // Перевіряємо, що функція, яка заповнює матрицю одиницями, правильно створює матрицю розміром 2x3
    expect(create(() => 1)(2, 3)).to.deep.equal([[1, 1, 1], [1, 1, 1]]);
  });
});
