angular.module('myApp', ['ui.router'])

      .config(function ($stateProvider, $urlRouterProvider) {



      // For any unmatched url, send to /route1


          $stateProvider

               .state('home', {
                 url: '/',
                 templateUrl: './view/homeTempl.html',
                 controller: 'homeCtrl',
                 controllerAs: 'vm'
               })
               .state('signUp', {
                 url: '/signUp',
                 templateUrl: './view/signUpTempl.html',
                 controller: 'signUpCtrl',
                 controllerAs: 'vm'
               })
               .state('details', {
                 url: '/details',
                 templateUrl: './view/detailsTempl.html',
                 controller: 'detailsCtrl'
               })
               .state('pokemonDetails', {
                 url: '/pokemonDetails/:id',
                 templateUrl: './view/pokemonDetails.html',
                 controller: 'pokemonDetailsCtrl',

                 onEnter: function(){
                   console.log('details list');
                 }
              })




               $urlRouterProvider
                   .otherwise('/');

            })
