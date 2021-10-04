#   移动端轮播图

## 
1. 静态网页使用携程（14-case6-ctrip-mobile）

## 和PC端不同的点：
1. 移动端轮播图的首尾都要插入图片，想一想为什么？（P336）
2. 用transition表示过渡动画：`ul.style.transition='all .3s';`
3. 用transitionend表示过渡结束，transitionend是一个回调
4. 手指滑动轮播
    - 回弹效果
5. 阻止屏幕滚动的默认行为: `e.preventDefault();` 
    - 不然手指触摸的时候，图片移动，整个屏幕都跟着移动
 

## 知识点
1. classList可以返回元素的类名
    - 添加一个类名：`classList.add('class')`    
    - 删除一个类名：`classList.remove('class')`
2. 浏览器调试模式可以打开标尺

## 另外
1. 图片补全（前后插入图片）老师是写在html中的，以后有机会可以用js动态生成

# 移动端一键返回顶部
