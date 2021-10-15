$(function(){
    $('.select_all').change(function(){
        $('.select_item').prop('checked', $(this).prop('checked'));
        $(this).siblings('.select_all').prop('checked', $(this).prop('checked'));
        setBackgroundColor();
    });
    $('.select_item').change(function(){
        // $('.select_item:checked')表示元素的属性checked为true的元素
        if($('.select_item:checked').length===$('.select_item').length){
            $('.select_all').prop('checked', true);
        }else{
            $('.select_all').prop('checked', false);
        }
        setBackgroundColor();
    });
    $('.increment').click(function(){
        // 修改个数
        var n=$(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 计算小计
        var p=$(this).siblings('.cost').html();
        p=p.substr(1);  // 去掉前边的$符号
        $(this).siblings('.costs').html('$'+(n*p).toFixed(2)); // .toFixed(2) 保留2位小数
        getSum();
    });
    $('.decrement').click(function(){
        // 修改个数
        var n=$(this).siblings(".itxt").val();
        if(n==1){
            alert('不能再减啦！！！');
            return;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        // 计算小计
        var p=$(this).siblings('.cost').html();
        p=p.substr(1);  // 去掉前边的$符号
        $(this).siblings('.costs').html('$'+(n*p).toFixed(2));
        getSum();
    });
    $('.itxt').change(function(){
        var n=$(this).val();
        if(n<=0){
            $(this).val(1);
            alert("输入的数不对！！！");
            return;
        }
        var p=$(this).siblings('.cost').html();
        p=p.substr(1);  // 去掉前边的$符号
        $(this).siblings('.costs').html('$'+(n*p).toFixed(2)); // .toFixed(2) 保留2位小数
        getSum();
    });
    // 求总计
    function getSum(){
        var count=0;
        var money=0;
        $('.itxt').each(function(i, ele){
            count+=parseInt($(ele).val());
        });
        $('.sum').text(count);
        $('.costs').each(function(i, ele){
            var p=$(ele).html();
            p=p.substr(1); 
            money+=parseFloat(p);
        });
        $('.money').text('$'+money.toFixed(2));
    }
    getSum();
    // 删除商品
    $('.delete').click(function(){
        $(this).parent().remove();
        getSum(); // 这个要加上
    });
    // 删除选中的商品
    $('.delete_select').click(function(){
        $('.select_item:checked').parent().remove();
        getSum(); // 这个要加上
    });
    // 删除所有
    $('.delete_all').click(function(){
        $('.select_item').parent().remove();
        getSum(); // 这个要加上
    });

    // 选中商品添加背景
    function setBackgroundColor(){
        $('.select_item').each(function(i, ele){
            if($(ele).prop('checked')==true){
                $(ele).parent().addClass('bgr');
            }else{
                $(ele).parent().removeClass('bgr');
            }
        });
    }
    setBackgroundColor();
});