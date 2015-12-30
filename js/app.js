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


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'signupCtrl'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'signupCtrl'
		})
		.when('/listings', {
			templateUrl: 'views/listings.html',
			controller: 'listingsCtrl',
			resolve: {
		        currentAuth: function(Authentication) {
		          return Authentication.requireAuth();
		        } //current Auth
		    } //resolve
		})
		.otherwise({
			redirectTo: '/login'
		})

		//remove the hash and make pretty URLs
	    $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
	    });

}]);

