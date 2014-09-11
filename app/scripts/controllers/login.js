'use strict';


/**
 * @ngdoc function
 * @name gradusMatrixUiSpikeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gradusMatrixUiSpikeApp
 */


angular.module('gradusMatrixUiSpikeApp')
    .controller('LoginController', function ($http, $location) {
        var login = this;
        login.user = {};
        login.errors = {};
        login.signIn = function() {
            $http.post('http://localhost:4567/authenticate.json', this.user).success(function(data) {
                if(data.authenticated) {
                    $location.path('/welcome');
                } else {
                    login.errors = data.errors;
                    if(!data.errors) {
                        alert("User is invalid")
                    }
                }
            }).error(function(data) {
            });
        };

    });