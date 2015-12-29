myApp.controller('signupCtrl', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.login = function() {
		Authentication.login($scope.user);
	}; // login

	$scope.signup = function() {
		Authentication.signup($scope.user);
	}; //signup
}]); // controller

