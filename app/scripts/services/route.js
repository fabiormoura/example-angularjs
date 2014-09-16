'use strict';

/**
 * @ngdoc service
 * @name gradusMatrixUiSpikeApp.route
 * @description
 * # route
 * Constant in the gradusMatrixUiSpikeApp.
 */
angular.module('gradusMatrixUiSpikeApp')
    .provider('RouteService', [function () {
        var basePath = null;

        this.setBasePath = function (path) {
            basePath = path;
        };

        this.$get = function () {
            return {
                getPath: function (route) {
                    return basePath + route;
                }
            };
        };
    }]);
