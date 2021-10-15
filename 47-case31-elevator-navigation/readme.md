# 电梯导航模块

##

1. 功能：
    - 电梯模块动态显示
    - 电梯模块控制网页滚动
    - 网页滚动改变电梯模块

2. 知识：
    - `$(this).index()`, 获取索引号（jQuery获取的一般是伪数组）
    - 对于整个页面的滚动要这样写
        ```c++
        $('body, html').stop().animate({
            scrollTop: current
        });
        ```

