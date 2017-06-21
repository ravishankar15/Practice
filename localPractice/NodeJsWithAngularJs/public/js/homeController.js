var home_app = angular.module("homeApp",[]);
home_app.controller('homeController',function($scope, $http){
	$scope.isLogShown = false;
	$http.get('/home').success(function(response){
		console.log("HOME RESPONSE");
		$scope.nameList = response;
		$scope.isLogShown = true;
		console.log(response);
	});

});