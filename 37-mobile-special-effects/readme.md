# 移动端网页特效

## 引言
1. 移动端js兼容性好
2. 尽量用css写效果，如果css无法实现再用js
3. 在浏览器开发者模式下把浏览器调成移动端模式


## 触摸事件（01-touch.html）
1. touch回调
    - touchstart开始触摸
    - touchmove持续触摸
    - touchend结束触摸
2. touch对象
    - touches 当前触摸的手指组成的列表
    - targetTouches 正在触摸当前DOM的手指列表
    - changedTouches 手指状态发生了改变的列表
    - touchend可以获取changedTouches，而touches和targetTouches为空。
    - 最常用的是targetTouches
3. 拖动元素
    - 通过touch的相关回调实现
    - 

    
## 移动端click会有300ms的延迟问题
1. 原因在于移动端有双击放大缩小的功能
    - 解决方案1：禁止缩放功能：`<meta name="viewport" content="user-scalable=no">`
    - 解决方案2：用touch封装一个click, 摘自：https://blog.csdn.net/weixin_46113485/article/details/104567528
        ```js
            //封装tap,解决click 300ms延时
            function tap(obj,callback){
            var flag = false;
            var startTime = 0;  //记录触摸时候的时间变量
            obj.addEventListener('touchstart',function(e){
            startTime = Date.now()
            
            });
            obj.addEventListener('touchmove',function(e){
            flag = true; //看看是否有滑动，有滑动算拖拽，不算点击
            });
            obj.addEventListener('touchend',function(e){
                if(!flag && (Date.now() - startTime) < 150){ //如果手指触摸和离开时间小于150ms算点击
                callback && callback() //执行回调函数
            }
            flag = false;  //取反，重置
            stratTime = 0;
            });
            }
        ```
    - 解决方案3：fastclick插件：https://github.com/JakeSidSmith/react-fastclick








