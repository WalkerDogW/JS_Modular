"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露，可以暴露任意数据类型，暴露什么，接收的就是什么

exports.default = {
    data: "这是数据",
    foo: function foo() {
        console.log("这是函数");
    }
};