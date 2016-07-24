(function(){
angular.module('chatApp')
.controller('LoginCtrl', ['$scope', '$http', function($scope, $http){
	this.name = "Shyam Singh";
	var that = this;
	this.password = "";
	this.email = "";
	this.loginUser = function(){
		$http.post("/rest/api/login", {email:this.email, password:this.password}, function(response){
			console.log("response");
		}, function(error){
			console.log(error);
		})
	}
}]);
})();