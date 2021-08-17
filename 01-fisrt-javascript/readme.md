# javascript 初体验

## 基础知识：
1. js可以用于:
    - 网页特效
    - 服务端node.js
    - 桌面程序electron
    - app(cordova)
    - 控制硬件-物联网(Ruff)
    - 游戏开发(cocos2d-js)
2. 浏览器执行js过程
    - chrome的v8号称执行js最快的引擎
    - 逐行执行
3. js组成
    - ECMAScript----ECMA是一种标准, 不准确的理解, ECMAScript就是javascript
    - DOM----文档对象模型
    - BOM----浏览器对象模型
4. 

## 书写位置
1. 行内式(不常用)
2. 内嵌
3. 外部
4. `<script>`和`</script>`之间不能有代码. 

## 注释
1. 类似c++的注释方法. vscode中单行注释快捷键: ctrl+/; 多行注释快捷键: shift+alt+a. 

## 输入输出
1. prompt()
2. alert()
3. console.log()

## 变量
1. 关键字`var`
2. prompt接收变量的写法: `var my_name=prompt('请输入你的名字: ');`
3. `var`的连写写法: var a='a', b='b', c='c';
4. 只声明未赋值, 值是未定义. 
5. 未声明, 直接赋值. 不会报错(但不推荐这种写法). 
6. 变量的命名规范
    - 大小写敏感
    - 可以以$符号开头
    - 不能以数字开头
    - 关键字不能用作变量名
    - 变量名必须有意义----不要写中文拼音
    - 遵循驼峰写法

## 数据类型
1. js属于弱类型的语言, 赋值之后才知道变量的类型. 
2. 类型有数字型、String、Boolean、Object(Object以后再专门学)、数组
3. 数字型
    - 数字的进制: 八进制: 数字前面加0. 但080是80. 十六进制: 0xff. 
    - 数字的最大/最小常量: Number.MAX_VALUE/Number.MIN_VALUE
    - 无穷大/无穷小/NaN(是否是数字)
    - isNaN()判断是否是NaN
4. String型
    - 可以单引号, 也可以双引号, 推荐使用单引号. 
    - 引号可以嵌套, 外双内单或者外单内双. 
    - 转义字符: 和C语言类似, 如\n等. 
    - 长度: .length
    - 拼接: str1+str2, String可以和其他类型拼接, 拼接之后还是String. 
5. Boolean
    - true和false 
6. undefined和null的区别. 
```js
console.log(undefined+'123'); // undefined123
console.log(undefined+123); // NaN
console.log(null+'123'); // null123
console.log(null+123); // 123
```
7. 类型检查
    - `typeof var`
    - 通过`prompt()`取过来的值是String类型的. 
    - 控制台的颜色也能判断出数据类型. 
8. 字面量
    - 
9. 数据类型的转换
    - 转换为字符串: toString()/String()/+号拼接[重要]
    - 转换为数字: parseInt()[会取整, 同时会去掉单位]/parseFloat()[和parseInt类似, 只是不会取整]/Number()/减号乘号除号隐式转换. 
    - 转换为布尔型: Boolean(), 代表空、否定的值会被转成false

## 运算符
1. 算术运算符
    - 加减乘除
    - 取模(取余) %
    - 浮点数存在精度的问题
    - 浮点数不能直接比较相等
    - 算数运算符存在优先级的问题
2. 递增递减运算符
    - `i++`、`++i`
    - `i--`、`--i`
    - 类似于C语言
3. 比较运算符
    - `>` `<` `>=` `<=` `==` `===`
    - `==`默认会把字符串转成数字类型, 所以`18=='18'`是`true`
    - `===`判断值和类型是否全部相等, `18==='18'`是`false`
4. 逻辑运算符
    - `&&` `||` `!`
    - 逻辑中断: 
    ```js
    console.log(123 && 456); // 456
    console.log(0 && 456); // 0
    console.log(0 && i++); // 0 逻辑中断, 后边的i++不运行. 
    console.log(123 || i++); // 123 逻辑中断, 后边的i++不运行.
    ```
5. 赋值运算符
    - `=` `+=` `-=` `*=` `\=`
    - 
6. 运算符的优先级
    - 同C语言

## 表达式与返回值
1. 表达式
    - 由数字/变量/运算符组成的式子
    - 一个概念, 理解即可
2. 返回值
    - 表达式返回的结果



