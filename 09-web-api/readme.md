# web

## web api
1. api就是接口
2. web api是DOM和BOM阶段的javascript
3. DOM树
    - 文档
    - 元素
    - 节点
    - 对象
4. 获取元素
    - 根据id获取: `getElementById()`. script要写在操作元素的下边, 返回的是一个对象, 通过`console.dir()`可以获取对象的详细信息.
    - 根据类型获取: `getElementsByTagName()`. 返回的是一个伪数组, 得到的元素是动态的. 如果文档中没有改类型, `getElementsByTagName()`返回空数组. 可以嵌套获取: 如下:
    ```js 
        <!-- <ol>
            <li>li1</li>
            <li>li2</li>
            <li>li3</li>
            <li>li4</li>
            <li>li5</li>
        </ol> -->
        var ol=document.getElementsByTagName('ol'); // 父元素
        console.log(ol);
        console.log(ol[0]);
        console.log(ol[0].getElementsByTagName('li')); // 父元素中的子元素
    ```
    - 根据类名获取(h5新增): `getElementsByClassName()`
    - `querySelector()`: 返回指定选择器的第一个对象, 选择器格式和css相同. 
    - `querySelectorAll()`: 返回所有对象, 其它和`querySelector()`相同. 
5. 获取特殊元素
    - body: `document.body`. 注意, 没有括号. 
    - html: `document.documentElement`. 注意, 没有括号. 

## 事件
1. 所谓事件, 就是网页交互的触发器
2. 构成: 事件源 事件类型 事件处理程序, 以上是事件三要素. 一个样例:
```js
// <button id="btn">唐伯虎</button>
// 获取事件源 通过查document得到
var btn=document.getElementById('btn');
// 指定事件类型(点击) btn.onclick
// 写时间处理程序 function(){alert('秋香');};
btn.onclick=function(){
    alert('秋香');
};
```
3. 事件类型有很多

## 修改元素内容
1. `innerText`
    - 修改元素内容
    - 不识别html标签
2. `innerHTML`
    - 修改元素内容
    - 保留空格和换行
    - 识别元素标签, 一个例子:
    ```js
    <!-- <div id='box1'>box1</div> -->
    <!-- <div id='box2'>box2</div> -->
        var box1=document.querySelector('#box1');
        var box2=document.querySelector('#box2');
        box1.innerText='<strong>123</strong>';  // #box1显示<strong>123</strong>
        box2.innerHTML='<strong>456</strong>';  // #box2显示加粗的456
    ```
    以上两个元素被修改之后有不同

## 修改元素属性
    - 修该`元素.属性`即可. 如:

        ```html
        <button id='blue'>blue</button>
        <button id='green'>green</button>
        <div id='div'></div>
        <script>
            var blue=document.querySelector('#blue');
            var green=document.querySelector('#green');
            var div=document.querySelector('#div');
            blue.onclick=function(){
                div.style.backgroundColor='blue';
            };
            green.onclick=function(){
                div.style.backgroundColor='green';
            };
        </script>
        ```

    - 注意样式`style`中的属性要改成驼峰命令法(如: css中background-color改成js中的backgroundColor)
    - js修改样式的逻辑是js中出现的样式放在行内样式中, 行内样式再覆盖掉css中的样式, 以此达到js修改样式的目的. 
    - js调用css中的样式: 通过className, 该方法适用于样式复杂的情况: 

        ```js
            // 给当前元素加一个类名change, change已经在css中指定
            this.className='change';
        ```
    - 排他思想: 见14-case5-button-exclusion
    - 
## 修改表单属性
1. 按钮被禁用: `btn.disabled=true;`
2. 更改input的内容: `input.value='被点击了';`
3. 在回调中`this`指的是执行回调的主体. 
4. 
    - 元素获取焦点回调`onfocus`(14-case5-button-exclusion)
    - 元素失去焦点回调`onblur`(14-case5-button-exclusion)
    - 鼠标经过回调`onmouseover`(15-case6-table-mouse)
    - 鼠标离开回调`onmouseout`(15-case6-table-mouse)

## 自定义元素的属性
1. 获取元素的属性的两种方法:
    - 方法1: `元素.属性`(之前用的都是这种方法), 该方法只能获取内置属性
    - 方法2: `.getAttribute('属性名')`, 该方法也可以获取自定义属性
2. 设置属性的方法:
    - 方法1: `元素.属性=值`(之前用的都是这种方法), 该方法只能设置内置属性
    - 方法2: `.setAttribute('属性名', '值')`, 该方法也可以设置自定义属性
    - 注意获取class如果没有引号括起来用className, 如果用引号括起来用class, 如:
    ```js
    console.log(box1.className); // box1_class
    console.log(box1.getAttribute('class')); // box1_class
    ```
3. 移除自定义属性的方法:
    - `.removeAttribute()`
    - 移除之后如要还要打印元素的值会显示null
4. h5规范: 以`data-`开头的都是自定义属性
    - h5新增获取以`data-`开头的属性方法, 比如获取`data-xxx`, 写`.dataset.xxx`
    - 注意驼峰命令规则:
    ```js
        var box1=document.querySelector('.box1_class');
        box1.setAttribute('data-new-attribute', 'yes');
        console.log(box1.getAttribute('data-new-attribute')); // yes
        console.log(box1.dataset.newAttribute); // yes
        console.log(box1.dataset['newAttribute']); // yes
    ```