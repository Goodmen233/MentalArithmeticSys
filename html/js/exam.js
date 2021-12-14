$(function(){
	// 获取Dom
    const box_minute = document.querySelector("#box_minute");
    const Top = box_minute.querySelector("#top");
    const flip = box_minute.querySelector("#flip");
    const flipFace = flip.querySelector("#flip_face");
    const flipBack = flip.querySelector("#flip_back");
    const Bottom = box_minute.querySelector("#bottom");

    const box_minute1 = document.querySelector("#box_minute1");
    const Top1 = box_minute1.querySelector("#top1");
    const flip1 = box_minute1.querySelector("#flip1");
    const flipFace1 = flip1.querySelector("#flip_face1");
    const flipBack1 = flip1.querySelector("#flip_back1");
    const Bottom1 = box_minute1.querySelector("#bottom1");

    const box_minute2 = document.querySelector("#box_minute2");
    const Top2 = box_minute2.querySelector("#top2");
    const flip2 = box_minute2.querySelector("#flip2");
    const flipFace2 = flip2.querySelector("#flip_face2");
    const flipBack2 = flip2.querySelector("#flip_back2");
    const Bottom2 = box_minute2.querySelector("#bottom2");

    let timer = null, timerTwo = null;
    // 生成算数列表
    var List = [];
    var oprator = ['+','-','x','/'];
    for (var i = 0; i <100; i++) {
    	//确定运算符
    	let cul = oprator[Math.floor((Math.random()*oprator.length))];
    	let adder1 = Math.floor(Math.random()*99+10);
    	let adder2 = Math.floor(Math.random()*99+10);
    	let result;
    	if(cul == '+'){
    		result = adder1+adder2;
    	}else if (cul == '-') {
    		result = adder1-adder2;
    	}else if (cul == 'x') {
    		result = adder1*adder2;
    	}else{
    		adder1 = Math.floor(Math.random()*9+1);
    		adder2 = Math.floor(Math.random()*11+1);
    		let temp = adder2*adder1;
    		result = adder1;
    		adder1 = temp;
    	}
    	let item = {
    		adder1:adder1,
    		alg:cul,
    		adder2:adder2,
    		result:result
    	}
    	List.push(item);
    }

    const OneCycle = (n, timer) => { // 一次翻页的周期
      	let num = 0;
      	flipFace.style.zIndex = 1;
      	flipBack.style.zIndex = 0;
      	flip.style.transform = "perspective(500px) rotateX(0deg)"; // rotateX(0deg) => rotateX(-180deg)
      	flipFace.innerHTML = List[n].adder1;
      	Bottom.innerHTML = List[n].adder1;

	  	flipFace1.style.zIndex = 1;
      	flipBack1.style.zIndex = 0;
      	flip1.style.transform = "perspective(500px) rotateX(0deg)"; // rotateX(0deg) => rotateX(-180deg)
      	flipFace1.innerHTML = List[n].alg;
      	Bottom1.innerHTML = List[n].alg;

      	flipFace2.style.zIndex = 1;
      	flipBack2.style.zIndex = 0;
      	flip2.style.transform = "perspective(500px) rotateX(0deg)"; // rotateX(0deg) => rotateX(-180deg)
      	flipFace2.innerHTML = List[n].adder2;
      	Bottom2.innerHTML = List[n].adder2;

      	timer = setInterval(() => {
        num++;
        if (num > 50) {
          	clearInterval(timer);
          	return;
        };

        if (num === 1) {
          	Top.innerHTML = List[n+1].adder1; // 60 和 0 在时间里，其实是一样的
          	flipBack.innerHTML = List[n+1].adder1;

          	Top1.innerHTML = List[n+1].alg; // 60 和 0 在时间里，其实是一样的
          	flipBack1.innerHTML = List[n+1].alg;

          	Top2.innerHTML = List[n+1].adder2; // 60 和 0 在时间里，其实是一样的
          	flipBack2.innerHTML = List[n+1].adder2;
        }

        if (num <= 25) {
          	flipFace.style.zIndex = 1;
          	flipBack.style.zIndex = 0;

          	flipFace1.style.zIndex = 1;
          	flipBack1.style.zIndex = 0;

          	flipFace2.style.zIndex = 1;
          	flipBack2.style.zIndex = 0;
        } else {
			flipFace.style.zIndex = 0;
          	flipBack.style.zIndex = 1;

          	flipFace1.style.zIndex = 0;
          	flipBack1.style.zIndex = 1;

          	flipFace2.style.zIndex = 0;
          	flipBack2.style.zIndex = 1;
        }
        // console.log(num); // 1 ~ 50
        flip.style.transform = `perspective(500px) rotateX(-${180 * num / 50}deg)`

        flip1.style.transform = `perspective(500px) rotateX(-${180 * num / 50}deg)`

        flip2.style.transform = `perspective(500px) rotateX(-${180 * num / 50}deg)`

        Top.style.backgroundColor = '#333';
      }, 20); // 将一秒钟分成50份。
    };

    //cycle();

    // 浏览器页面切换时，定时器setInterval抖动问题
    document.onvisibilitychange = function () {
      	if (document.visibilityState === "visible") {
        //cycle();
      	} else {
        	clearInterval(timer);
        	clearInterval(timerTwo);
      	}
    }

    var index = 0;
    var rightCount = 0;
    //按钮点击事件
    $("#change").click(function(){
    	if (document.getElementById("answer").value == List[index].result) {//判断结果是否正确
    		rightCount++;
    		console.log("rightCount="+rightCount);
    	}else{
    		console.log("wrong answer! the right answer is "+List[index].result)
    	}
      	OneCycle(index,timer);
      	index++;
      	document.getElementById('answer').value = '';
      	document.getElementById('subjectNo').innerHTML+='<div class="sheetBlcok">'+(index+1)+'</div>';
    })
})