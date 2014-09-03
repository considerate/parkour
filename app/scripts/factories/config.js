angular.module('ngtimeApp').factory('config', [function() {
	'use strict';
	var serverInfo = {
		protocol: 'http',
		host: 'parkour.csc.kth.se',
		port: '3000',
	};
	serverInfo.base = serverInfo.protocol+'://'+serverInfo.host+':'+serverInfo.port+'/api';

	var clientInfo = {
		protocol: 'http',
		host: 'parkour.csc.kth.se',
		port: '80',		
	};

	clientInfo.base = clientInfo.protocol+'://'+clientInfo.host+':'+clientInfo.port;

	return {
		server: serverInfo,
		client: clientInfo
	};
}]);
