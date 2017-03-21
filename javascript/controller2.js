var app = angular.module("Mod", ['ngRoute']);
//
app.controller("controller2", function(
  $.get({
url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRgU3HN4hiy6vm3cNr0lOZSHIJOH-E1xE&callback=initMap",
data: {
 name: "Google map",
api_key: "AIzaSyBRgU3HN4hiy6vm3cNr0lOZSHIJOH-E1xE"
} });

function(responseBody) {
  console.log(responseBody);
 });
//yelp api
// app.controller("controller2", function(
//   $.get({
//     url:"https://api.yelp.com/v3/businesses/search"
//     data:{
//       name:"",
//       api_key:""
//       term:
//       location:
//       latitude:
//       longititude:
//
//
//     }}));
//
//
//





  })
))
