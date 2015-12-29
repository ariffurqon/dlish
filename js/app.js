var myApp = angular.module('dlish', ['ngRoute', 'firebase'])
	.constant('FIREBASE_URL', 'https://dlish.firebaseIO.com/');

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
			controller: 'successCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		})
}]);

