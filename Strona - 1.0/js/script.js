const pressed =[];
const secretCode = 'connectedplayers123';

window.addEventListener('keyup', (e) => 
{
		pressed.push(e.key);
		pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
		
		if(pressed.join('').includes(secretCode)) 
		{
			window.location = "login/login.html";
		}
});

function getOnline() 
{
	$.get("php/visitors_js.php").done(function(data)
		{
			$("#onlineCount").fadeIn(5000);
			retrivedValue3 = data;
			$('#onlineCount').text(retrivedValue3);
			$("#onlineCount").fadeOut(5000);
		});
}

	 
 $().ready(function ()
 { 
	setInterval(getOnline, 8000);
	
	$.getJSON("login/php/title-contents.json", function(data) 
	{
		retrivedValue1 = data;
		$("#videoTitle").text(retrivedValue1);
	});
	
	$.getJSON("login/php/games-contents.json", function(data) 
	{
		retrivedValue2 = data;
		$("#gameName").text(retrivedValue2);
		
		if (retrivedValue2 == "CS - Global Offensive")
		{
			$(".gameImg").attr("src","img/cs.jpg");
		}
		if (retrivedValue2 == "H1Z1: Just Survive")
		{
			$(".gameImg").attr("src","img/h1z1.jpg");
		}
		if (retrivedValue2 == "Euro Truck Simulator 2")
		{
			$(".gameImg").attr("src","img/ets2.png");
		}
		if (retrivedValue2 == "Rust")
		{
			$(".gameImg").attr("src","img/rust.png");
		}
		if (retrivedValue2 == "Minecraft")
		{
			$(".gameImg").attr("src","img/minecraft.png");
		}
		if (retrivedValue2 == "Battlefield 3")
		{
			$(".gameImg").attr("src","img/b3.png");
		}
	});
});
