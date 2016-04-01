var app = angular.module('myApp', []);

app.controller('myController', function($scope) {

    $scope.score = 0;
    $scope.score2 = 0;
    $scope.addScore = function() {
        $scope.score++;
    };
    $scope.addScore2 = function() {
        $scope.score2++;
    };

    //var colorSwitch = function() {
    //    if($scope.score >)
    //}
});
