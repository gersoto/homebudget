(function() {
    'use strict';

    angular
        .module('homebudget.static.main')
        .controller('MainViewController', MainViewController);

    MainViewController.$inject = [];

    /* @ngInject */
    function MainViewController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
