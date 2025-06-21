# 1. Variable Declarations

在 JavaScript 中，变量声明是指为存储数据创建一个具名的 "容器"。声明变量有三种主要方式：`var`、`let` 和 `const`，它们的基本用法如下。

## 1.1 var 声明变量

- 语法：`var 变量名;` 或 `var 变量名 = 值;`
- 可以一次声明一个或多个变量，多个变量用逗号分隔。
- 变量声明后如果未赋值，初值为 `undefined`。
- 示例：
  ```js
  var phoneNumber;
  var userName = "Alice";
  var x = 1,
    y = 2,
    z;
  ```

## 1.2 let 声明变量

- 语法：`let 变量名;` 或 `let 变量名 = 值;`
- 也可以一次声明一个或多个变量。
- 变量声明后如果未赋值，初值为 `undefined`。
- 示例：
  ```js
  let emailAddress;
  let userAge = 22;
  let a = 3,
    b = 4;
  ```

## 1.3 const 声明常量

- 语法：`const 常量名 = 值;`
- 声明时必须赋初始值，且值不能被修改。
- 只能声明单个常量，不能像 `var` 和 `let` 那样用逗号声明多个。
- 示例
  ```js
  const PI = 3.14159;
  const RECOMMENDED_SLEEP_HOURS = 8;
  ```

## 1.4 变量声明的常见用法

- 变量可以存储任意类型的数据，如数字、字符串、对象等。
- 变量声明和赋值可以分开进行：
  ```js
  var waterIntakeLiters;
  waterIntakeLiters = 2;
  ```
- 可以在一条语句中声明多个变量:
  ```js
  var x = 1,
    y = 2,
    z = 3;
  let i,
    j,
    k = 6;
  ```
- 使用 `let` 或 `const` 重复声明已存在的变量（无论之前是用 `var`、`let` 还是 `const` 声明的）会抛出语法错误。

## 1.2 小结

- `var`、`let` 和 `const` 都可用于声明变量，区别主要在于用法和特性 (后续会介绍其他特性)。
- 声明变量时，可以选择是否赋初值，`const` 例外，必须赋初值。
- 未赋初值的变量，初始值为 `undefined`，`const` 除外。

# 2. Hoisting

Hoisting (提升) 是 JavaScript 的一个核心机制，指的是 JavaScript 引擎在代码执行之前，将变量和函数的声明移动到其所在作用域顶部的过程。这是 JavaScript 引擎的默认行为，使得我们可以在声明之前就使用变量或函数。

需要注意的是，JavaScript 引擎并不会实际移动代码的位置，而是在编译阶段将声明存储在内存中。这个过程让声明看起来像是被 "提升" 到了代码的顶部。

## 2.1 提升的工作原理

**编译阶段和执行阶段**

JavaScript 的代码执行分为两个阶段：

1. 编译阶段（预编译阶段）：JavaScript 引擎扫描代码，查找变量声明和函数声明，并在内存中创建它们的引用
2. 执行阶段：按照代码顺序执行，并根据预编译阶段创建的引用来执行代码

在编译阶段，JavaScript 引擎会将所有的声明提升到当前作用域的顶部，但这个过程不涉及实际的代码执行，仅仅是将声明提升。

**内存分配机制**

在预编译阶段，JavaScript 会为变量声明分配内存空间。变量会被默认初始化为 undefined，但赋值操作仍然保留在原来的位置。这就是为什么我们可以在声明之前访问变量，但得到的值是 undefined 而不是报错。

## 2.2 var 的提升行为

使用 `var` 声明的变量会被提升到其所在作用域的顶部，但只有声明被提升，赋值不会被提升。

```js
console.log(x); // undefined
var x = 1;
console.log(x); // 1
```

上述代码在执行时实际上被解释为：

```js
var x;
console.log(x); // undefined
x = 1;
console.log(x); // 1
```

## 2.3 let 和 const 的提升行为

`let` 和 `const` 声明的变量同样会被提升，但它们的行为与 var 不同。这些变量被提升后会进入"暂时死区"（Temporal Dead Zone, TDZ），在声明之前无法访问。

```js
console.log(y); // ReferenceError: Cannot access 'bar' before initialization
let y = 1;
```

# 3. Variable Naming Rules

JavaScript 变量命名必须遵循核心规则，违反会导致代码报错。同时 JavaScript 也有一些最佳命名规范，遵循这些约定能让代码更专业、更易读

## 3.1 核心命名规则

### 字符组成限制

变量名只能包含字母、数字、下划线 (\_) 和美元符号 ($)。这意味着其他任何特殊字符都不能用于变量命名。

正确示例：

```js
let userName;
let test123;
let _privateVar;
let $jQuery;
```

错误示例：

```js
let user-name;    // 连字符不允许
let user@name;    // @符号不允许
let user.name;    // 点号不允许
```

### 开头字符规则

变量名不能以数字开头。

正确示例：

```js
let user1;
let up2me;
let go4it;
```

错误示例：

```js
let 1user;        // 数字开头
let 3x;           // 数字开头
let 76trombones;  // 数字开头
```

### 大小写敏感性

JavaScript 变量名严格区分大小写。这意味着 `userName`、`UserName` 和 `USERNAME` 是三个完全不同的变量。

```js
let dogName = "Scooby-Doo";
let DogName = "Droopy";
let DOGNAME = "Odie";
// 这是三个不同的变量
```

### 禁用保留字和关键字

不能使用 JavaScript 的保留字和关键字作为变量名。这些词在语言中有特殊含义。

常见的保留字包括：

- 控制语句：`if`, `else`, `switch`, `case`, `for`, `while`, `do`, `break`, `continue`, `return`
- 声明语句：`var`, `let`, `const`, `function`, `class`
- 逻辑值：`true`, `false`, `null`, `undefined`
- 其他关键字：`this`, `new`, `typeof`, `instanceof`

正确示例：

```js
let className = "myClass";
let functionName = "myFunc";
let returnValue = "value";
```

错误示例：

```js
let class = "myClass";     // class 是保留字
let function = "myFunc";   // function 是保留字
let return = "value";      // return 是保留字
```

### 类私有成员命名规则

类私有方法及属性必须以 `#` 开头 (井号)，之后的部分遵循小驼峰命名法。

示例;

```js
class UserAccount {
  #loginAttempts = 0;

  #incrementAttempts() {
    this.#loginAttempts++;
  }
}
```

## 3.2 推荐命名规范

### 变量命名推荐规范

变量名采用小驼峰 (camelCase)，第一个单词首字母小写，后续每个单词首字母大写。

```js
// 推荐的小驼峰命名
let firstName = "张三";
let userAccountBalance = 1000;
let isLoginSuccessful = true;

// 不推荐的命名方式
let firstname = "张三"; // 全小写
let FirstName = "张三"; // 大驼峰（通常用于类名）
let first_name = "张三"; // 下划线分隔（不常用）
```

### 常量命名推荐规范

常量名采用全大写字母 + 下划线分隔 (SNAKE_CASE)，以便与变量明显区分：

示例：

```js
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 3000;
const PRIMARY_COLOR = "#3a86ff";
```

### 函数命名推荐规范

函数名采用小驼峰 (camelCase)，并且以动词开头，清楚表达函数的功能：

```js
// 通用处理函数
const handleClick = () => {};
const handleSubmit = () => {};
const handleSearch = () => {};

// 具体动作函数
const getUserInfo = () => {};
const setUserName = (name) => {};
const resetForm = () => {};
const toggleMenu = () => {};

// 事件处理函数
const clickEditBtn = () => {};
const keyupEnter = () => {};
const mouseOverMenu = () => {};
```

### 类命名推荐规范

类名采用大驼峰 (PascalCase)，每个单词首字母大写，以便与变量和函数区别开来。

示例：

```js
class UserProfile {}
class OrderManager {}
```

### 类公有成员推荐规范

类公有属性和方法采用小驼峰 (camelCase)，与常规变量一样。

示例：

```js
class UserProfile {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### 见名知意原则

变量名应该清晰地表达其存储的数据含义。好的变量名就像注释一样，能让人立即理解变量的用途。

好的命名：

```js
let studentAge = 18;
let totalPrice = 299.99;
let isDataLoaded = false;
let userEmail = "user@example.com";
```

不好的命名：

```js
let a = 18; // 含义不明
let temp = 299.99; // 过于通用
let flag = false; // 不够具体
let str = "user@example.com"; // 类型名不如用途名
```

### 使用规范的前后缀

根据数据类型和用途使用适当的前后缀：

数组类型：

```js
let userList = [];
let orderArray = [];
let students = []; // 复数形式
```

对象类型：

```js
let userInfo = {};
let formData = {};
let configObj = {};
```

布尔类型：

```js
let isEmpty = true;
let hasPermission = false;
let canEdit = true;
let isVisible = false;
```

数值类型：

```js
let itemCount = 10;
let totalLength = 100;
let pageNumber = 1;
let userLimit = 50;
```

字符串类型：

```js
let userName = "张三";
let paramStr = "name=value&age=18";
let jsonString = '{"name":"张三"}';
```

# 4. Variable Scopes
