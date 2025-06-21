// 练习 3：变量声明和赋值的时机
// 预测下面代码的输出：

var num;
console.log(num);

num = 100;
console.log(num);

var num = 200;
console.log(num);

/**
 * 思考问题：
 * 1. 每个 console.log 分别输出什么？
 * 2. 最后一行的 var num = 200 是重新声明还是重新赋值？
 */

/**
 * 输出结果：
 * undefined
 * 100
 * 200
 */
