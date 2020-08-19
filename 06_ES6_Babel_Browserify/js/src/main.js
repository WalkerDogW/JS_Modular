//引入其他模块

// import module1 from './module1';
// import module2 from './module2';
// console.log(module1);
// console.log(module2);
//第三方库放最前面
import $ from 'jquery'

//使用分别暴露或者统一暴露，引入时需要使用解构赋值
import {foo,bar} from './module1';
import {fun,fun2} from './module2';
import module3 from './module3'

$('body').css('background','green');
foo();
bar();
fun();
fun2();
console.log(module3.data);
module3.foo(); 