// 练习 4：混合声明类型
// 分析这段代码的行为：

console.log(value);
var value = "var";

console.log(value);
let value = "let";
console.log(value);

/**
 * 思考问题：
 * 1. 这段代码会正常执行吗？
 * 2. 如果有错误，在哪一行会出现错误？
 * 3. 错误的原因是什么？
 */

/**
 * 输出结果：
 * SyntaxError: Identifier 'value' has already been declared
 */
