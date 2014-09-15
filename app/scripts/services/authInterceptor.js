'use strict';

/**
 * @ngdoc service
 * @name gradusMatrixUiSpikeApp.Authentication
 * @description
 * # Authentication
 * Service in the gradusMatrixUiSpikeApp.
 */
angular.module('gradusMatrixUiSpikeApp')
    .factory('authInterceptor', ["$q", "SessionService", function ($q, SessionService) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if (SessionService.token) {
                config.headers.Authorization = SessionService.token;
            }
            return config;
        },
        response: function (response) {
            if (response.status === 401) {
                // handle the case where the user is not authenticated
            }
            return response || $q.when(response);
        }
    };
}]);
