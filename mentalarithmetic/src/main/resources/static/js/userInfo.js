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
						type:data[item].type,
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

