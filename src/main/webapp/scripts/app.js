

angular.module('Authentication', []);
angular.module('Home', []);

var ermsApp = angular.module("ermsApp", [   
  'ermsApp.controllers', // custom controllers
  'ermsApp.services', // custom services
  'ngRoute',
  'ngCookies',
  'Authentication',
   'Home' 
]);

var controllers = angular.module('ermsApp.controllers', []);
var services = angular.module('ermsApp.services', []);

ermsApp.config([ '$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	  $routeProvider
      .when('/login', {
          controller: 'LoginController',
          templateUrl: 'views/login.html',
          controllerAs: 'vm'          
      })
      /*.when('/', {
          controller: 'HomeController',
          templateUrl: 'views/home.html',
          controllerAs: 'vm' 
      })*/
      .when('/register', {
           controller: 'RegisterController',
           templateUrl: 'views/register.html',
           controllerAs: 'vm'
      })
      .otherwise({ 
    	  redirectTo: '/login'
    	});

}]);

ermsApp.run(['$rootScope', '$location', '$cookieStore', '$http',
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