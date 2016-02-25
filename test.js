'use strict';
var expect = require('chai').expect;
var hexToRgba = require('./index.js');

describe('hex to rgba', function() {
  it('should return rgba', function() {
    var rgba = hexToRgba('#1B2B34');
    expect(rgba).to.equal('rgba(27, 43, 52, 1)');
  });

  it('shoud return rgba with opacity of 0.4', function() {
    var rgba = hexToRgba('#1B2B34', 40);
    expect(rgba).to.equal('rgba(27, 43, 52, 0.4)');
  });
});
