(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.bundle = factory());
}(this, (function () { 'use strict';

const client = {
  connect: () => {}
};

var index = {
  client
};

return index;

})));
