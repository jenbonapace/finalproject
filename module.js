var app = angular.module("Mod", ['ngRoute']);
// //config goes here.
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // make sure this is linked properly
        .when("/Home", {
            templateUrl: "htmlfiles/hartplaza.html"
        })
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
        .when("/resume", {
            controller: "controller1",
            templateUrl: "htmlfiles/resume.html"
        })

        .otherwise({
            redirectTo: "/Home"
        });
    $locationProvider.hashPrefix("")
});
