// 练习 3：作用域综合题
// 阅读代码，写出每个 console.log 的输出结果或错误提示。

let a = 1;
function test() {
  var a = 2;
  {
    let a = 3;
    console.log(a);
  }
  console.log(a);
}
test();
console.log(a);

/**
 * 答案：
 * 3 // 块级作用域
 * 2 // 函数作用域
 * 1 // 全局作用域
 */
