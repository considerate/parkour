angular.module('ngtimeApp').factory('boutsRequest', ['$http', 'config', function ($http, config) {
	'use strict';
	return {
		list: function() {
			return $http.get(config.server.base+'/bouts')
			.then(function(response) {
				return response.data;
			});
		},
		show: function(id) {
			return $http.get(config.server.base+'/bouts/'+id)
			.then(function(response) {
				return response.data;
			});
		},
		create: function(data) {
			return $http.post(config.server.base+'/bouts', data)
			.then(function(response) {
				return response.data;
			});
		},
	};
}]);