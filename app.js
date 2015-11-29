var app = angular.module('rodney', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        //homepage
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

    //
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);


app.controller('MainCtrl', function () {});