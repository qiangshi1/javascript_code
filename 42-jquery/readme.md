# jQuery

## 引言
1. jQuery库
    - js中的DOM操作的封装
    - 优化了DOM操作、事件处理、动画设计和Ajax交互
    - 有很多优点： 。。。。。。
2. jQuery的下载：
    - 官网： https://code.jquery.com/
    - 此次下载的是这个：https://code.jquery.com/jquery-3.6.0.min.js，内容粘贴到jquery.min.js中。
3. jQuery的基本使用：（01_base_use.html）
    - script:src引入
    - 再写相应的代码

## 等待DOM加载完成再执行内容代码（01_base_use.html）
1. 第一种写法：
    ```js
    $(document).ready(function(){
        $('div').hide();
    });
    ```
2. 第二种写法：
    ```js
    $(function(){
        $('div').hide();
    });
    ```
3. $是jQuery的语法糖
    - 同时$是jQuery的顶级对象

## jQuery对象(02_jquery_object.html)
1. `$('div')`, 类似这种方法获取的对象是jQuery对象
2. jQuery对象和DOM对象不同。jQuery以伪数组行驶存储，是DOM对象的包装。
    - jQuery对象的属性和方法也和DOM对象不一样。
3. jQuery对象转DOM对象----通过添加数组索引的方式
    - `$('.obj')[0]`
    - `$('.obj').get(0)`

## jQuery API
1. jQuery选择器























