var home_app = angular.module("homeApp",['ui.bootstrap']);
home_app.controller('homeController',function($scope, $http, $modal){
	$scope.isLogShown = false;
	$scope.custInfo = {};
	$scope.update = false;
	
	$http.get('/home').success(function(response){
		$scope.nameList = response;
		$scope.isLogShown = true;
		console.log(response);
	});
	
	$scope.loadData = function(){
		$scope.custInfo = {};
		$scope.update = false;
		$http.get('/home').success(function(response){
			$scope.nameList = response;
			$scope.isLogShown = true;
			console.log(response);
		});
	};
	
	$scope.initAddEditCustomer = function(param){
		if(param == undefined){
			console.log("Add");
			$scope.custInfo = {};
			$scope.update = false;
		} else {
			console.log("Edit");
			console.log(param);
			$scope.custInfo = angular.copy(param);
			console.log($scope.custInfo);
			$scope.update = true;
		}
	};
	
	$scope.addCustomer = function(){
		console.log($scope.custInfo);
		$http.post('/addCustomer', $scope.custInfo).success(function(response){
			if(response === "SUCCESS"){
				console.log("Success");
			} else {
				console.log("Error");
			}
			angular.element('#addEditModal').modal('hide');
			$scope.loadData();
		});
	};
	
	$scope.updateCustomer = function(){
		console.log($scope.custInfo);
		$http.post('/updateCustomer', $scope.custInfo).success(function(response){
			if(response === "SUCCESS"){
				console.log("Success");
			} else {
				console.log("Error");
			}
			angular.element('#addEditModal').modal('hide');
			$scope.loadData();
		});
	};
	
	$scope.deleteCustomer = function(){
		$http.post('/deleteCustomer', $scope.custInfo).success(function(response){
			if(response === "SUCCESS"){
				console.log("Success");
			} else {
				console.log("Error");
			}
			angular.element('#deleteModal').modal('hide');
			$scope.loadData();
		});
	}
});