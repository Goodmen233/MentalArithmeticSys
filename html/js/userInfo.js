$(function(){

	onload();

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
		$("#examBlock").hide();
		$("#userInfoBlock").hide();
		$("#historyBlock").show();
		var historyList = [{
			type:"二位整数十分钟测试",
			score:"正确100题",
			time:"2021.12.09 11:04:34"
		},{
			type:"二位整数十分钟测试",
			score:"正确100题",
			time:"2021.12.09 11:04:34"
		},{
			type:"二位整数十分钟测试",
			score:"正确100题",
			time:"2021.12.09 11:04:34"
		}];
		console.log("begin");
		for(let i in historyList){
			console.log("in");
			console.log(i);
			let div1 = '<div class="historyLabelDiv">'+'<span class="historyLabel">'+historyList[i].type+'</span>'+'<span class="historyLabel">'+historyList[i].score+'</span>'+'<span class="historyLabel" style="width: 250px;">'+historyList[i].time+'</span>'+'</div>';
			$("#historyList").append(div1);
			
		}
	})

})
function onload(){
	$("#userInfoBlock").show();
	$("#examBlock").hide();
	$("#historyBlock").hide();
	console.log("onload");
}