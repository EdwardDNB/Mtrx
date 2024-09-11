const { expect } = require('chai'); // Імпортуємо expect з Chai
const inverse = require('../src/inverse'); // Імпортуємо функцію inverse
const multiply = require('../src/multiply'); // Імпортуємо функцію multiply

describe('inverse', function() {
  it('повертає нову матрицю', function() {
    let a = [[3, 1, 4], [2, 4, 5], [8, 0, 1]];
    let expectedInverse = [
      [-0.05128205128205128, 0.01282051282051282, 0.14102564102564102],
      [-0.48717948717948717, 0.3717948717948718, 0.08974358974358973],
      [0.41025641025641024, -0.10256410256410256, -0.1282051282051282]
    ];
    let identityMatrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

    // Перевіряємо, що функція inverse повертає правильну обернену матрицю
    expect(inverse(a)).to.deep.equal(expectedInverse);

    // Перевіряємо, що добуток матриці на її обернену матрицю дорівнює одиничній матриці
    expect(multiply(a, inverse(a))).to.deep.equal(identityMatrix);
  });
});
