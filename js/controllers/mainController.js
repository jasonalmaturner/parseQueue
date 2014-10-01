var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService){
  $scope.test = "what what";

  $scope.postData = function(){
  	var question = {};
  	question.text = $scope.question;
  	parseService.postQuestion(question);
  	$scope.question = "";
  }

})