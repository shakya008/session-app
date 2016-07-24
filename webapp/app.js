;(function(){
	angular.module("chatApp", ['ngRoute']).
	config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
		$routeProvider.when('/', {
			templateUrl : '/tpls/home.html'
		})
		.when('/user', {
			controller : 'UsersCtrl',
			controllerAs : 'Users',
			templateUrl : '/tpls/users.html'
		})
		.when('/login', {
			controller: "LoginCtrl",
			controllerAs: "Login",
			templateUrl: "/tpls/login.html"
		})
		.when('/register', {
			controller: "RegistrationCtrl",
			controllerAs: "RegCtrl",
			templateUrl: "/tpls/register.html"
		});
		$locationProvider.html5Mode({
			requireBase: false
		});
	}]);

})();