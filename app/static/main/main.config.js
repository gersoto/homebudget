(function () {
  'use strict';

  angular
    .module('homebudget.static.main', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'static/main/main.html',
        controller: 'MainViewController'
      });
  }
})()
