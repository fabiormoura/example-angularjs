'use strict';


/**
 * @ngdoc function
 * @name gradusMatrixUiSpikeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gradusMatrixUiSpikeApp
 */


angular.module('gradusMatrixUiSpikeApp')
    .controller('LoginController', ['$http', '$location', 'SessionService', function ($http, $location, SessionService) {
        var login = this;
        login.user = {};
        login.errors = {};
        login.signIn = function() {
            $http.post('http://localhost:4567/authenticate.json', this.user).success(function(data) {
                if(data.authenticated) {
                    SessionService.saveToken(data.token);
                    $location.path('/welcome');
                } else {
                    login.errors = data.errors;
                }
            }).error(function(data) {

            });
        };

    }]);