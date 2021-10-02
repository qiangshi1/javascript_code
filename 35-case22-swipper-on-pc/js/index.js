window.addEventListener('load', function () {
    var arrow_left = this.document.querySelector('.arrow-left');
    var arrow_right = this.document.querySelector('.arrow-right');
    var circle_pos = 0; //小圆圈位置
    // console.log(arrow_left);
    // console.log(arrow_right);
    // 左右箭头的显示和隐藏
    var focus = this.document.querySelector('.focus');
    focus.addEventListener('mouseenter', function () {
        arrow_left.style.display = 'block';
        arrow_right.style.display = 'block';
        // 鼠标放上去取消自动轮播
        console.log('here1');
        clearInterval(timer);
    });
    focus.addEventListener('mouseleave', function () {
        arrow_left.style.display = 'none';
        arrow_right.style.display = 'none';
        // 鼠标离开恢复自动轮播
        timer = window.setInterval(function () {
            // 手动调用事件
            console.log('here2');
            arrow_right.click();
        }, 2000);
    });
    // 动态生成小圆圈
    var ul = focus.querySelector('ul'); // focus里边的ul
    var ol = focus.querySelector('ol'); // focus里边的ol
    // console.log(ul.childElementCount); // 子元素个数 6个
    for (var i = 0; i < ul.childElementCount; i++) {
        // 创建li
        var li = this.document.createElement('li');
        // 每个li设置索引号
        li.setAttribute('index', i);
        // 插入li
        ol.appendChild(li);
        // 小圆圈可以点击
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.childElementCount; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // ul的移动距离是小圆圈的索引号X宽度，注意是负值
            var focusWidth = focus.offsetWidth;
            var index = this.getAttribute('index');
            circle_pos = index;
            animate(ul, -index * focusWidth);
        });
    }

    // 向后插入第一张图片----用作无缝滚动
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var flag = true; //节流阀
    arrow_left.addEventListener('click', function () {
        if (flag == true) {
            // 关闭节流阀
            flag = false;
            // 移动小圆圈
            circle_pos--;
            // console.log(circle_pos);
            if (circle_pos < 0) {
                circle_pos = ol.childElementCount - 1;
            }
            for (var i = 0; i < ol.childElementCount; i++) {
                ol.children[i].className = '';
            }
            // console.log(circle_pos);
            ol.children[circle_pos].className = 'current';
            if (circle_pos == ul.childElementCount - 2) {
                // console.log('here');
                ul.style.left = -(ul.childElementCount - 1) * focus.offsetWidth + 'px';
                animate(ul, -(ul.childElementCount - 2) * focus.offsetWidth, function () {
                    flag = true; // 打开节流阀
                });
            } else {
                animate(ul, -circle_pos * focus.offsetWidth, function () {
                    flag = true; // 打开节流阀
                });
            }

        }
    });
    arrow_right.addEventListener('click', function () {
        if (flag == true) {
            // 关闭节流阀
            flag = false;
            // 移动小圆圈
            circle_pos++;
            if (circle_pos == ol.childElementCount) {
                circle_pos = 0;
            }
            for (var i = 0; i < ol.childElementCount; i++) {
                ol.children[i].className = '';
            }
            // console.log(circle_pos);
            ol.children[circle_pos].className = 'current';

            if (circle_pos == 0) {
                // console.log('here1');
                animate(ul, -focus.offsetWidth * (ul.childElementCount - 1), function () {
                    // console.log('here2');
                    ul.style.left = '0px';
                    flag = true;
                });
            } else {
                animate(ul, -circle_pos * focus.offsetWidth, function () {
                    flag = true;
                });
            }
        }
    });
    // 第一个li染色
    ol.children[0].className = 'current';
    // 自动播放->相当于点击右侧按钮
    var timer = this.setInterval(function () {
        // 手动调用事件
        arrow_right.click();
    }, 2000);

});