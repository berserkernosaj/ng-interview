(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['$scope', 'StudentsService'];
	function StudentsController($scope, StudentsService) {

		/**
		 * Model
		 */

		var vm = this;

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */

		function activate() {
			// Initialization code goes here
			$scope.details = [];
			$scope.detailToggle = function($index){
				if ($scope.details[$index] !== true){
					$scope.details[$index] = true;
				}else{
					$scope.details[$index] = false;
				}
			}
			$scope.getStudents = function(){
				StudentsService.getStudents().then(function(res){
					if (res === "try again"){
						$scope.getStudents();
					}
					console.log(res);
					$scope.students = res;
				});
			}
			$scope.getStudents();
		}
	}
})();
