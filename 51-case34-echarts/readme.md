# Echarts.js

## Echarts.js介绍
1. 百度的一个前端开源可视化库
2. 竞品还有D3.js/Highcharts.js/AntV
3. 官网
4. Echarts使用步骤
    - 下载并引入Echarts.js（下载地址https://github.com/apache/echarts/tree/5.2.1/dist, 那个echarts.min.js）
    - 准备一个有大小的DOM
    - 初始化Echarts对象
    - 指定配置项和数据
    - 配置项给Echarts对象
    - 修改配置项（option）来配置图标
5. echarts前边的一些配置不做了，直接做后边的案例（之前用了很久的MATLAB，一些概念还是懂的）

## 方案
1. flexible+rem动态元素大小
    - flexible.js中的基准值设为24（`var rem = width / 24;`）
    - cssrem也要相应设置(改成80（24*80）)
    - 记得重启vscode
2. css
    - 图片`/contain`的作用？
3. 边框图片
    - 思路类似于聊天气泡
    - 这里写了一个专门的test_border_img.html测试边框图片, test_border_img.html不参与index.html
        ```css
        border-image-source: url(images/border.jpg);
        /* 不带单位 切四刀形成九宫格 */
        border-image-slice: 166.67 166.67 166.67 166.67;
        /* 图片边框的宽度， 默认的话是border里边的15px */
        border-image-width: 30px;
        /* 铺方式， 默认是拉伸，这里改成平铺 */
        border-image-repeat: round;
        ```
    - 内部新加一个盒子实现内容居中，（子绝父相）
4. 通过类名调用字体图标
    - 本质上就是封装
5. 监控区域
    - tab栏切换
    - 这块的css代码老师也只是复制粘贴的
    - 为了防止变量名污染，采用立即执行函数策略
    - 无缝滚动->原理类似于之前做过的轮播图，妙啊，主要逻辑使用css的keyframes做的。

6. 饼状图部分（玫瑰图）
    - 用echarts制作
7. 其他模块老师没讲，完整项目参考：https://github.com/xiaomangjun/ECharts_material