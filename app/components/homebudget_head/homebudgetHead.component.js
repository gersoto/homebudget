(function() {
    'use strict';

    angular
        .module('homebudget.components.homebudgetHead',[])
        .component('homebudgetHead', homebudgetHead());

    /* @ngInject */
    function homebudgetHead() {
        var component = {
            templateUrl: 'components/homebudget_head/homebudgetHead.template.html',
            controller: homebudgetHeadCtrl,
        };

        return component;
    }

    homebudgetHeadCtrl.$inject = [];

    /* @ngInject */
    function homebudgetHeadCtrl() {

    }
})();
