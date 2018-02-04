(function() {
    'use strict';

    angular
        .module('homebudget.view2', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider'];

    /* @ngInject */
    function config($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'static/view2/view2.html',
        controller: 'View2Controller'
      });
    }
})();
