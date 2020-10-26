(function(){
  'use strict';
angular.module('LunchCheck',[])
  .controller('LunchCheckController',myFun);
//inject  to protect the code from minification
   myFun.$inject=['$scope'];
  function myFun($scope)
  {
	$scope.statement = '';
	$scope.items= '';
    $scope.qty = '';
    $scope.qtyCheck= function (){
		
		if($scope.items.length==0){
			$scope.statement="Please enter data first!";
			$scope.qty=0;
		}
		else{
		var lunchItems = $scope.items.split(",");
		    if(lunchItems.length < 4){
			 $scope.statement="Enjoy!"		
			}
			else if(lunchItems.length > 3){
			 $scope.statement="Too much!"		
			}
			$scope.qty=lunchItems.length;
		}
		
		
	};	
  }
   

  })(); 