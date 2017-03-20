var app=angular.module("Mod", ['ng-route']);
//
//
// //config goes here.
app.config(function($routeProvider,$locationProvider){
$routeProvider
/.when( "/aboutME", {
// controller:"controller1",
// templateUrl:"aboutME.html"
//   })

//
 .when("/travel", {
  controller: "controller1",
 templateUrl:"travel.html"
})
// .when("/", {
//   controller: "",
//   templateUrl:".html"
// })
// .when("/", {
//   controller: "",
//   templateUrl:".html"
// })
.otherwise({redirectTo: "/"});
$locationProvider.hashPrefix("");
});
