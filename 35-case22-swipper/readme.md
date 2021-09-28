# 网页轮播图

静态网页用之前做的品优购

课程: https://www.bilibili.com/video/BV1Sy4y1C7ha?p=6&spm_id_from=pageDriver

1. 
    - 通过文件引入index.js
    - `window.addEventListener('load', function(){});`实现js在头引入。
2. 动态生成小圆圈个数
    - 小圆圈可点击
    - 排他思想：干掉所有人，留下我自己    
3. 滚动
    - 无缝滚动原理：后边插入第一张图片
    - 元素的克隆
    - 小圆圈和左右箭头联动
4. 无点击自动播放
    - 手动调用事件：`arrow_right.click();`
    - 鼠标放在轮播图上取消自动播放，离开再继续自动播放
4. 节流阀
    - 防止左右箭头不能点得过快
    - 原理，一个事件只能在上一个事件执行完之后才能执行
    - 相当于加了一个锁