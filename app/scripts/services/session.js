'use strict';

/**
 * @ngdoc service
 * @name gradusMatrixUiSpikeApp.Authentication
 * @description
 * # Authentication
 * Service in the gradusMatrixUiSpikeApp.
 */
angular.module('gradusMatrixUiSpikeApp')
    .service('SessionService', function () {
        this.token = null;

        this.saveToken = function (newToken) {
            this.token = newToken;
        };

        this.clearSession = function() {
            this.token = null;
        };
    });
