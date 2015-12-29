var myApp = angular.module('dlish', ['ngRoute', 'firebase'])
	.constant('FIREBASE_URL', 'https://dlish.firebaseIO.com/');

myApp.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
    }); //event info
}]); //run


myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'signupCtrl'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'signupCtrl'
		})
		.when('/success', {
			templateUrl: 'views/success.html',
			controller: 'successCtrl',
			resolve: {
		        currentAuth: function(Authentication) {
		          return Authentication.requireAuth();
		        } //current Auth
		    } //resolve
		})
		.otherwise({
			redirectTo: '/login'
		})
}]);

