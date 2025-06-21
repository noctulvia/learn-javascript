// 练习 1：识别全局作用域变量
// 请判断下面代码中哪些变量属于全局作用域

var x = 10;
let y = 20;
function show() {
  var z = 30;
  console.log(x + y + z);
}
console.log(x, y);

/**
 * 答案：x 和 y 是全局变量，z 是函数作用域变量。
 */
