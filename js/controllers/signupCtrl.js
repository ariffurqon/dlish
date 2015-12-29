myApp.controller('signupCtrl', ['$scope', function($scope) {
	$scope.login = function() {
		$scope.message = "Welcome" + $scope.user.email;
	}
}]);

