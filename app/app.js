(function (){
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('homebudget', [
      'ngRoute',
      'ngAnimate',
      'ui.bootstrap',
      'homebudget.static',
      'homebudget.view2',
      'homebudget.components'])
    .config(config);

  config.$inject = ['$locationProvider', '$routeProvider'];

  function config ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/main'});
  }
})();
