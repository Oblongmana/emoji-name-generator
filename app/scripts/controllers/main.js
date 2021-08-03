'use strict';

angular.module('emojiNameGeneratorApp')
  .controller('MainCtrl', function ($scope, emojiNameService) {
    $scope.maximumWordsPerEmoji = 2;
    $scope.emojiNames = emojiNameService.getNames(10,$scope.maximumWordsPerEmoji);
  });
