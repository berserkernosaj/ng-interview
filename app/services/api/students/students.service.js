(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */
		 this.getStudents = function(){
			 return $http({
			 	method: "GET",
			 	url: 'http://il-resume-api.azurewebsites.net/api/students'
			}).then(function success(res){
			 	if (res.status !== 200){
					res = "try again";
					return res;
			 	}else if (res.data[1].FirstName) {
			 		return res.data;
			 	}else{
					console.log(1);
					res = "try again";
					return res;
			 	}
			}, function failure(err){
				console.log(2);
				err = "try again";
				return err;
			}
		)
		 }; // This function serves no purpose. It's just here as an example.


		this.getName = function(){
		}; // This function serves no purpose. It's just here as an example.

		/**
		 * Implementations
		 */

		function getName() {
			return 'StudentsService';
		}
	}
})();
