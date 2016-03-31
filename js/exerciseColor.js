var app = angular.module('exercise', []);

app.controller('exerciseController', function($scope) {
    $scope.name = "Baby Blue";
    $scope.secondsInCentury = 60 * 60 * 24 * 365 * 100;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    $scope.rightNow = mm + '/' + dd + '/' + yyyy;

});