angular.module('ngtimeApp').controller('SuccessCtrl', function($location, $window) {
	'use strict';
	var url = $location.absUrl();
	var query = url.split('?')[1];
	var kvreg = /([^&=]+)=([^&#]+)/g;
	var params = {};
	var match;
	while ((match = kvreg.exec(query)) !== null){
		var key = match[1];
		var val = match[2];
		params[key] = val;
	}
	var token = params.token;

	$window.sessionStorage.setItem('login_token', token);
	$window.location.replace('/')
});