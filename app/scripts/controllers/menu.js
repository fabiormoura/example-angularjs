'use strict';

/**
 * @ngdoc function
 * @name gradusMatrixUiSpikeApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the gradusMatrixUiSpikeApp
 */
angular.module('gradusMatrixUiSpikeApp')
  .controller('MenuController', ['$location', 'SessionService', function ($location, SessionService) {
        this.isAuthorized = function() {
            return SessionService.token != null;
        };

        this.doLogout = function() {
            SessionService.clearSession();
            $location.path('/');
        };

        this.isOnPage = function(page) {
            return $location.path() === page;
        };
  }]);
