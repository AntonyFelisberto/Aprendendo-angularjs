var app = angular.module("myApp",[]);

//app.controller("myController",function($scope,$http){ FUNÇÃO TRADICIONAL
app.controller("myController",["$scope","$http",function($scope,$http){
    $http.get('js/data.json').then(function(response){
        $scope.artistas = response.data;
        $scope.artistasOrdenacao = 'name';
    })
}])
