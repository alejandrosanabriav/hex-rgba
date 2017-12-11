'use strict';

function hexToRgba(hex, opacity){
  var opacity = opacity || 100;
  var hex = hex.replace('#', '');
  if(hex.length === 6) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  } else {
    var rd = hex.substring(0, 1) + hex.substring(0, 1);
    var gd = hex.substring(1, 2) + hex.substring(1, 2);
    var bd = hex.substring(2, 3) + hex.substring(2, 3);
    var r = parseInt(rd, 16);
    var g = parseInt(gd, 16);
    var b = parseInt(bd, 16);
  }

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
};

module.exports = hexToRgba;