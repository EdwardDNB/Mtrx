const clone = require('../src/clone');
const { expect } = require('chai');

describe('clone', function() {

  it('should receive a matrix and return a new equal matrix', function() {
    let matrix = [[1, 2, 3], [4, 5, 6]];
    let c = clone(matrix);
    expect(c).to.deep.equal(matrix);
  });

  it('should return a new matrix that is a deep copy', function() {
    let matrix = [[1, 2, 3], [4, 5, 6]];
    let c = clone(matrix);
    c[0][0] = 0;
    expect(c).to.not.deep.equal(matrix);
  });

});
