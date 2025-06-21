// 练习 2：let 和 const 的暂时死区
// 分析以下代码的执行结果：

console.log(x);
let x = 5;

console.log(y);
const y = 10;

console.log(z);
var z = 15;

/**
 * 思考问题：
 * 1. 哪些行会抛出错误？
 * 2. 哪些行会正常执行？
 * 3. 为什么会有这样的差异？
 */

/**
 * 输出结果：
 * ReferenceError: Cannot access 'x' before initialization
 * ReferenceError: Cannot access 'y' before initialization
 * undefined
 */
