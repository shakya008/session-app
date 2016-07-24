(function(){
angular.module('chatApp')
.controller('LoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	this.name = "Shyam Singh";
	var that = this;
	this.password = "";
	this.email = "";
	this.loginUser = function(){
		$http.post("/rest/api/login", {email:this.email, passwd:this.password})
		.then(function(response){
			console.log(response);
			if(response.data.success){

			}
		}, function(error){
			console.log(error);
		})
	}

	this.checkSession = function(){
		$http.get("/rest/api/isActive")
		.then(function(res){
			if(res.data.isActive){
				console.log(res);
				$location.path("/");
			}
		})
	}
	this.checkSession();
}]);
})();