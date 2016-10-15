angular.module('myApp').service('myService', function($http, $q){

          this.getPokemon = function(){

          var deferredMaster =  $q.defer();

             $http({
              method: "GET",
              url: "http://pokeapi.co/api/v2/pokedex/2/",
              cache: 'true'
            }).then(function(response) {
              var pokemon = response.data.pokemon_entries.splice(11, 152);
              var promises = [];

              pokemon.forEach(function(pokemon) {
                var deferred = $q.defer();
                var modifiedPokemon = {
                  name: pokemon.name
                }

                getImage.call(pokemon).then(function(response) {
                  modifiedPokemon.image = response;
                })
                console.log("XXXthis is pokemon", pokemon)

              })
              deferredMaster.resolve()
            })
            return deferredMaster.promise;
        }

        function getImage (name) {
          var deferred = $q.defer();
          console.log("this is this", this.name)
          $http({
            method: 'GET',
            url: "http://pokeapi.co/api/v2/pokemon-form/" + this.name
          }).then(function(response) {
            console.log("this is response", response)
            deferred.resolve(response)
          })
          return deferred.promise;
        }



})
