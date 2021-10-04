# 本地存储

## 简介
1. 存储几兆
2. 只能存储字符串

## window.sessionStorage(会话存储)（01_session_storage.html）
1. 生命周期为关闭浏览器窗口
2. 在同一个页面下数据可以共享
3. 以键值对形式存储
4. 可以通过浏览器调试模式-》应用程序-》会话存储 查看当前的会话存储的键值对
5. 
    - 存：`var value; sessionStorage.setItem('key', value);`
    - 取：`var value=sessionStorage.getItem('key');`
    - 删：`sessionStorage.removeItem('key');`
    - 删除所有（清空）：`sessionStorage.clear();`

## window.localStorage(本地存储)(02_local_storage.html)
1. 生命周期永久有效
2. 多窗口共享
3. 以键值对形式存储
4. 
    - 存：`var value; localStorage.setItem('key', value);`
    - 取：`var value=localStorage.getItem('key');`
    - 删：`localStorage.removeItem('key');`
    - 删除所有（清空）：`localStorage.clear();`
