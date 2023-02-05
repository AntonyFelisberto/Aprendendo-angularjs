var myControllers = angular.module('myControllers',[])

//myControllers.controller("myController",function($scope,$http){ FUNÇÃO TRADICIONAL
myControllers.controller("SearchController",["$scope","$http",function MyController($scope,$http){
    $http.get('js/data.json').then(function(response){
        $scope.artistas = response.data;
        $scope.artistasOrdenacao = 'name';
    })
}])

myControllers.controller("DetailsController",["$scope","$http",function MyController($scope,$http){
    $http.get('js/data.json').then(function(response){
        $scope.artistas = response.data;
        $scope.whichItem = 0;
    })
}])