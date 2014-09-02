'use strict';

/**
 * @ngdoc function
 * @name ngtimeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngtimeApp
 */
angular.module('ngtimeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
