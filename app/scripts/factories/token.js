angular.module('ngtimeApp').factory('tokenInterceptor', ['$window', function ($window) {
	return {
		request: function(config) {
			config.headers.Authorization = 'Bearer '+$window.sessionStorage.getItem('login_token');
			return config;
		}
	};
}])