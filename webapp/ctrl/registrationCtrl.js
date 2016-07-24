(function(){
angular.module('chatApp')
.controller('RegistrationCtrl', ['$scope', "$http", function($scope, $http){
    this.name = "Shyam Singh";
    var that = this;
    this.regDetails = {
    	"email" : "",
    	"f_name" : "",
    	"l_name": "",
    	"password": "",
        "c_passwd": ""
    }
    this.registerUser = function(){
    	$http.post("/rest/api/register", this.regDetails)
        .then(function(response){
            console.log(response);
        },function(error){
            console.log(error);
        })
    }

}]);
})();