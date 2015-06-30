$(document).ready(function() {
	$('#oauth').on('click', function() {
		userLogin();
	});

});

// set up some vars
var client_id = 'UE32s8vQtIc';
var app_secret = 'a66f1856fcddcdabb5b60e30645293449caf8fa2';
var url = 'https://jawbone.com/auth/oauth2/auth'
var queryString = url + '?';
// my access token:
var access_token = "Je5CDuGC9OSrDH35-Buks8QX3nWdj-87VN0IbeX8yFldQbGFjp_bFyhb4eGBopAhFXGURGLIDjlXW2MSxp0B_VECdgRlo_GULMgGZS0EumxrKbZFiOmnmAPChBPDZ5JP";
var access_token = "Je5CDuGC9OSrDH35-Buks8QX3nWdj-87VN0IbeX8yFldQbGFjp_bF9L_ezEPIFvSiLt_Im4xrMdXW2MSxp0B_VECdgRlo_GULMgGZS0EumxrKbZFiOmnmAPChBPDZ5JP";

var userLogin = function() {

	var params = {
		response_type: 'code',
		client_id: client_id,
		scope: 'move_read',
		redirect_uri: 'http://bryantee.github.io/jawboneUpAPI'
	};

	// generates query string for url redirect to get code
	// after user login to Jawbone account
	queryString += $.param(params);
	console.log(queryString);

};

var getToken = function() {
	var token_url = 'https://jawbone.com/auth/oauth2/token';
	var token_code = 'iTxs5O8ZbaFtHXoHrpAxcUTIxAhk5FiTJTVgaEZtTvAZIvFKpesOgDQ7b97G101kASfWbIWY51xp7CT9C2hu5vXgJbBeGENBqbKHdHLQYmK3BFnpMtk_v_1iHbrzUzvK8aEpsIodBkn0Zk-xweAJwYIqV30_d2dXYRWiOOErXJi2OjNRoMGxO-TyU0ebYSFdrWpar1aMjUI';

	var params = {
		client_id: client_id,
		client_secret: app_secret,
		grant_type: 'authorization_code',
		code: token_code
	};

	$.getJSON(token_url, params, function(data){
		console.log('success');
		console.log(data);
	});
};

var getSteps = function () {

	var url = 'https://jawbone.com/nudge/api/v.1.1/users/@me/moves';

	$.ajax
	({
		type: 'GET',
		url: url,
		datatype: 'json',
		async: true,
		headers: {'Authorization': 'Bearer ' + access_token,
					'Accept': 'application/json'}
	})	
	.done(function(data) {
			console.log('sent');
			console.log(data);
		});
};

