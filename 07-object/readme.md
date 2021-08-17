# 对象

## 万物皆对象

## 对象的创建
1. 字面量
```js
var obj1 ={
    name: '张三封', //注意是逗号. 另外, 不需要var
    age: '18',
    sex: '男',
    sayHi: function(){
        console.log('Hi~');
    }
};
```
2. `new Object()`
```js
// 对象的创建----new Object()
var obj2=new Object();  //生成空对象
// 填充对象属性
obj2.name='张四封';
obj2.age='19';
obj2.sayHi = function(){
    console.log('Hi~');
}
```
3. 构造函数创建对象
    - 抽取公共属性, 方便对象复用
    - 
    ```js
        function createObj(name, age, sayHi){
            this.name=name;
            this.age=age;
            this.sayHi =sayHi;
        }
        // 
        var obj3= new createObj('张五封', 20, function(){
            console.log('Hi~');
        });
    ```
    - new关键字的执行过程: 1. 2. 3. 4. 

## 对象的调用
1. 对象成员变量
    - `obj.key`
    - `obj['key']`
2. 对象成员函数的调用
    - 注意别忘了小括号. 


## 对象的遍历
1. in关键字: 
```js
    for(var key in obj1) {
        console.log(key); // 键
        console.log(obj1[key]); // 值
    }
```
## 内置对象
1. 对象分为三类: 
    - 自动应以对象
    - 内置对象----这里学习的内容
    - 浏览器对象
2. 内置对象:
    - 文档网站: https://developer.mozilla.org/zh-CN/
    - Math
    - Math 的四舍五入取整函数`Math.round()`, 如果是`Math.round(x.5)`会向大取整, 如: 
    ```js
        console.log(Math.round(4.5)); // 5
        console.log(Math.round(-4.5)); // -4 .5往大了取
    ```
    - Date
    - Date `date.getDay();` 周日是0, 从周日开始
    - Date `date.getMonth();` 区间0-11
    - Date 获取时间戳的四种方法
    ```js
        // 方法1
        console.log(date1.valueOf()); // 时间戳, 单位毫秒
        // 方法2
        console.log(date1.getTime()); // 时间戳, 单位毫秒, 和valueOf()一样. 
        // 方法3       
        var timeStamp= +new Date(); // 时间戳, 单位毫秒, 和valueOf()一样. 
        console.log(timeStamp);
        // 方法4, H5新增
        console.log(Date.now()); // 时间戳, 单位毫秒, 和valueOf()一样. 
    ```
    - 数组对象
    - 数组对象 检测对象是否为数组: 方法1: `instanceof Array`; 方法2: `Array.isArray()`. 方法2是H5新增.
    - 数组对象: `push()` `unshift()` `pop()` `shift()` `sort`(sort要想实现排序功能, 必须传入一个匿名函数, 不然会有问题) `toString()` `join()`
    - 数组对象 `concat()` `slice()` `splice()`
    - 字符串对象
    - 字符串对象 基本包装类型(一个概念, 理解即可)
    - 字符串对象 字符串一旦创建, 比较难以销毁. 不要大量拼接字符串, 比较占内存资源. 
    - 字符串对象 `indexOf()` `charAt()` `charCodeAt()`       `concat()` `substr()` `replace()` `split()`   
    - 字符串对象 `toUpperCase()` `toLowerCase()`