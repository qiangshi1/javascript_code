#  BOM

## 什么是BOM
1. BOM: 浏览器对象模型
2. BOM缺乏标准
3. 对比BOM和DOM
    - BOM是管浏览器的
    - DOM是管页面的
    - BOM包含DOM
4. window
    - (bom)包括: document(dom)/location/navigation/screen/history
    - windows是js访问浏览器的接口
    - windows是一个全局变量

## window常见事件
1. 窗口加载事件
    - `window.onload=function`
    - 页面加载完之后再执行
    - 通过这样的方法可以把`script`提到网页标签之前
    - 不能写多个`window.onload=function`, 后边覆盖前边的
2. 窗口加载事件 
    - `window.addEventListener('click', function)`
    - 和`window.onload=function`类似, 但是可以执行多个
3. `DOMContentLoaded`
    - `DOMContentLoaded`是document的, 不是window的. 
    - DOM执行完, 但图片/flash还没有渲染完
    - 用在大图片的网页中
    - `DOMContentLoaded`比`onload`更快
4. 调整窗口大小事件
    - `resize`
    - `window.innerWidth`获取窗口宽
    - `window.innerHeight`获取窗口高
5. 定时器事件
    - `setTimeout`
    - window的属性, window可以省略
    - 第1个形参是回调函数, 第2个形参是延迟时间, 单位是ms
    - 可以给`setTimeout`设置设置变量(起名字): `var timer1=setTimeout···`
    - `clearTimeout`清除定时器, 通过名字清除, 如`clearTimeout(timer1)`
5. 定时器事件
    - `setInterval`
    - 循环调用
    - `clearInterval`清除定时器
    - 其它和`setTimeout`相同
6. this的指向问题
    - 在全局作用域中this指向window
    - 在普通函数中this指向window
    - 在定时器中this指向window
    - 在对象的成员方法中this指向对象本身
    - this的指向是可以更改的, 以后再讲(P278)
7. js的同步和异步
    - js是单线程语言
    - 同步: 顺序执行
    - 异步: 你可以看作多线程
    - 异步任务: 普通事件(click, resize等), 资源加载(load, error等), 定时器.
    - js把任务分为同步任务和异步任务, js会先执行同步任务, 再检查异步任务, 如果要执行, 就执行异步任务. 
8. location对象
    - location可以解析URL
    - URL语法: `protocol://host[:port]/path/[?query]#fragment`
    - location有多个属性，对应于URL的多个字段。
    - 可以通过赋值`location.href`实现网页跳转。
    - `location.href()`实现浏览器跳转, 有回退功能
    - `location.assign()`实现浏览器跳转, 有回退功能
    - `location.replace()`实现浏览器跳转, 但没有回退功能
    - `location.reload()`本页面刷新
    - 刷新和强制刷新的概念：
9. navigator对象
    - navigator可以获取浏览器的相关信息
    - navigator可以实现根据浏览器类型（PC或者移动端）跳转网页
    - 但根据浏览器类型（PC或者移动端）跳转网页一般会在服务器端实现，不会在前端实现。

10. history对象
    - 和浏览器的历史交互
    - `history.forward()`相当于按浏览器前进按钮
    - `history.backward()`相当于按浏览器后退按钮
    - `history.go(n)` 前进或者后退n步（可以是负值），所以`history.forward()`相当于`history.go(1)`；`history.backward()`相当于`history.go(-1)`









