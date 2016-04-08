

/*angular.module('Authentication', []);
angular.module('Home', []);*/

var mainApp = angular.module("ermsApp", [   
  'ermsApp.controllers', // custom controllers
  'ermsApp.services', // custom services
  'ngRoute',
  'Authentication',
   'Home' 
]);

var controllers = angular.module('ermsApp.controllers', []);
var services = angular.module('ermsApp.services', []);

mainApp.config([ '$routeProvider', function($routeProvider) {
	  $routeProvider
      .when('/login', {
          controller: 'LoginController',
          templateUrl: 'views/login.html',
          hideMenus: true
      })
      .when('/', {
          controller: 'HomeController',
          templateUrl: 'views/home.html'
      })
      .otherwise({ 
    	  redirectTo: '/'
    	});

}]);
