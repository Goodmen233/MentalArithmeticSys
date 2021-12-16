function addFunctionAlty(value, row, index) {
    return [
        '<button id="TableEditor" type="button" class="btn btn-default" style="color: aqua">编辑</button>',
    ].join('');
}
window.operateEvents = {
    'click #TableEditor': function (e, value, row, index) {
        // console.log(row.id);
        // console.log(row.institute);
        $("#mask").show();
        $("#popbox").show();
        $("#show_user_id").val( row.id );   //将前台数据放在隐藏页中
        $("#user_id").val( row.id );
        $("#user_username").val( row.username );
        $("#user_name").val( row.name );
        $("#user_password").val(row.password)
        $("#user_sex").val( row.sex );
        $("#user_authority").val( row.authority );
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
    $('#bs-table').bootstrapTable({
        // url: "/userManage",                                   // 请求后台的URL（*）
        // method: 'post',                                         //请求方式
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
                field:'password',
                title:'密码',
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
        data:[{
            "id": 1,
            "username": "ccb",
            "name": "CCB",
            "password":"333",
            "sex":1,
            "authority":0
        },{
            "id": 2,
            "username": "pjy",
            "name": "PJY",
            "password":"111",
            "sex":1,
            "authority":0
        },{
            "id": 3,
            "username": "wck",
            "name": "WCK",
            "password":"123",
            "sex":1,
            "authority":0
        },{
            "id": 4,
            "username": "admin",
            "name": "admin",
            "password":"admin",
            "sex":1,
            "authority":1
        },{
            "id": 5,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        },{
            "id": 6,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        },{
            "id": 7,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        },{
            "id": 8,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        },{
            "id": 9,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        },{
            "id": 10,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        },{
            "id": 11,
            "username": "prettyGirl",
            "name": "pg",
            "password":"444",
            "sex":0,
            "authority":0
        }
        ]
    });
    $('#bs-test').bootstrapTable({
        // url: "/userManage",                                   // 请求后台的URL（*）
        // method: 'post',                                         //请求方式
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
                field:'type',
                title:'类型',
                align:'center',
            },
            {
                field:'num',
                title:'成绩',
                align:'center',
                sortable:true
            },
            {
                field:'time',
                title:'时间',
                align:'center',
                sortable:true
            }
        ],
        //数据
        data:[{
            "sid": 1,
            "uid": "3",
            "username": "wck",
            "name":"WCK",
            "type":"123",
            "num":100,
            "time":'40s'
        },{
            "sid": 2,
            "uid": "1",
            "username": "CCB",
            "name":"ccb",
            "type":"123",
            "num":90,
            "time":'60s'
        },{
            "sid": 3,
            "uid": "ccb",
            "username": "PJY",
            "name":"pjy",
            "type":"123",
            "num":80,
            "time":'80s'
        },{
            "sid": 4,
            "uid": "3",
            "username": "llc",
            "name":"llc",
            "type":"123",
            "num":70,
            "time":'70s'
        },{
            "sid": 6,
            "uid": "ccb",
            "username": "CCB",
            "name":"333",
            "type":"123",
            "num":60,
            "time":'20s'
        },{
            "sid": 7,
            "uid": "ccb",
            "username": "CCB",
            "name":"333",
            "type":"123",
            "num":30,
            "time":'10s'
        }
        ]
    });

})

$('#bs-table').bootstrapTable("hideLoading");
function fm_sex(value, row, index) {
    return value == 1 ? '男' : '女';
}

function fm_authority(value, row, index) {
    return value == 1 ? '管理员' : '用户';
}