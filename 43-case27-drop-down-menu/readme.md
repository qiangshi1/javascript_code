# 新浪下拉菜单
    练习jQuery选择器
    功能：移动鼠标，下拉菜单显示
    jQuery有其专门的回调函数写法

    ```js
        $('.nav>li').mouseover(function(){
            $(this).children('ul').css('display', 'block');
        });
    ```