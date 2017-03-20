
app.controller("controller2", function(
  $.get({
url: "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap",
data: {
 name: "Google map",
api_key: "AIzaSyBRgU3HN4hiy6vm3cNr0lOZSHIJOH-E1xE"
} });

function(responseBody) {
  console.log(responseBody);
 });
