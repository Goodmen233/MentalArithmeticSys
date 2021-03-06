$(function(){
	var userId = $("#userId").val();
	console.log(userId);

	$("#userInfoBtn").click(function(){
		$("#userInfoBlock").show();
		$("#examBlock").hide();
		$("#historyBlock").hide();
	})
	$("#enterExamBtn").click(function(){
		$("#examBlock").show();
		$("#userInfoBlock").hide();
		$("#historyBlock").hide();
	})
	$("#historyInfoBtn").click(function(){
		var historyList = [];
		$.ajax({
			url:'/getAllScore',
			data:{
				userId:userId
			},
			// dataType:"json",
			success:function(data){
				console.log(data)
				for(let item=0;item<data.length;item++){
					let li = {
						type:data[item].typeName,
						score:data[item].finalScore,
						time:data[item].time
					}
					console.log(li);
					historyList.push(li);
				}

				$("#examBlock").hide();
				$("#userInfoBlock").hide();
				$("#historyBlock").show();
				for(let i in historyList){
					let div1 = '<div class="historyLabelDiv">'+'<span class="historyLabel">'+historyList[i].type+'</span>'+'<span class="historyLabel">'+historyList[i].score+'</span>'+'<span class="historyLabel" style="width: 250px;">'+historyList[i].time+'</span>'+'</div>';
					$("#historyList").append(div1);
				}
			}
		})

	})

	// 修改个人信息点击事件
	$("#alterBtn").click(function(){
		console.log("sfs");
		$(".alterInfoBlock").css('display','block');
		$(".mask").show();
	})

	//点击蒙版
	$(".mask").click(function(){
		$(".alterInfoBlock").css('display','none');
		$(".mask").hide();
	})

})

function onload(){
	$("#userInfoBlock").show();
	$("#examBlock").hide();
	$("#historyBlock").hide();
}

function alterInfo() {
	let username = $("#alterUsername").val();
	let oldPwd = $("#alterOldPsw").val();
	let newPwd = $("#alterNewPsw").val();
	let pwd = $("#userPwd").val();
	console.log(pwd);
	console.log(oldPwd);
	console.log(newPwd);
	console.log(username);
	if (username){
		if(pwd == oldPwd){
			if (newPwd){
				$.ajax({
					url:'/updateUserInfo',
					data:{
						'userId':userId,
						'username':username,
						'password':newPwd
					},
					success:function (res) {
						if(res == 1){
							alert("修改成功");
						}else{
							alert("修改失败，请稍后重试")
						}
					}
				})
			}
			else {
				$.ajax({
					url:'/updateUserInfo',
					data:{
						'userId':userId,
						'username':username,
						'password':oldPwd
					},
					success:function (res) {
						if(res == 1){
							alert("修改成功");
						}else{
							alert("修改失败，请稍后重试")
						}
					}
				})
			}
		}else{
			alert("密码错误！");
		}
	}else{
		alert("用户名不能为空！");
	}



}
