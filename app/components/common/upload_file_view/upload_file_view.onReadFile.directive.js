(function() {
    'use strict';

    angular
      .module('homebudget.components.common.uploadFileView')
      .directive('uflOnReadFile', uflOnReadFile);

    /* @ngInject */
    function uflOnReadFile($parse) {
      var directive = {
        restrict: 'A',
        scope: {
          uflOnReadFile: "&"
        },
        link: linkFunc
      };

      return directive;

      ////////////////////////////////
      ////////////////////////////////


      function linkFunc(scope, element, attrs) {
        var fn = $parse(attrs.uflOnReadFile);

        element.on('change', function(onChangeEvent) {
          var reader = new FileReader();

          reader.onload = function(onLoadEvent) {
            if ( !scope.uflOnReadFile || !(typeof scope.uflOnReadFile === "function") ) { return; }
            scope.$apply(function() {
              scope.uflOnReadFile({
                $fileContent: onLoadEvent.target.result
              });
            });
          };
          reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        });
      }
    };
  })();
