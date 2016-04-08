'use strict';

controllers.controller('LoginController', ['$scope', '$modal', 'AuthService', '$location', '$log', '$timeout', function ($scope, $modal,  AuthService, $location, $log, $timeout) {
    $log.info("LoginController invoked.");
    $scope.loginInput = "";
    $scope.passwordInput = "";
    $scope.login = function () {
        var loginData = {};
        loginData.userName = $scope.loginInput;
        loginData.password = $scope.passwordInput;
        if (traviss && traviss.config && traviss.config.urlConstants) {
            if (AuthService.login(traviss.config.urlConstants.authUrl, loginData)) {
            };
        }
        $timeout(function() {
        angular.element(loginLink).trigger("click");
        });
    };


    /**
     * This method is used to navigate to the simulator screen.
     */
    $scope.redirectToSimulator = function(){
        $location.path("/simulator");
    };
    
    /**
     * This method is used to reset the simulation lock.
     * TODO move this out of loginCtrl.js
     */
 /*   $scope.resetSimulationLock = function(){
        SimulatorService.resetSimulationLock(traviss.config.urlConstants.resetSimulationLockUrl).then(function(data){
            if(angular.isDefined(data)){
            	if(angular.isDefined(data.status)){
				ngToasterService.toastMsg(traviss.config.constants.strSuccess,data.message);
                }
            }
        });
    };*/
    
  /*  $scope.isResetLinkVisible = function (){
    	if($scope.loginInput == traviss.config.constants.admin){
    		return true;
    	}else{
    		return false;
    	}
    };*/

}]);
