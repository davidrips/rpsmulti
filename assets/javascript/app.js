


var playerData = new Firebase("https://dr503.firebaseio.com/");


$('#nameSubmit').on('click', function(){

	var playerName = $('#nameInput').val().trim();
	console.log(playerName);
	var playerStat = {

		name: playerName,
		wins: 0,
		losses: 0,

		
	};

	playerData.push(playerStat);





})