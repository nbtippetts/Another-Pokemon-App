angular.module('myApp').service('myService', function($http, $q){

    var pokeList;


    this.getPokemon = function(){

    var deferredMaster =  $q.defer();

       $http({
        method: "GET",
        url: "http://pokeapi.co/api/v2/pokedex/2/",
        cache: 'true'
      }).then(function(response) {
        var pokemon = response.data.pokemon_entries.splice(0, 3);

        console.log('obj array', pokemon)

        var promises = [];

        pokemon.forEach(function(pokemon) {
          console.log("pokemon", pokemon)

          var deferred = $q.defer();
          var modifiedPokemon = {
            name: pokemon.pokemon_species.name,
            id: pokemon.entry_number
          }

          getImage.call(pokemon).then(function(response) {

            modifiedPokemon.image = response.data.sprites.front_default;

            console.log("modifiedPokemon", modifiedPokemon)


          deferred.resolve(modifiedPokemon);

        })

        promises.push(deferred.promise);
      })

        var responses = $q.all(promises);
        deferredMaster.resolve(responses);
      })

      getPokemonArray(deferredMaster.promise)

      return deferredMaster.promise;
    }



  function getPokemonArray(promise) {
    promise.then(function (response) {
      pokeList = response;
    });
  };



  function getImage (name) {
    var deferred = $q.defer();
    // console.log("this is this", this)
    $http({
      method: 'GET',
      url: "http://pokeapi.co/api/v2/pokemon-form/" + this.pokemon_species.name
    }).then(function(response) {
      // console.log("this is response", response)
      deferred.resolve(response)
    })
    return deferred.promise;
  }



  this.findById = function(id){
    for (var i = 0; i < pokeList.length; i++) {
      if (pokeList[i].id == id){
        return pokeList[i];
      }
    }
    console.log('this is pokeList', pokeList);
  }


})
