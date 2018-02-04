 (function() {
     'use strict';

     angular
         .module('homebudget.components.homebudget', [])
         .component('homebudget', homebudget());

     /* @ngInject */
     function homebudget() {
         var component = {
             templateUrl: 'components/homebudget/homebudget.template.html',
             controller: HomebudgetCtrl,
         };

         return component;
     }

     HomebudgetCtrl.$inject = [];

     function HomebudgetCtrl() {

     }
 })();
