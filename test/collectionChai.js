const { reduce, every, some, map } = require('../src/collection'); // Імпортуємо функції
const { expect } = require('chai'); // Імпортуємо expect з Chai

describe('reduce', function() {
  it('повинна повернути зменшене число', function() {
    // Початкова матриця
    let a = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    // Перевіряємо, що reduce повертає правильну суму всіх елементів
    expect(reduce(a, (sum, v) => sum + v)).to.equal(36);

    // Перевіряємо, що початкова матриця не змінена
    expect(a).to.deep.equal([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
  });

  it('без параметра init, починає з (0, 0)', function() {
    let a = [[9, 8, 3], [6, 1, 4], [7, 2, 5]];

    // Перевіряємо, що reduce без параметра init повертає правильну суму всіх елементів
    expect(reduce(a, (sum, v) => sum + v)).to.equal(45);

    // Перевіряємо, що reduce повертає мінімальне значення в матриці
    expect(reduce(a, (min, v) => Math.min(min, v))).to.equal(1);
  });
});

describe('every', function() {
  it('отримує матрицю і функцію, повертає булеве значення', function() {
    let a = [[1, 2, 3], [4, 5, 6]];

    // Перевіряємо, що every повертає false, якщо не всі елементи менші за 4
    expect(every(a, (v) => v < 4)).to.be.false;

    // Перевіряємо, що початкова матриця не змінена
    expect(a).to.deep.equal([[1, 2, 3], [4, 5, 6]]);

    // Перевіряємо, що every повертає true, якщо всі елементи більші за 0
    expect(every(a, (v) => v > 0)).to.be.true;
  });

  it('параметр fn(value, r-index, c-index) -> bool', function() {
    let a = [[0, 1, 2], [3, 4, 5]],
        fn = (v, r, c) => (r === c) ? true : (v % 2 === 0);

    // Перевіряємо, що every повертає false, якщо умова для діагональних елементів не виконується
    expect(every(a, fn)).to.be.false;
  });
});

describe('some', function() {
  it('отримує матрицю і функцію, повертає булеве значення', function() {
    let a = [[1, 2, 3], [4, 5, 6]];

    // Перевіряємо, що some повертає true, якщо є елементи менші за 4
    expect(some(a, (v) => v < 4)).to.be.true;

    // Перевіряємо, що початкова матриця не змінена
    expect(a).to.deep.equal([[1, 2, 3], [4, 5, 6]]);

    // Перевіряємо, що some повертає false, якщо немає елементів менших за 0
    expect(some(a, (v) => v < 0)).to.be.false;
  });

  it('параметр fn(value, r-index, c-index) -> bool', function() {
    let a = [[0, 1, 2], [3, 4, 5]],
        fn = (v, r, c) => (r === c) ? false : (v % 2 === 0);

    // Перевіряємо, що some повертає true, якщо є елементи, що відповідають умові
    expect(some(a, fn)).to.be.true;
  });
});

describe('map', function() {
  it('отримує матрицю і функцію, повертає нову матрицю', function() {
    let a = [[1, 2, 3], [4, 5, 6]];

    // Перевіряємо, що map повертає нову матрицю, де всі елементи замінені на 0
    expect(map(a, () => 0)).to.deep.equal([[0, 0, 0], [0, 0, 0]]);

    // Перевіряємо, що початкова матриця не змінена
    expect(a).to.deep.equal([[1, 2, 3], [4, 5, 6]]);
  });

  it('параметр fn(value, r-index, c-index) -> нове значення', function() {
    let a = [[0, 1, 2], [3, 4, 5]],
        fn = (v, r, c) => (r === c) ? v : 0;

    // Перевіряємо, що map повертає нову матрицю, де лише діагональні елементи збережені
    expect(map(a, fn)).to.deep.equal([[0, 0, 0], [0, 4, 0]]);
  });
});
