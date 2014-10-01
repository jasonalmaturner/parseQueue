var app = angular.module('parseQ');

app.service('parseService', function($http){

  this.postQuestion = function(question){
    return $http({
	  method: 'POST',
	  data: question,
	  url: 'https://api.parse.com/1/classes/queue'
	  })/*.then(function(data){
	    deferred.resolve(data.data.results);
	    });*/
	}

})