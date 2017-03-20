var app = angular.module("Mod", ['ngRoute']);
// //config goes here.
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/aboutME', {
            controller: 'controller1',
            templateUrl: 'htmlfiles/aboutME.html'
        })
        .when("/travel", {
            controller: "controller1",
            templateUrl: "htmlfiles/travel.html"
        })
        .when("/contact", {
            controller: "controller1",
            templateUrl: "htmlfiles/contact.html"
        })
        .otherwise({
            redirectTo: "/"
        });
    $locationProvider.hashPrefix("")
});
