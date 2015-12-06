var app = angular.module('learningTechApp', [
    'ngRoute'
]);

app.config(function ($routeProvider) {

    $routeProvider.when("/greedy", {
        controller: "greedyController",
        templateUrl: "app/views/greedy.html"
    });

    $routeProvider.when("/minmax/:depth", {
        controller: "minmaxController",
        templateUrl: "app/views/minmax.html"
    });

    $routeProvider.when("/alphabeta", {
        controller: "alphabetaController",
        templateUrl: "app/views/alphabeta.html"
    });

    $routeProvider.when("/game", {
        controller: "",
        templateUrl: "app/views/game.html"
    });

});

//define all the configuration constants. 
app.constant('CONFIG', {
})


