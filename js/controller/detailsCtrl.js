angular.module('myApp').controller('detailsCtrl', function($scope, $stateParams, myService){

  $scope.getPokemon = function(){
     myService.getPokemon().then(function(response){
       console.log(response)
       $scope.location = response.data;
       $scope.pokemon = response.data.pokemon_entries;
       $scope.displayPokemon = $scope.pokemon;
     })
   }


 $scope.getPokemon()


 $scope.getPokemonByName = function(name) {
   $scope.pokemon.forEach(function(pokeName) {
   //  console.log("this is poke", poke)
     //console.log("this is num", num)
     if (pokeName.pokemon_species.name == name) {
       //console.log('XXXX', poke)
       return $scope.displayPokemon = [pokeName];
     }
   })
 }

 $scope.getPokemonByEntryNumber = function(num) {
   $scope.pokemon.forEach(function(poke) {
   //  console.log("this is poke", poke)
     //console.log("this is num", num)
     if (poke.entry_number == num) {
       //console.log('XXXX', poke)
       return $scope.displayPokemon = [poke];
     }
   })
 }

 $scope.resetPokemon = function() {
   $scope.displayPokemon = $scope.pokemon;
 }


})
