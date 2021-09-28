# PC端网页特效

## offset元素偏移量(01-offset.html)
1. offsetTop距上边距 offsetLeft距左边距
    - 嵌套的盒子以body或者带有定位的祖辈为准
2. offsetWidth盒子的宽 offsetHight盒子的高
    - offsetWidth和offsetHight包括border和padding, 不包括margin
3.  offsetParent返回带有定位的父亲，或者body.
    - 提示: parentNode也是返回父级元素, 但parentNode返回亲爸爸
4. offset和style的区别
    - 元素.style.XXX
    - offset可以得到任意样式表的值, style只能得到行内样式表的值
    - offset是数字没有单位, style是字符串有单位
    - offsetWidth和offsetHight包括border和padding, 不包括margin; style.width和style.height不包括border、padding和margin; 
    - offset系属性只读, style可以赋值
## client(02-client.html)
1. clientTop & clientLeft
    - 上边框的大小和左边框的大小
2. clientWidth & clientHeight
    - 包含padding
    - 和offsetWidth & offsetHeight有区别. 

## 立即自行函数
1. 基本写法
    ```js
    // 立即执行函数写法一
    (function(){
        console.log('IIFE 1');
    })();
    // 立即执行函数写法二
    (function(){
        console.log('IIFE 2');
    }());
    ```
2. 传入参数
    ```js
    // 传入参数
    (function(a, b){
        console.log(a+b);
    })(1, 2);
    ```
3. 立即自行函数的用处是创建了一个作用域

## 淘宝flexible.js代码分析
1. document.documentElement: 获取根元素
2. window.devicePixelRatio: 物理像素比
3. DOMContentLoaded事件
4. resize事件
5. pageshow事件：重新加载页面加载（触发：a标签超链接，刷新，前进后退（火狐也会触发））；类似的事件是load事件（触发：a标签超链接，刷新，前进后退（火狐后退不会触发））

## scroll
1. scrollTop：上界超出的部分
2. scrollLeft：
3. scrollHeight：包含padding，不包含border，
4. scrollWidth：包含padding，不包含border，也包含内容溢出的部分

## offset client scroll 总结
1. 
    - offsetWidth：包括padding、border、内容宽度    
    - clientWidth：包括padding、内容宽度。不包括border
    - scrollWidth：不包括边框（注意内容超出的情况）
2. 常用方法
    - offsetLeft offsetTop    
    - clientWidth clientHeight    
    - scrollTop scrollLeft
    - 注意还有一个pageYOffset，和srollTop类似，只不过它是针对window的，而srollTop是针对页面元素的

## mouseover和mouseenter的区别(05-mouseover-mouseenter.html)
1. mouseover经过自身经过子盒子都会触发，这种特性本质是冒泡
2. mouseenter经过自身触发，经过子盒子不会触发

## 动画函数(06-animate.html)
1. 通过定时器setInterval()实现
    - 封装
    - 给不同元素添加不同定时器：通过给元素添加属性实现：`obj.timer...`
    - 同一定时器只能在某时刻最多有一个执行。实现：先清除定时器
2. 缓动动画（本质上是速度不是恒定的动画）
    - js中尽量不要有小数的运算
    - step正值向上取整；负值向下取整：`var step=(target-obj.offsetLeft)/10; step = step>0 ? Math.ceil(step):Math.floor(step);`
    - 动画中添加回调：本质上是把函数用作形参





