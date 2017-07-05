
function RetrieveFromLocalStorage() 
{
        var retrivedValue1 = 'None';
		var retrivedValue2 = 'None';
		
        var retrivedValue1 = localStorage.getItem('LocalStorageKey1', retrivedValue1);
		var retrivedValue2 = localStorage.getItem('LocalStorageKey2', retrivedValue2);
		
        $("#videoTitle").text(retrivedValue1);
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
}
	
$(document).ready(function() 
{ 
	RetrieveFromLocalStorage();
	
	var token = '';
	var pinger = setInterval(function ()
	{
		$.ajax({
			cache: false,
			data: {
				token: token,
			},
		  
		timeout: 2500,
		type: 'GET',
		url: 'php/pinger.php',
		dataType: 'json',
		success: function (data, status, jqXHR){
			$('#userCount').text(data.userCount);
			token = data.token;
		}
    });
  }, 5000);
 });