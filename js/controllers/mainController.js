var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService){

$scope.test = "what what";

$scope.postData = function(){
  var question = {};
  question.text = $scope.question;
  question.status = 'red';
  parseService.postQuestion(question);
  $scope.question = "";
  $scope.getParseData();
}

$scope.getParseData = function(){
  parseService.getData().then(function(data){
  	$scope.questions = data.data.results;
  	console.log($scope.questions);
  })
}

$scope.changeStatus = function(key){
	key.status = 'yellow';
	parseService.updateData(key).then(function(){
		$scope.getParseData();
	})
};

$scope.deleteData = function(key){
	parseService.deleteData(key).then(function(){
		$scope.getParseData();
	})
}

$scope.getParseData();

})