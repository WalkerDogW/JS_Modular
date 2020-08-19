'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入其他模块

// import module1 from './module1';
// import module2 from './module2';
// console.log(module1);
// console.log(module2);
//第三方库放最前面
(0, _jquery2.default)('body').css('background', 'green');

//使用分别暴露或者统一暴露，引入时需要使用解构赋值

(0, _module.foo)();
(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();
console.log(_module4.default.data);
_module4.default.foo();