// 练习 1：基础 var 提升
// 请分析下面的代码，预测每个 console.log 的输出结果：

console.log(x);
var x = 10;
console.log(x);

console.log(y);
var y = 20;
var y = 30;
console.log(y);

/**
 * 输出结果：
 * undefined
 * 10
 * undefined
 * 30
 */
