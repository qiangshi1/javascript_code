// 一键返回顶部的缓动动画
function animate(obj, target, callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        console.log('here');
        var step=(target-window.pageYOffset)/7;
        step = step>0 ? Math.ceil(step):Math.floor(step);
        if(window.pageYOffset==target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        // obj.style.left=window.pageYOffset+step+'px';
        window.scroll(0, window.pageYOffset+step);
    }, 30);
}