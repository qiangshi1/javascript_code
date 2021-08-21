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
## DOM的事件流(概念理解)(03-dom-event-flow.html)
1. 捕获阶段
    - 自顶向下捕获, 即先是祖辈, 后是字辈
2. 目标阶段
    - 自底向上捕获, 即先是子辈, 后是祖辈
3. 冒泡阶段
4. JS代码只能执行捕获或者冒泡阶段中的一个阶段
5. `onclick`和`attachEvent`只能得到冒泡阶段
6. `addEventListener`可以指定是冒泡还是捕获, 
    - 通过设置第3个参数配置, 第3个参数是true, 处于捕获阶段. 如果3个参数是false或者省略, 处于冒泡阶段
7. 用的多的是冒泡
8. 有些事件是没有冒泡的: `onblur` `onfocus` `onmouseenter` `onmouseleave`

## 事件对象(04-envet-object.html)
1. 回调函数的形参就是事件对象
2. 事件对象只在事件存在时存在
3. 事件对象是和事件相关的一系列数据的集合
    - 比如判断用户按下了哪个键
4. 事件对象常见的属性和方法
    - `event.target`, 获取触发事件的元素, 和回调中的`this`不一样, 回调中的`this`是绑定事件元素. 例子如下:
    ```js
        // <ul><li>123</li><li>456</li><li>789</li></ul>
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function (event) {
            console.log(this); // this是绑定事件元素 ul元素
            console.log(event.target); // event.target是触发事件元素 li元素
        }, true);
    ```
    - `event.srcElement`, 同`event.target`, 非标准, ie678中使用. 
    - `event.currentTarget` 获取绑定事件元素, 同回调函数中的`this`(老师讲的是约等于), ie678不支持
    - `event.type`获取事件类型
    - `event.preventDefault()`阻止默认行为, 用在addEventListener和onclick中
    - `return false`阻止默认行为, 用在onclick中, 在addEventListener中失效.
    - `event.stopPropagation()` 阻止冒泡
    - `window.event.cancelBubble=true` 阻止冒泡, 同`event.stopPropagation()` ie678中的用法
    - 
## 事件委托(代理/委派)(05-event-delegation.html)
1. 需求
    - 有时子节点太多, 给每一个子节点写事件太麻烦/效率低
2. 原理
    - 事件监听器写在父节点上
3. 代码样例: 
```js
// 给ul写回调, 用event.target找子节点li, 而不是给每一个li写回调. 
var father = document.querySelector('.father');
father.addEventListener('click', function (event) {
    event.target.style.backgroundColor='rgb(119, 9, 82)';
}, false);
```

## 常见鼠标事件(06-common-mouse-events.html)
1. `onclick` `onmouseover` `onmouseout` `onfocus` `onblur`之前已有介绍
2. 两个事件
    - `contextmenu`右键菜单
    - `selectstart`选中文字
3. 鼠标坐标
    - `clientX` 视口坐标X
    - `clientY` 视口坐标Y
    - `pageX` 页面坐标X
    - `pageY` 页面坐标Y
    - `screenX` 屏幕坐标X
    - `screenY` 屏幕坐标Y
4. 
    - `mousemove`见(24-case13-following-mouse)
## 键盘事件
1. 事件
    - `keyup` 松下键盘触发
    - `keydown` 按下键盘触发, 如果按住不松手会一直触发
    - `keypress` 按下键盘触发, 如果按住不松手会一直触发. 相比于`keyup`, `keypress`不能识别功能键(ctr shift 等)
    - 若同时有事件`keydown`和`keypress`, 会先执行`keydown`
2. 事件对象
    - `keyCode` 按键的ascii码值, 在不同的事件中, `keyCode`的行为不同: 在`keyup`和`keydown`中不区分字母大小写, 在`keypress`中会区分字母的大小写










