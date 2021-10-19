$(function(){
    // 持久化存储的格式
    var todolist=[{title: '哈哈哈哈哈哈哈哈哈哈', done: false}];
    // 本地存储会转成字符串，所以对象要转成字符串
    localStorage.setItem('todolist', JSON.stringify(todolist));
    
    // 输出框输入回车
    $('#title').on('keydown', function(e){
        if(e.keyCode==13){
            if($(this).val()===''){
                alert('不能为空的呀!');
                return;
            }
            // 读取原来的本地存储todolist
            var local=getData();
            // console.log(local);
            // 更新数据
            local.push({title: $(this).val(), done: false});
            saveData(local);
            load();
        }
    });
    // 删除元素
    // 事件委托
    $('#doing, #done').on('click', 'button', function(){
        var data=getData();
        var index=$(this).parent().attr('id'); // 取索引号
        data.splice(index, 1);
        saveData(data);
        load();
    });
    $('#doing, #done').on('click', 'input', function(){
        console.log('herh');
        var data=getData();
        // 和老师的不一样，我的id是放在li里边的
        var index=$(this).parent().attr('id'); // 取索引号
        // console.log(this);
        // 获取复选框的状态
        data[index].done=$(this).prop('checked');
        // console.log(data);
        saveData(data);
        load();
    });
    // 读取原来的本地存储封装成一个函数
    function getData(){
        var data=localStorage.getItem('todolist');
        if(data!==null){
            // 取的时候也要把字符串转成对象
            return JSON.parse(data);
        }else{
            return []; // 返回空数组
        }
    }
    // 保存本地存储封装成一个函数
    function saveData(data){
        data=JSON.stringify(data);
        localStorage.setItem('todolist', data);
    }
    // 加载显示数据
    
    var doingCount=0;
    var doneCount=0;
    function load(){
        var data=getData();
        // console.log(data);
        // 遍历前先清空
        $('#doing, #done').empty();
        // 遍历追加
        // 注意添加索引号（id）
        // 索引号是不区分doing和done的。
        doingCount=0;
        doneCount=0;
        $.each(data, function(i, n){
            if(n.done){
                doneCount++;
                $('#done').prepend('<li id="'+i+'"><input type="checkbox" checked="checked"><p>'+n.title+'</p><a href="#"></a><button>删除</button></li>');
            }else{
                doingCount++;
                $('#doing').prepend('<li id="'+i+'"><input type="checkbox"><p>'+n.title+'</p><a href="#"></a><button>删除</button></li>');
            }
        });
        $('#todoCount').text(doingCount);
        $('#doneCount').text(doneCount);
    }
    load();
    
});