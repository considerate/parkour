angular.module('ngtimeApp').controller('LoginCtrl', function($scope, $http, $window, config) {
	'use strict';
    $scope.loggedIn = false;

    $scope.login = function() {
        $window.location.replace(config.server.base + '/login/kth?url=' + config.client.base + '/#success');
    };
});