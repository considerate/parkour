'use strict';

/**
 * @ngdoc overview
 * @name ngtimeApp
 * @description
 * # ngtimeApp
 *
 * Main module of the application.
 */
angular
  .module('ngtimeApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/bouts/list.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/success', {
        templateUrl: 'views/success.html',
        controller: 'SuccessCtrl'
      })
      .when('/bouts/new', {
        templateUrl: 'views/bouts/new.html',
        controller: 'CreateBoutCtrl'
      })
      .when('/bouts/:bout', {
        templateUrl: 'views/bouts/show.html',
        controller: 'ShowBoutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

      $httpProvider.interceptors.push('tokenInterceptor');
  });
