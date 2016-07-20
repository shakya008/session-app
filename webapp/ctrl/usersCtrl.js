(function(){
angular.module('chatApp')
.controller('UsersCtrl', ['$scope', function($scope){
    this.name = "Shyam Singh";
    var that = this;
$scope.$watch(function(){
	    return that.name;
}, function(){
    console.log(that.name);
});

}]);
})();