const saveButton = document.querySelector("#submit");
const pressed =[];
const secretCode = 'connectedplayers123';
document.getElementById("submit").disabled = true;

window.addEventListener('keyup', (e) => 
{
		pressed.push(e.key);
		pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
		
		if(pressed.join('').includes(secretCode)) 
		{
			document.getElementById("submit").disabled = false;
		}
});

function saveToFileT(data){
  jsonString = JSON.stringify(data);
  $.ajax({
    url: 'php/saveTitle.php',
    data : {'data' :jsonString},
    type: 'POST'
  });
}

function saveToFileG(data){
  jsonString = JSON.stringify(data);
  $.ajax({
    url: 'php/saveGames.php',
    data : {'data' :jsonString},
    type: 'POST'
  });
}


saveButton.addEventListener('click', function()
{
	var titleVal = document.getElementById("title").value;
	var  gamesVal = document.getElementById("games").value;
	
	saveToFileT(titleVal);
	saveToFileG(gamesVal);
	
	window.location = "../index.html";
});
