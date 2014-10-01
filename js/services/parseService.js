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
};

this.getData = function(){
  return $http({
    method: 'GET',
    url: 'https://api.parse.com/1/classes/queue'
  })
};

this.updateData = function(question){
  return $http({
    method: 'PUT',
    data: question,
    url: 'https://api.parse.com/1/classes/queue/' + question.objectId
  })
};

this.deleteData = function(question){
  return $http({
    method: 'DELETE',
    data: question,
    url: 'https://api.parse.com/1/classes/queue/' + question.objectId
  })
}

});