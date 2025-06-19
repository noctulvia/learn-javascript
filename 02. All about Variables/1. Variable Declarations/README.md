1. var
    * 1.1 函数作用域
    * 1.2 全局作用域
2. let
    * 2.1 块作用域
3. const
    * 3.1 块作用域
    * 3.2 不可重新赋值
    * 3.3 数组/对象的元素可以修改

```javascript
// 1. var
var x = 10;
console.log(x); // 10

// 2. let
for (let i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
console.log(i); // ReferenceError: i is not defined

// 3. const
const z = 30;
console.log(z); // 30
const z = 40; // Uncaught SyntaxError: Identifier 'z' has already been declared
```