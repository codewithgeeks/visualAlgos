/*Javascript file for Insertion Sort Algorithm page*/
var curModule = angular.module('insertSort',['ngRoute']);

curModule.controller("animator",
	function($scope)
	{
		$scope.integerList = [];
		$scope.newInt = 1;
		$scope.addNewInt = 	function(newI)
							{
								$scope.integerList.push(newI);
								$scope.integerList.sort(function(a, b){return (a>b);});
							}
	}
);