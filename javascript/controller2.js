var app = angular.module("Mod");
//recall the mod which is our container.
app.controller("controller2", function($scope){
$scope.emptyquote[];
$scope.quote=[
  "The only way that we can live, is if we grow. The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open.",
  'The message is to creatively embrace chaos and change',
  "The secret to getting ahead is getting started-Mark Twain",
  "When something is important enough, you do it even if the odds are not in your favor.-Elon Musk",
  "I am not afraid... I was born to do this.-Joan of Arc",
  "Nothing in the world is more common than unsuccessful people with talent.",
  "To shine your brightest light is to be who you truly are.- Roy T. Bennett",
  "Reach high, for stars lie hidden in you. Dream deep, for every dream precedes the goal",
  "Some men see things as they are and say why—I dream things that never were and say why not.-George Bernard Shaw",
  "Life is not measured by the number of breaths we take, but by the moments that take our breath away.-Maya Angelou"];

$scope.quote= function(){
    var quote={
      phrase:$scope.quote[Math.floor(Math.random()*quote.length)]
    };
    console.log(quote);
    $scope.emptyquote.push(quote);
  };
