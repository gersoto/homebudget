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
        showContent : '<'
      }
    };

    return component;
  }

  Controller.$inject = [];

  /* @ngInject */
  function Controller(dependencies) {
    var self = this;
    self.$onInit = function() {
      self.fileProcessed = "File not processed already";
      self.showContent = self.showContent? self.showContent:true;
    };
    self.onReadFile = function(file) {
      self.fileProcessed = "file caqtched";
    };
    self.showContent = function($fileContent) {
      self.fileProcessed = $fileContent;
    };

  }
})();
