angular.module('myApp').controller('pokemonDetailsCtrl', function($scope, $stateParams, myService){


         $scope.pokemon = myService.findById($stateParams.id);
})
