# 事件----进阶

## 事件基础已经在09-web-api中介绍, 这里是事件的进阶用法. 

## 绑定事件
1. 传统方法: 
    - 
    ```js
        var btn=document.getElementById('btn');
        btn.onclick=function(){
            alert('秋香');
        };
    ```
    - 一个元素事件只能绑定一个回调
2. `.addEventListner('事件', 回调函数)`
    - 一个元素事件可以绑定多个回调
    ```js
        btn.addEventListener('click', function(){
            alert('秋香');
        });
    ```
3. `attachEvent` 非标准用法, 不推荐使用它

## 解绑事件(删除事件)
1. 传统方法:
    - `事件.onclick=null;`
2. 
    - `removeEventListener`
    - 注意绑定时回调不能再是匿名函数, 不然不知道要解绑哪一个
3. 代码如下:
    ```js
        // 1. 传统方法解绑事件
        btn[1].onclick=function(){
            btn[0].onclick=null;
        };
        var fn=function(){
            alert('丁香');
        };
        // 2. 方法监听方式解绑
        btn[2].addEventListener('click', fn);
            // 绑定时回调不能再是匿名函数, 不然不知道要解绑哪一个
        btn[3].onclick=function(){
            btn[2].removeEventListener('click', fn);
        };
    ```
## DOM的事件流

