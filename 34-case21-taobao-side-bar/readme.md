# 淘宝侧边栏

1. 滚到某个位置后固定
    - window.pageYOffset
    - pageYOffset和srollTop类似，只不过它是针对window的，而srollTop是针对页面元素的

2. 添加一键返回顶部功能，P329
    - 核心返回顶部代码：`window.scroll(0,0);`
    - 添加缓动动画，把后边写的animate.js拿过来再修改