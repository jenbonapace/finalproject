var app = angular.module("Mod");
//recall the mod which is our container.
app.controller("controller1", function() {
  function initMap() {
    var detroit = {lat: 42.336049, lng: -83.049805};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: detroit
    });
    var marker = new google.maps.Marker({
      position: detroit,
      map: map
    });
    var marker = new google.maps.Marker({
      position: Rome,Italy,
      map: map
    });
  }
  console.log("hooray!");

  initMap();
});

//app.controller("controller1", function($scope, Factory, $location) {
//     console.log('ctrl is running');
//     //set the input onto the scope and use the functin with the prameter of form to
//     $scope.aboutME = function() {
//         console.log(aboutme);
// //intake data from the form and sett it onto the output pages
//         ourFactory.setData(aboutme);
//         $location.path("/aboutME.html");
