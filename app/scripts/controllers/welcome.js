'use strict';

/**
 * @ngdoc function
 * @name gradusMatrixUiSpikeApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the gradusMatrixUiSpikeApp
 */
angular.module('gradusMatrixUiSpikeApp')
    .controller('WelcomeController', ['$http', '$location', 'RouteService', function ($http, $location, RouteService) {
        var welcome = this;
        welcome.privateContent = null;

        var loadPrivateContent = function () {
            $http.get(RouteService.getPath('/welcome.json'))
                .success(function (data) {
                    welcome.privateContent = data.text;
                })
                .error(function () {
                    $location.path('/login');
                    alert("You are not authorized to view this content");
                });
        };

        loadPrivateContent();
    }]);
