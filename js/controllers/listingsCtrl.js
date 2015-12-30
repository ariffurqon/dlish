myApp.controller('listingsCtrl', 
	['$scope', 
	'$rootScope', 
	'$firebaseAuth', 
	'$firebaseArray', 
	'FIREBASE_URL', 
	function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	auth.$onAuth(function(authUser){
		if (authUser) {
			var listingsRef = new Firebase(FIREBASE_URL + 'users/' + 
				$rootScope.currentUser.$id + '/listings');
			var listingsInfo = $firebaseArray(listingsRef);

			$scope.addListing = function() {
				listingsInfo.$add({
					name: $scope.listingname,
					date: Firebase.ServerValue.TIMESTAMP
				}).then (function() {
					$scope.listingname = '';
				}); 
			}; // add listing
		} // user authenticated
	});
}]); // controller
