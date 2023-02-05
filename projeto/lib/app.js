//                               [DEPENDENCIA PARA O NG-ROUTE, ADICIONANDO UM OUTRO MODULE QUE GUARDA UM CONTROLLER QUE EXISTE NO SISTEMA]
var app = angular.module("myApp",['ngRoute','myControllers']);

app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"paginas/pesquisas.html",
            controller:"SearchController"
        })
        .when('/details',{
            templateUrl:"paginas/detalhe.html",
            controller:"DetailsController"
        })
}])
