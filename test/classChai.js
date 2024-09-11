const Mtrx = require('..');
const chai = require('chai');
const expect = chai.expect;

describe('constructor', function() {

  it('should accept a matrix', function() {
    const a = [
      [7, 8, 2],
      [9, 2, 4]
    ];
    expect(new Mtrx(a)).to.deep.equal(a); // Проверка на глубокое равенство
  });

  it('should accept a number array', function() {
    const a = [1, 2, 3, 6];
    const m = new Mtrx([
      [1, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 3, 0],
      [0, 0, 0, 6]
    ]);
    expect(new Mtrx(a)).to.deep.equal(m);
  });

  it('should accept 3 numbers', function() {
    const m = new Mtrx(2, 3, 6);
    const n = new Mtrx([
      [6, 6, 6],
      [6, 6, 6],
    ]);
    expect(m).to.deep.equal(n);
  });

  it('should accept 2 numbers and a function', function() {
    const m = new Mtrx(3, 3, (i, j) => i + j);
    const n = new Mtrx([
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4]
    ]);
    expect(m).to.deep.equal(n);
  });

  it('should throw an error for invalid arguments', function() {
    expect(() => new Mtrx('123')).to.throw(); // Проверка на выброс исключения
  });

});
