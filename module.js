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
        .when("/templategrid", {
            controller: "controller1",
            templateUrl: "htmlfiles/templategrid.html"
        })
        .when("/quotes", {
            controller: "controller2",
            templateUrl: "htmlfiles/quotes.html"
        })

        .otherwise({
            redirectTo: "/"
        });
    $locationProvider.hashPrefix("")
});
