angular.module('myApp', ['ui.router'])

      .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider

               .state('home', {
                 url: '/',
                 templateUrl: '../view/homeTempl.html',
                 controller: 'homeCtrl',
                 controllerAs: 'vm'
               })
               .state('signUp', {
                 url: '/signUp',
                 templateUrl: '../view/signUpTempl.html',
                 controller: 'signUpCtrl',
                 controllerAs: 'vm'
               })
               .state('details', {
                 url: '/details',
                 templateUrl: '../view/detailsTempl.html',
                 controller: 'detailsCtrl',
                 controllerAs: 'vm'
               })

               $urlRouterProvider
                   .otherwise('/');

            })
