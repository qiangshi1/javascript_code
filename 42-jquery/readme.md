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

## jQuery API（未做P377案例）
1. jQuery选择器（03-jquery-selector.html）
    - 基本选择器、层级选择器、筛选选择器
    - 筛选方法：`$(x).parent()`: 父亲选择器、`$(x).children('c')`: 子代选择器（亲儿子）、`$(x).find('c')`: 后代选择器（后代就行）、`$(x).siblings`: 兄弟选择器（除了自己）、`$(x).hasClass('className')`: 判断元素是否含有类名
    - 老师并没有演示所有的选择器以及相关方法，关于jQuery选择器网上资料有很多。
2. jQuery排他思想（04-jquery-exclusion.html）
    - 用siblings()可以很方便地实现排他思想
3. jQuery链式编程（05-jquery-chain-programming.html）
    - `$(this).css('color', 'red').siblings().css('color', '');` 这句话的意思：我的颜色变成红色，我兄弟的颜色变成无色. 这种写法就是链式编程
    - 优点是码量少
4. jQuery操作css（06-jquery-css.html）
    - css传1个参数，返回属性的值，带单位： `console.log($('.box1').css('width'));`
    - css传2个参数，修改属性的值: `$('.box1').css('height','100'); `
    - css传入对象，可以修改多个属性的值(注意驼峰命名法): `$('.box1').css({width: 250, height: '250px', backgroundColor: 'green'});`
    - 添加类: `$('.box1').addClass('box2');`
    - 删除类: `$('.box1').removeClass('box2');`
    - 切花类（如果没有.box2，则添加.box2; 如果有.box2，则删除.box2.）：`$('.box1').toggleClass('box2');`
    - jQuery不会覆盖原来的类，原生js的`className`(`className='xxx'`)会改变原先的类名
5. jQuery效果（动画效果）(07-jquery-animation-effects.html)
    - jQuery预封装了很多的动画效果
    - jQuery有API的手册供查阅
    - 出现：`show([speed, [easing], [fn]])`
    - 隐藏：`hide()`
    - 向下滑动：`slideDown()`
    - 向上滑动：`slideUp()`
    - 根据当前状态选择下拉还是上拉: `slideToggle()`
    - 回调：事件切换：`hover()`，hover的形参是函数。可以是2个函数，进入执行第一个函数，退出执行第二个函数；可以是1个函数，表示进入退出都执行该函数。
    - 下拉和上拉的简写写法：
        ```js
            $('.box5').hover(function(){
                $('.box6').stop().slideToggle();
            });
        ```
    - `stop()`是为了停止上一次动画，加上`stop()`是为了防止频繁触发延迟响应
    - 淡入淡出： `fadeIn()`、`fadeOut()`、`fadeToggle()`
    - 修改透明度：`fadeTo(1000, 0.4)`(透明度到0.4，延迟1000ms)
    - 自定义动画（重要）：`animate(对象, 时间间隔)`, 其中对象是终态的css样式.
6. jQuery属性操作（08-jquery-prop.html）
    - 待整理（2021年10月8日）























