/**
 * @ngdoc function
 * @name ngtimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngtimeApp
 */
angular.module('ngtimeApp').controller('MainCtrl',['$scope','boutsRequest', function($scope, boutsRequest) {
    'use strict';

	boutsRequest.list();

	boutsRequest.show('1');
	boutsRequest.create({
		course: 'asd'
	}).then(function () {
		
	});
}]);