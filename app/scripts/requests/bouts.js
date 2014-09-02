angular.module('ngtimeApp').factory('boutsRequest', ['$http', 'config', function ($http, config) {
	return {
		list: function() {
			$http.get(config.server.base+'/bouts')
			.then(function(response) {
				return response.data;
			})
		}
	};
}])