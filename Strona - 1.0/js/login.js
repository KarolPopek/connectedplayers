var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate()
{
	var title = document.getElementById("title").value;
	var password = document.getElementById("password").value;

	if ( password == "Connectedplayers123")
	{
		SaveToLocalStorage();
		window.location = "connectedplayers.html"; // Redirecting to other page.
		return false;
	}
	else
	{
	attempt --;// Decrementing by one.
	document.getElementById("password").value = "";
	alert("You have left "+attempt+" attempt;");
	
	// Disabling fields after 3 attempts.
	if( attempt == 0)
	{
		document.getElementById("title").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
	return false;
	}
}
}

function SaveToLocalStorage()
{    
    var titleValue = $("#title").val();
	var  gameValue = $("#game").val();	
	
    localStorage.setItem('LocalStorageKey1', titleValue);
	localStorage.setItem('LocalStorageKey2', gameValue);
}