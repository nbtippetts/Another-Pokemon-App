angular.module('myApp').controller('signUpCtrl', function($scope, $stateParams, myService){

      $scope.test = myService.getPokemon();
})
