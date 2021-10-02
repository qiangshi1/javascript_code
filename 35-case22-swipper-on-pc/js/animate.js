function animate(obj, target, callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step=(target-obj.offsetLeft)/7;
        step = step>0 ? Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left=obj.offsetLeft+step+'px';
    }, 30);
}
// var box5=document.querySelector('.box5');
// animate5(box5, 300, function(){
//     alert('结束了');
// });
