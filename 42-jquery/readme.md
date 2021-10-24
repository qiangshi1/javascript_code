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
1. jQuery选择器（03-jquery-selector.html）
    - 基本选择器、层级选择器、筛选选择器
    - 筛选方法：`$(x).parent()`: 父亲选择器、`$(x).parents('xxx')`: 祖辈选择器、`$(x).children('c')`: 子代选择器（亲儿子）、`$(x).find('c')`: 后代选择器（后代就行）、`$(x).siblings`: 兄弟选择器（除了自己）、`$(x).hasClass('className')`: 判断元素是否含有类名
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
    - 切换类（如果没有.box2，则添加.box2; 如果有.box2，则删除.box2.）：`$('.box1').toggleClass('box2');`
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
    - 通过`.prop()`获取和设置预设属性
    - 通过`.attr()`获取和设置自定义属性
    - 通过`.data()`获取和设置缓存数据，元素检查看不见的数据（这块我也还不是很懂）
7. jQuery内容(09-jquery-contents.html)
    - `.html()`获取内容+标签
    - `.text()`获取内容（不好喊标签）
    - `.text()`也可以设置内容，相当于原生js的`innerText()`
    - 表单通过`.val()`获取`value`值
8. jQuery遍历元素（each）（10-jquery-each.html）
    - 第一种方法`.each()`
    ```js
    // i是索引号
    // domEle是一个dom对象
    $('div').each(function(i, domEle){
        console.log(i);
        // dom对象转jQuery对象
        $(domEle).css('color', 'blue');
    });  
    ```
    - 第二种方法`$.each()`
    ```js
    $.each($('div'), function(i, ele){
        console.log(i);
    });
    ```
    -  第二种方法除了可以遍历DOM，还可以遍历对象、数组
9. jQuery创建、添加、删除元素（11-jquery-ele-create-add-delete.html）
    - 创建元素:`var li1=$('<li>我是后加的li1</li>');`
    - 内部添加，并且放到最后边:`$('ul').append(li1);`
    - 内部添加，并且放到最前边:`$('ul').prepend(li2);`
    - 外部添加，之前添加:`$('ul').after(div1);`
    - 外部添加，之后添加:`$('ul').before(div2);`
    - 删除元素，自我删除，自杀：`$('.box3').remove(); `
    - 删除元素，清空内容，`$('ol').empty();`(`$('ol').empty();`也可以达到相同效果) 
10. jQuery位置、尺寸（12-jquery-pose-size.html）
    - `$('.box1').width()`, 不包含padding
    - `$('.box1').innerWidth()`, 包含padding
    - `$('.box1').outerWidth()`, 不跟形参, 包含padding和border
    - `$('.box1').outerWidth(true)`, 包含padding和border和margin
    - 以上是获取，传入数字型参数还可以设置. 
    - `offset()`, 获取文档顶部和左侧的距离, 和父盒子没有关系
    - `offset()`, 还可以设置
    - `position()`, 距离最近的带有定位的父级盒子的相对定位，如果没有，则距离文档的相对位置
    - `position()`, 不能够设置
    - `scrollTop()`, 卷去的头部的大小. 
    - `scrollTop()`, 也可以设置
11. jQuery事件（13-jquery-event.html）
    - 普通绑定事件：`$('.box1').click()`这种方式
    - 通过on绑定，有两种方法：
    - on绑定多个事件,不同事件使用相同回调：
    ```js
    $('.box1').on('mouseleave mouseenter', function(){
        alert('alert');
    });
    ```
    - on绑定多个事件,不同事件使用不同回调：
    ```js
    $('.box1').on({
        click: function(){ $(this).css('width', '300px');},
        mouseenter: function(){ $(this).css('height', '300px');},
    });
    ```
    - on可以绑定动态元素
    - on可以实现事件委托，通过添加一个参数的形式. 
    - off解绑
    - `$('div').off()`, off()中没有参数，解绑$('div')的所有事件
    - `$('div').off('click')`, 解绑$('div')的所有click事件
    - `$('ul').off('click', 'li')`, 解绑事件委托
    - one绑定，和on一样，但只能触发一次，不用再写解绑代码
    - 自动触发事件：第一种方式：`$('div').click()`
    - 自动触发事件：第二种方式：`$('div').trigger('click')`
    - 自动触发事件：第三种方式：`$('div').triggerHandler('click')`， 第三种方式不会触发元素的默认行为
    - 事件对象（回调函数的形参），事件可以阻止默认行为，可以阻止冒泡
12. jQuery对象拷贝（14-jquery-copy.html）
    - `$.extend(targetObj, obj);`, 右边的拷贝给左边的
    - `$.extend(targetObj3, obj3);` 这种写法是浅拷贝
    - `$.extend(fase, targetObj3, obj3);`这种写法是浅拷贝
    - `$.extend(true, targetObj3, obj3);`这种写法是深拷贝
13. jQuery多库共存
    - 别的库的$和jQuery的$共存冲突
    - 解决方法1：$换成jQuery
    - 自定义$的别名： `var alias=$.noConfict();`
## 





















