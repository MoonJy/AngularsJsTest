/**
 * Created by Moon on 2016-01-29.
 */
var myApp = angular.module('myApp',[]);
myApp.controller('divController',['$scope',function($scope){
    console.log('controller start');
    $scope.list = "list is list";
    $scope.lists = [{id:'kim',pw:1234},{id:'moon',pw:1234},{id:'park',pw:1234}];
    $scope.myModel = '';
}]);