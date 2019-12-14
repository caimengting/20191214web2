var ti = document.getElementById("ti");
			var t = 750;
			window.onload=function() {
				setInterval(function() {
					ti.style.marginLeft = t + "px";
					// console.log(1);
					// console.log(ti.style.marginLeft);
					t--;
					if(t <= -10) {
						t = 750;
					}
				},10);
				// t--;
			};
			
			
			
			var box = document.getElementById("box");
			var oNavlist = document.getElementById("nav").children;
			var slider = document.getElementById("slider");
			var left = document.getElementById("left");
			var right = document.getElementById("right");
			var index = 1;
			var timer;
			var flag = 0;
			var timer = setInterval(next,3000);
			function next() {
				if(flag == 1) {
					return ;
				}
				flag = 1;
				index++;
				navChange();
				animate(slider,{left:-1200*index},function() {
					if(index >= 6) {
						slider.style.left = "-1200px";
						index = 1;
					}
					flag = 0;
				});
			}
			
			
			function prev() {
				if(flag == 1) {
					return ;
				}
				flag = 1;
				//navChange();
				navChange2();
				index--;
				animate(slider,{left:-1200*index},function() {
					if(index <= 0) {
						slider.style.left = "-6000px";
						index = 5;
					}
					flag = 0; 
				});
			}
			
			box.onmouseover = function() {
				animate(left, {opacity:50});
				animate(right, {opacity:50});
				clearInterval(timer);
			}
			box.onmouseout = function() {
				animate(left, {opacity:0});
				animate(right, {opacity:0});
				timer = setInterval(next, 3000);
			}
			
			right.onclick = next;
			left.onclick = prev;
			
			for(var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].idx = i;
				oNavlist[i].onclick = function() {
					index = this.idx + 1;
					navChange();
					animate(slider,{left:-1200*index});
				}
			}
			function navChange() {
				for(var i = 0; i < oNavlist.length; i++) {
					oNavlist[i].className = "";
				}
				oNavlist[(index-1)%5].className = "active";
				
			}
			function navChange2() {
				for(var i = 0; i < oNavlist.length; i++) {
					oNavlist[i].className = "";
				}
				oNavlist[(index+3)%5].className = "active";
				
			}