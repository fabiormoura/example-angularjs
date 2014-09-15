'use strict';

/**
 * @ngdoc function
 * @name gradusMatrixUiSpikeApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the gradusMatrixUiSpikeApp
 */
angular.module('gradusMatrixUiSpikeApp')
  .controller('WelcomeController', ['$http', '$location', function ($http, $location) {
    var welcome = this;
    welcome.privateContent = null;

    var loadPrivateContent = function() {
        $http.get('http://localhost:4567/welcome.json')
        .success(function(data){
          welcome.privateContent = data.text;
        })
            .error(function() {
                $location.path('/login');
                alert("You are not authorized to view this content");
            });
    };

    loadPrivateContent();
  }]);
