myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', '$location', function($rootScope, $firebaseAuth, FIREBASE_URL, $location) {
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref)

	return {
		login: function(user) {
			auth.$authWithPassword({
				email: user.email,
				password: user.password
			}).then(function(regUser){
				$location.path('/success');
			}).catch(function(error){
			$rootScope.message = error.message;
			});
		}, //login

		signup: function(user) {
				auth.$createUser({
					email: user.email,
					password: user.password
				}).then(function(regUser) {

					var regRef = new Firebase(FIREBASE_URL +'users')
					.child(regUser.uid).set({ //add to the firebase db
						date: Firebase.ServerValue.TIMESTAMP,
						regUser: regUser.uid,
						firstname: user.firstname,
						lastname: user.lastname,
						email: user.email
					}); // user info

					$rootScope.message = "Welcome " + user.firstname + ", Thank you for signing up!";
				}).catch(function(error) {
					$rootScope.message = error.message;
				}); //createUser
		} 	//sign up
	};
}]); // factory