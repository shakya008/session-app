;(function(){
	angular.module("chatApp", ['ngRoute']).
	config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
		$routeProvider.when('/', {
			templateUrl : '/tpls/home.html'
		})
		.when('/user', {
			controller : 'UsersCtrl',
			controllerAs : 'Users',
			templateUrl : '/tpls/users.html'
		});
	}]);

})();