window.addEventListener('load', function(){
    // this.alert('123');
    // 获取元素
    var focus=this.document.querySelector('.focus');
    var ul=focus.children[0];
    var ol=focus.children[1];
    // 获取focus宽度----每次移动的宽度
    var w=focus.offsetWidth;
    var index=0;
    var img_num=5;
    // 自动轮播
    var timer=this.setInterval(function(){
        index--;
        var translateX=-index*w;
        ul.style.transition='all .3s'; // 过渡动画
        ul.style.transform='translateX('+ translateX +'px)';
    }, 2000);
    // transitionend：一次动画结束之后调用的回调----这里是这一行的回调：ul.style.transition='all .3s';
    ul.addEventListener('transitionend', function(){
        console.log(1);
        if(index>=img_num){
            index=0;
            ul.style.transition='none'; // 去除过渡动画
            var translateX=-index*w;
            ul.style.transform='translateX('+ translateX +'px)';
        }else if(index<0){
            index=img_num-1;
            ul.style.transition='none'; // 去除过渡动画
            var translateX=-index*w;
            ul.style.transform='translateX('+ translateX +'px)';
        }
        // 小圆点的变化
            // 选出<li class="current"></li>
            // 删除current类名
        ol.querySelector('li.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });
    // 手指触摸轮播
    var startX=0;
    var moveX=0; 
    var flag=false; // 如果用户手指移动过
    ul.addEventListener('touchstart', function(e){
        startX=e.targetTouches[0].pageX;
        // 手指触摸的时候取消自动轮播
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function(e){
        moveX=e.targetTouches[0].pageX-startX;
        var translateX=-index*w+moveX;
        ul.style.transition='none'; // 去除过渡动画
        ul.style.transform='translateX('+ translateX +'px)';
        flag=true;
        e.preventDefault(); // 阻止屏幕滚动的默认行为
    });
        // 回弹效果
    ul.addEventListener('touchend', function(e){
        if(flag==true){
            if(Math.abs(moveX)>50){ // 弹到下一张
                if(moveX>0){ // moveX>0 右划 播放下一张
                    index--;
                }else{ // moveX<0 左滑 播放上一张
                    index++;
                }
                var translateX=-index*w;
                ul.style.transition='all .3s'; // 
                ul.style.transform='translateX('+ translateX +'px)';
            }else{ // 弹回去
                var translateX=-index*w;
                ul.style.transition='all .3s'; // 
                ul.style.transform='translateX('+ translateX +'px)';
            }
            // 恢复自动轮播
            clearInterval(timer); // 开之前先清除定时器
            timer=setInterval(function(){
                index--;
                var translateX=-index*w;
                ul.style.transition='all .3s'; // 过渡动画
                ul.style.transform='translateX('+ translateX +'px)';
            }, 2000);
        }
    });
    // 一键返回顶部功能
    var goBack=document.querySelector('.go-back');
    var nav=document.querySelector('nav');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= nav.offsetTop){
            goBack.style.display='block';
        }else{
            goBack.style.display='none';
        }
    });
    goBack.addEventListener('click', function(){
        window.scroll(0, 0);
    });
});