window.onload = function(){
	
	var banner = function(){
		//1、自动轮播图且无缝  ---- 定时器、过渡
		//2、点随图片轮播改变 ---- 根据索引切换
		//3、滑动效果 --- touch事件
		//4、滑动结束的时候  滑动距离不超过屏幕1/3  吸附回去 ---- 过渡
		//5、滑动结束的时候  滑动距离超过屏幕1/3  切换（上一张、下一张）---- 根据滑动的方向、过渡
		
		//轮播图容器
		var banner = document.querySelector("banner");
		//屏幕宽度
		var width = banner.offsetWidth;
		console.log(width);
		//图片容器
		var imgBox = banner.querySelector("ul");
		//点容器
		var pointBox = banner.querySelector("ol");
		//所有的点
		var points = pointBox.querySelectorAll("li");
		
		//程序的核心 index
		var index = 1;
		var timer = setInterval(function(){
			index ++;
			//加过渡
			imgBox.style.transform = "all 0.2s";
			imgBox.style.webkitTransform = "all 0.2s";
			//作位移
			imgBox.style.transform = "translateX("+(-index*width)+"px)";
			imgBox.style.webkitTransform = "translateX("+(-index*width)+"px)";
		},3000);
	}
}

//未实现！！！！！
