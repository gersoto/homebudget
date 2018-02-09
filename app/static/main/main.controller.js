(function() {
    'use strict';

    angular
        .module('homebudget.static.main')
        .controller('MainViewController', MainViewController);

    MainViewController.$inject = [];

    /* @ngInject */
    function MainViewController() {
        var vm = this;
        vm.parseContent = parseContent;


        activate();


        /////
        /////

        function activate() {
          vm.content = "---";
        }

        function parseContent(content) {
          vm.content = content;
        }
    }
})();
