myApp.controller('checkinsCtrl', 
	['$scope', 
	'$rootScope', 
	'$firebaseObject',
	'$firebaseArray',
	'$routeParams',
	'FIREBASE_URL',
	function($scope, $rootScope, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL) {

	$scope.whichlisting = $routeParams.lId;
	$scope.whichuser = $routeParams.uId;

	var ref = new Firebase(FIREBASE_URL + 'users/' + 
		$scope.whichuser + '/listings/' +
		$scope.whichlisting + '/checkins/');

	$scope.addCheckin = function() {
		var checkinsInfo = $firebaseArray(ref);
		var myData = {
			place: $scope.user.place,
			activity: $scope.user.activity,
			contact: $scope.user.contact,
			date: Firebase.ServerValue.TIMESTAMP
		}; //myData
	checkinsInfo.$add(myData);
	}; // addCheckin
 }]); // controller