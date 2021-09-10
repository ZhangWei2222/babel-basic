"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var fn = function fn() {
  return 1;
}; // ES6箭头函数, 返回值为1


var num = Math.pow(3, 2); // ES7求幂运算符

var hasTwo = [1, 2, 3].includes(2);

var foo = function foo(a, b, c) {
  // ES7参数支持尾部逗号
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
Promise.resolve()["finally"]();
console.log(fn());
console.log(num);
console.log(hasTwo);

var Foo = /*#__PURE__*/function () {
  function Foo() {
    (0, _classCallCheck2["default"])(this, Foo);
  }

  (0, _createClass2["default"])(Foo, [{
    key: "method",
    value: function method() {}
  }]);
  return Foo;
}();