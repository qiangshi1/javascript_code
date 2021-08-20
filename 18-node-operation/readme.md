# 节点操作

## 为什么用节点操作
1. 节点操作也还是获取元素, 那为什么不用DOM呢(也就是document.querrySelector等document方法)
2. 但是DOM方法逻辑性不强, 所以引入了节点操作. 

## 节点node(01-first-node.html)
1. 节点包括元素节点、文本节点和属性节点
2. 节点由节点名称、节点类型、节点值描述
```js
var box1=document.querySelector('.box1');
console.log(box1.nodeName); // DIV
console.log(box1.nodeType); // 1
console.log(box1.nodeValue); // null
```
3. 元素节点nodeType为1, 属性节点nodeType为2, 文本节点nodeTye为3. 
4. 文本节点包括文本、空格、换行
5. 实际应用过程中, 主要用到元素节点
6. 

## 节点层级(02-node-hierarchy.html)
1. 获取父节点
    - `.parentNode`
    - 如果找不到父节点就返回null
2. 获取子节点
    - `.childNodes`, 返回元素节点和文本节点, 不推荐
    - `.children`, 返回元素节点, 推荐
    - 如：
    ```js
    // 2. 获取child, 也就是father的子节点
    var father=document.querySelector('.father');
    console.log(father.childNodes); // 包含元素节点和文本节点, 在此例中, 输出: NodeList(3) [text, div.child, text]. 第一个是 我是father, 第二个是 div, 第三个是 换行
    // 可以通过nodeType筛选出father.childNodes的元素节点
    console.log(father.children); // 只包括元素节点, 在此例中, 输出: [div.child]
    ```
3. 获取第一个子节点
    - `x.firstChild`, 包括元素节点和文本节点
    - `x.firstElementChild`, 只包括元素节点, 可能有兼容性问题
    - `x.children[0]`, 只包括元素节点, 推荐
4. 获取最后一个子节点
    - `x.lastChild`, 包括元素节点和文本节点
    - `x.lastElementChild`, 只包括元素节点, 可能有兼容性问题
    - `x.children[x.children.length-1]`, 只包括元素节点, 推荐
5. 兄弟节点
    - `x.nextSibling`, 获取下一个兄弟节点, 包括元素节点和文本节点  
    - `x.nextElementSibling`, 获取下一个兄弟节点, 只包括元素节点, 可能有兼容性问题  
    - `x.previousSibling`, 获取上一个兄弟节点, 包括元素节点和文本节点
    - `x.previousElementibling`, 获取上一个兄弟节点, 只包括元素节点, 可能有兼容性问题
    - 可以用nextSibling封装成没有兼容性问题的nextElementSibling, previousSibling也是一样
    - 兄弟节点用得相对较少
6. 添加节点
    - `x.appendChild(y)`, 在x的子节点最后追加一个新的子节点y
    - `x.insertBefore(y, x.children[2])`, 在x的第2个子节点前插入一个新的子节点y
    - 如: 
    ```js
        // 先初始化一个节点
        var a_new_li=document.createElement('li');
            // 再添加节点
        ol.appendChild(a_new_li);   // 效果是本来ol中有5个li, 执行完这行代码之后, 在后面追加一个新的li
            // 在指定元素前插入节点
        var a_new_li2=document.createElement('li');
        ol.insertBefore(a_new_li2, ol.children[2]);   // 在ol的第二个li前插入一个新的li
    ```
7. 删除节点
    - `x.removeChild(x.children[x.children.length-1]);` //删除x的最后一个子节点
8. 复制节点
    - `x.cloneNode()`和`x.cloneNode(false)`, 浅拷贝, 复制标签
    - `x.cloneNode(true)`, 深拷贝, 复制标签和内容

9. 三种创建元素的方法
    - `document.write` 可能会导致全部页面重绘, 
    - `x.innerHTML()` `x.innerHTML()`+数组的形式最快, `x.innerHTML()`+拼接字符串的形式最慢.  
    - `document.createElement()` 



