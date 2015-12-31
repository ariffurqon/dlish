myApp.controller('checkinsCtrl', 
	['$scope', 
	'$rootScope', 
	'$firebaseObject',
	'$firebaseArray',
	'$routeParams',
	'FIREBASE_URL',
	'$location',
	function($scope, $rootScope, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL, $location) {

	$scope.whichlisting = $routeParams.lId;
	$scope.whichuser = $routeParams.uId;

	var ref = new Firebase(FIREBASE_URL + 'users/' + 
		$scope.whichuser + '/listings/' +
		$scope.whichlisting + '/checkins/');

	var checkinsList = $firebaseArray(ref);
	$scope.checkins = checkinsList;

	$scope.order = "name";
	$scope.direction = null;
	$scope.query = '';
	$scope.recordId = '';

	$scope.addCheckin = function() {
		var checkinsInfo = $firebaseArray(ref);
		var myData = {
			place: $scope.user.place,
			activity: $scope.user.activity,
			contact: $scope.user.contact,
			date: Firebase.ServerValue.TIMESTAMP
		}; //myData
	checkinsInfo.$add(myData).then(function() {
		$location.path('#/checkins' + $scope.whichuser + '/' + $scope.whichlisting + '/checkinsList');
		}); // send data to firebase
	}; // addCheckin

	$scope.deleteCheckin = function(id) {
 		var refDel = new Firebase(FIREBASE_URL + 'users/' +
 			$scope.whichuser + '/listings/' +
 			$scope.whichlisting + '/checkins/' + id);
 		var record = $firebaseObject(refDel);
 		record.$remove(id);
 	};

 	$scope.pickRandom = function() {
 	 		var whichRecord = Math.round(Math.random() * (checkinsList.length - 1));
 	 		$scope.recordId = checkinsList.$keyAt(whichRecord);
 	 	}; // pick a winner

 }]); // controller



