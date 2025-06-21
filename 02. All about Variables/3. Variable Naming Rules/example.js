// 当前登录用户（核心规则：命名清晰，见名知意）
let currentUser = null; // 存储当前登录用户信息

// 用户列表（复数形式，符合推荐规范）
let userList = []; // 存储所有用户对象数组

// 登录状态（布尔变量使用 is 前缀）
let isLoggedIn = false; // 表示用户是否已登录

// 用户对象（见名知意，属性使用 camelCase）
const userInfo = {
  firstName: "张", // 用户名首名
  lastName: "三", // 用户姓氏
  email: "zhangsan@example.com", // 邮箱地址
  age: 25, // 年龄
};

// 功能函数（函数名以动词开头，参数含义清晰）
const getUserById = (userId) => {
  // TODO: 发起 API 请求获取指定 ID 的用户信息
};

// 静态常量（全大写加下划线，符合推荐规范）
const MAX_LOGIN_ATTEMPTS = 3; // 最大登录尝试次数
const API_BASE_URL = "https://api.example.com"; // 后端接口基础 URL

// 类私有成员
class UserProfile {
  #secretKey;
  #loginAttempts = 0;

  constructor(username, key) {
    this.username = username;
    this.#secretKey = key;
  }

  #login(key) {
    if (this.#secretKey === key) {
      this.#loginAttempts = 0;
      return true;
    }
    this.#loginAttempts++;
    return false;
  }
}
