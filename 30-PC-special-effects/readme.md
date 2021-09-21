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