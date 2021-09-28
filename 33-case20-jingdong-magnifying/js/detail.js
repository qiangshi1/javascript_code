// 页面加载完毕再执行js
window.addEventListener('load',function(){

    var box=this.document.querySelector('.box');
    var mask=this.document.querySelector('.mask');
    var pic=this.document.querySelector('.pic');
    var big=this.document.querySelector('.big');
    var img_in_big=this.document.querySelector('.big').querySelector('img');
    // 当鼠标经过box时，mask和big显示
    console.log(img_in_big);
    box.addEventListener('mouseover', function(){
        mask.style.display='block';
        big.style.display='block';
    });
     // 当鼠标离开box后，mask和big隐藏
    box.addEventListener('mouseout', function(){
        mask.style.display='none';
        big.style.display='none';
    });
    // 鼠标在box中移动
    box.addEventListener('mousemove', function(e){
        // 获取鼠标在box中的坐标
        var x=e.pageX-this.offsetLeft;
        var y=e.pageY-this.offsetTop;
        // 移动限制
        // var maskX=x-mask.offsetWidth/2;
        // var maskY=y-mask.offsetHeight/2;
        if(x<mask.offsetWidth/2){
            x=mask.offsetWidth/2;
        }
        if(x>pic.offsetWidth-mask.offsetWidth/2){
            x=pic.offsetWidth-mask.offsetWidth/2;
        }
        if(y<mask.offsetHeight/2){
            y=mask.offsetHeight/2;
        }
        if(y>pic.offsetHeight-mask.offsetHeight/2){
            y=pic.offsetHeight-mask.offsetHeight/2;
        }
        // console.log(x);
        // console.log(y);
        // console.log(box.offsetWidth);
        // console.log(mask.offsetWidth/2);
        // 更改mask的位置
        mask.style.left=x+'px';
        mask.style.top=y+'px';
        // 大图片的移动
            // 大图片的最大移动距离
        var x_big_max_move=img_in_big.offsetWidth-big.offsetWidth;
        var y_big_max_move=img_in_big.offsetHeight-big.offsetHeight;
            // mask的最大移动距离
        var x_mask_max_move=pic.offsetWidth-mask.offsetWidth;
        var y_mask_max_move=pic.offsetHeight-mask.offsetHeight;
            // 此次大图片的移动距离
        var x_big=x*x_big_max_move/x_mask_max_move;
        var y_big=y*y_big_max_move/y_mask_max_move;
        // console.log(x_mask_max_move);
        // console.log(x_big_max_move);
        // console.log(y_big);
            // 为什么再加上300，我也不懂，试出来的，以后可以再想想。
        img_in_big.style.left=-x_big+300+'px';
        img_in_big.style.top=-y_big+300+'px';

    });

    
})