var app = angular.module('rodney', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        //homepage
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'MainCtrl'
        })

        .when('/services', {
            templateUrl: 'partials/services.html',
            controller: 'MainCtrl'
        })

        .when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
            controller: 'MainCtrl'
        })

        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'MainCtrl'
        })

        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

    //remove the hash and make pretty URLs
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);


app.controller('MainCtrl', function () {});