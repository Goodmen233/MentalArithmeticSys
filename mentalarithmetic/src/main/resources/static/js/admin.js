function addFunctionAlty(value, row, index) {
    return [
        '<button id="TableEditor" type="button" class="btn btn-default" style="color: aqua">编辑</button>',
    ].join('');
}


window.operateEvents = {
    'click #TableEditor': function (e, value, row, index) {
        $("#mask").show();
        $("#popbox").show();
        $("#show_user_id").val( row.id );   //将前台数据放在隐藏页中
        $("#userId").val( row.id );
        $("#username").val( row.username );
        $("#name").val( row.name );
        $("#password").val(row.password)
        $("#sex").each(function () {
            if (row.sex == 1){
                $(this).find("#man").prop("checked","checked")
            };
            if (row.sex == 0){
                $(this).find("#woman").prop("checked","checked")
            };
        });
        $("#authority").each(function () {
            if (row.authority == 1){
                $(this).find("#admin").prop("checked","checked")
            };
            if (row.authority == 0){
                $(this).find("#user").prop("checked","checked")
            };
        });
    },
    'click #TableDelete': function (e, value, row, index) {
        $(this).parent().parent().remove()
    }
};
function onload(){
    $("#editUserBlock").show();
    $("#userTestBlock").hide();
}

$(function(){

    onload();
    //左侧点击事件转换
    $("#editUserBtn").click(function(){
        $("#editUserBlock").show();
        $("#userTestBlock").hide();
    })
    $("#userTestBtn").click(function(){
        $("#userTestBlock").show();
        $("#editUserBlock").hide();

    })


    // 用户信息请求
    $('#bs-table').bootstrapTable({
        url: "/getAllUser",                                   // 请求后台的URL（*）
        method: 'post',                                         //请求方式
        toolbar:"#toolbar",
        striped: true,                                      //是否显示行间隔色
        sidePagination: "client",                           //分页方式：client客户端分页，server服务端分页（*）
        pagination: true,                                   // 是否显示分页（*）
        search:true,                                        //是否显示表格搜索
        strictSearch:true,
        pageNumber: 1,                                      // 初始化加载第一页，默认第一页
        pageSize: 6,                                        // 每页的记录行数（*）
        pageList: [5,10,15],                               // 可供选择的每页的行数（*）
        showRefresh: false,
        showColumns:false,
        clickToSelect: true,
        columns:[

            {
                field:'id',
                title:'用户ID',
                align:'center'
            },
            {
                field:'username',
                title:'用户名',
                align:'center'
            },
            {
                field:'name',
                title:'姓名',
                align:'center'
            },
            {
                field:'sex',
                title:'性别',
                align:'center',
                formatter: "fm_sex",
            },
            {
                field:'authority',
                title:'权限',
                align:'center',
                formatter: "fm_authority"
            },
            {
                field:'operate',
                title:'操作',
                align:'center',
                events: operateEvents,//给按钮注册事件
                formatter: addFunctionAlty//表格中增加按钮
            }
        ],
    });
    // 用户测试数据请求
    $('#bs-test').bootstrapTable({
        url: "/getAllUserScore",                                   // 请求后台的URL（*）
        method: 'post',                                         //请求方式
        striped: true,                                      //是否显示行间隔色
        sidePagination: "client",                           //分页方式：client客户端分页，server服务端分页（*）
        pagination: true,                                   // 是否显示分页（*）
        search:true,                                        //是否显示表格搜索
        strictSearch:true,
        pageNumber: 1,                                      // 初始化加载第一页，默认第一页
        pageSize: 6,                                        // 每页的记录行数（*）
        pageList: [5,10,15],                               // 可供选择的每页的行数（*）
        showRefresh: false,
        showColumns:false,
        clickToSelect: true,
        columns:[

            {
                field:'sid',
                title:'测试序号',
                align:'center',
                sortable:true
            },
            {
                field:'uid',
                title:'用户ID',
                align:'center',
                sortable:true,
            },
            {
                field:'username',
                title:'用户名',
                align:'center'
            },
            {
                field:'name',
                title:'姓名',
                align:'center'
            },
            {
                field:'typeName',
                title:'类型',
                align:'center',
                sortable:true,
                formatter:"fm_type"
            },
            {
                field:'finalScore',
                title:'成绩',
                align:'center',
                sortable:true
            },
            {
                field:'time',
                title:'测试时间',
                align:'center',
                sortable:true
            }
        ]
    });
    // 各类型平均分请求
    $('#bs-averagetable').bootstrapTable({
        url: "/getAvgScore",                                   // 请求后台的URL（*）
        // method: 'post',                                         //请求方式
        striped: true,                                      //是否显示行间隔色
        sidePagination: "client",                           //分页方式：client客户端分页，server服务端分页（*）
        pagination: true,                                   // 是否显示分页（*）
        search:true,                                        //是否显示表格搜索
        strictSearch:true,
        pageNumber: 1,                                      // 初始化加载第一页，默认第一页
        pageSize: 2,                                        // 每页的记录行数（*）
        showRefresh: false,
        showColumns:false,
        clickToSelect: true,
        columns:[
            {
                field:'typeName',
                title:'类型',
                align:'center',
                sortable:true
            },
            {
                field:'finalScore',
                title:'平均分',
                align:'center',
                sortable:true,
            }
        ],
    });

    $("#mask").click(function () {
        $("#popbox").css("display","none");
        $("#mask").hide();
    })

})

$('#bs-table').bootstrapTable("hideLoading");
function fm_sex(value, row, index) {
    return value == 1 ? '男' : '女';
}

function fm_authority(value, row, index) {
    return value == 1 ? '管理员' : '用户';
}

function fm_type(value, row, index) {
    if (value == '121')
        return '2位整数，固定时间'
    if (value == '122')
        return '2位整数，固定数量'
    if (value == '123')
        return '2位整数，固定答对题目'
    if (value == '131')
        return '3位整数，固定时间'
    if (value == '132')
        return '3位整数，固定数量'
    if (value == '133')
        return '3位整数，固定答对题目'
    if (value == '141')
        return '4位整数，固定时间'
    if (value == '142')
        return '4位整数，固定数量'
    if (value == '143')
        return '4位整数，固定答对题目'
    if (value == '221')
        return '2位实数，固定时间'
    if (value == '222')
        return '2位实数，固定数量'
    if (value == '223')
        return '2位实数，固定答对题目'
    if (value == '231')
        return '3位实数，固定时间'
    if (value == '232')
        return '3位实数，固定数量'
    if (value == '233')
        return '3位实数，固定答对题目'
    if (value == '241')
        return '4位实数，固定时间'
    if (value == '242')
        return '4位实数，固定数量'
    if (value == '243')
        return '4位实数，固定答对题目'
    if (value == '321')
        return '2位分数，固定时间'
    if (value == '322')
        return '2位分数，固定数量'
    if (value == '323')
        return '2位分数，固定答对题目'
    if (value == '331')
        return '3位分数，固定时间'
    if (value == '332')
        return '3位分数，固定数量'
    if (value == '333')
        return '3位分数，固定答对题目'
    if (value == '341')
        return '4位分数，固定时间'
    if (value == '342')
        return '4位分数，固定数量'
    if (value == '343')
        return '4位分数，固定答对题目'
}

