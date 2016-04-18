

angular.module('Authentication', []);
angular.module('Home', []);

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
          controllerAs: 'vm'          
      })
      .when('/', {
          controller: 'HomeController',
          templateUrl: 'views/home.html'
      })
      .otherwise({ 
    	  redirectTo: '/login'
    	});

}]);

travissApp.run(['$rootScope', '$location', '$cookieStore', '$http',
  function ($rootScope, $location, $cookieStore, $http) {
   // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
  }]);