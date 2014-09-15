'use strict';

/**
 * @ngdoc overview
 * @name gradusMatrixUiSpikeApp
 * @description
 * # gradusMatrixUiSpikeApp
 *
 * Main module of the application.
 */
angular
  .module('gradusMatrixUiSpikeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;

        //Remove the header containing XMLHttpRequest used to identify ajax call
        //that would prevent CORS from working
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $httpProvider.interceptors.push('authInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController',
        controllerAs: 'welcome'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
