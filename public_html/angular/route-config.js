app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		//home route
		.when('/', {
			controller : 'homeController',
			templateUrl : 'angular/views/home.php'
		})

		//treat route
		.when('/', {
			controller : 'treatsController',
			templateUrl : 'angular/views/treats.php'
		})

		//donate route
		.when('/', {
			controller : 'donateController',
			templateUrl : 'angular/views/donate.php'
		})

		//sign up controller
		.when('/', {
			controller : 'signupController',
			templateUrl : 'angular/views/sign-up.php'
		})

		//otherwise direct to home page
		.otherwise({
			redirectTo: '/'
		});
});
