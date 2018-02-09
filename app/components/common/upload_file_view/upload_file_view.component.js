(function() {
  'use strict';

  angular
    .module('homebudget.components.common.uploadFileView', [])
    .component('uploadFileView', uploadFileView());

  /* @ngInject */
  function uploadFileView() {
    var component = {
      templateUrl: 'components/common/upload_file_view/upload_file_view.template.html',
      controller: Controller,
      bindings: {
        uflOnRead : '&'
      }
    };

    return component;
  }

  Controller.$inject = [];

  /* @ngInject */
  function Controller() {
    var self = this;
    self.$onInit = function() {

    };

    self.uflOnReadFile = function(filedata) {
      if ( self.uflOnRead && typeof self.uflOnRead === "function" ) {
        self.uflOnRead({ filedata : filedata});
      }
    };
  }
})();
