// 第三方库要放到自定义库上方
let uniq = require('uniq')

let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo();
module2();
module3.foo();
module3.bar();
console.log(uniq(module3.arr)); 
