var app = angular.module('rodney', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        //homepage
        .when('/', {
            templateUrl: 'views/partials/home.html',
            controller: 'MainCtrl'
        })

        .when('/services', {
            templateUrl: 'views/partials/services.html',
            controller: 'MainCtrl'
        })

        .when('/portfolio', {
            templateUrl: 'views/partials/portfolio.html',
            controller: 'MainCtrl'
        })

        .when('/about', {
            templateUrl: 'views/partials/about.html',
            controller: 'MainCtrl'
        })

        .when('/contact', {
            templateUrl: 'views/partials/contact.html',
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

