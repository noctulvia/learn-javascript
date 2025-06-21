// 练习 5：复杂的提升场景
// 请分析以下代码片段：

var data = "global";

console.log(data);
var data;
console.log(data);

data = "changed";
console.log(data);

var data = "redeclared";
console.log(data);

/**
 * 思考问题：
 * 1. 每个 console.log 的输出是什么？
 * 2. var data; 这行代码对变量有什么影响？
 */

/**
 * 输出结果：
 * global
 * global
 * changed
 * redeclared
 */
