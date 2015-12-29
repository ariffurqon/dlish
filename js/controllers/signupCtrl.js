myApp.controller('signupCtrl', ['$scope', '$firebaseAuth', 'FIREBASE_URL', function($scope, $firebaseAuth, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	$scope.login = function() {
		$scope.message = "Welcome " + $scope.user.email;
	}; // login

	$scope.signup = function() {
		auth.$createUser({
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function(regUser){
			$scope.message = "Hello " + $scope.user.firstname + ", Thanks for signing up!";
		}).catch(function(error){
			$scope.message = error.message;
		}); // createUser
	}; //signup
}]); // controller

