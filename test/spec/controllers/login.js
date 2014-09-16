'use strict';

describe('Controller: LoginController', function () {

  // load the controller's module
  beforeEach(module('gradusMatrixUiSpikeApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginCtrl.user).toBe(LoginCtrl.user);
  });
});
