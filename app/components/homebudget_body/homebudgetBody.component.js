(function() {
    'use strict';

    angular
        .module('homebudget.components.homebudgetBody',[])
        .component('homebudgetBody', homebudgetBody());

    /* @ngInject */
    function homebudgetBody() {
        var component = {
            templateUrl: 'components/homebudget_body/homebudgetBody.template.html',
            controller: homebudgetBodyCtrl,
        };

        return component;
    }

    homebudgetBodyCtrl.$inject = [];

    /* @ngInject */
    function homebudgetBodyCtrl() {

    }
})();
