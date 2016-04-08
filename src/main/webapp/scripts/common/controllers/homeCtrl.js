
controllers.controller('HomeCtrl',['$scope','$log',function($scope,$log){
    $scope.myInterval = 5000;
    $scope.travissVersion = "";
    var slides = $scope.slides = [{image:'images/Gantry.jpg',text: 'Gantry'},{image:'images/Toll.jpg',text:'Toll Point'}];   
   
}]);
