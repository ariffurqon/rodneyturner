/**
 * Main AngularJS Web Application
 */
var app = angular.module('rodney', ['ngRoute', 'ui.bootstrap']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {
      templateUrl: "partials/who.html", 
      controller: "PageCtrl"})
    // Pages
    .when("/what", {
      templateUrl: "partials/what.html", 
      controller: "PageCtrl"})
    .when("/where", {
      templateUrl: "partials/where.html", 
      controller: "PageCtrl"})
    .when("/contact", {
      templateUrl: "partials/contact.html", 
      controller: "PageCtrl"})
    .otherwise({
      redirectTo: '/'
    });

    //remove the hash and make pretty URLs
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

app.controller('PageCtrl', function ($scope, $location, $http) {
  console.log("Page Controller is working, darling!");

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});