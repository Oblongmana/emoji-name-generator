angular.module('emojiNameGeneratorApp').service('emojiNameService', function (emojiDataProvider) {

    var tooManyWords = function(theString,maximumWordsPerEmoji) {
      var tooManyThreshold = maximumWordsPerEmoji;
      return (theString.split("-").length) > tooManyThreshold;
    }

    var validCharacters = function(theString) {
      return /^[a-zA-Z\-]+$/.test(theString);
    }

    var boringEmoji = function(theString) {
      //Check if it's one of those "letter" emoji, or a regional emoji, or has a really boring short name like "v",
      // or is a number, amongst other things
      return _.contains([
          'a',
          'b',
          'ab',
          'abc',
          'abcd',
          'capital_abcd',
          'm',
          'o',
          'o2',
          'p',
          'x',
          'v',
          'cn',
          'de',
          'es',
          'fr',
          'gb',
          'it',
          'jp',
          'kr',
          'ru',
          'us',
          'cl',
          'id',
          'ng',
          'ok',
          'sos',
          'up',
          'vs',
          'koko',
          'sa',
          'u7121',
          'u6307',
          'u7981',
          'u7a7a',
          'u5408',
          'u6e80',
          'u6709',
          'u6708',
          'u7533',
          'u5272',
          'u55b6',
          'zero',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine'
        ],
        theString.toLowerCase());
    }

    var getSingleName = function(maximumWordsPerEmoji) {
      var emoji1 = emojiDataProvider.getRandomEmoji();
      var emoji2 = emojiDataProvider.getRandomEmoji();
      var passableName = false;
      
      while(!passableName) {
        if(
            emoji1.name === emoji2.name  ||
            tooManyWords(emoji1.shortName,maximumWordsPerEmoji) ||
            !validCharacters(emoji1.shortName) ||
            boringEmoji(emoji1.shortName)
          ) {
          emoji1 = emojiDataProvider.getRandomEmoji();
        }
        else if(
                  tooManyWords(emoji2.shortName,maximumWordsPerEmoji) ||
                  !validCharacters(emoji2.shortName) ||
                  boringEmoji(emoji2.shortName)
                ) {
          emoji2 = emojiDataProvider.getRandomEmoji();
        }
        else {
          passableName = true;
        }
      }

      return {
        'name': emoji1.shortName + '-' + emoji2.shortName,
        'code': emoji1.code + ' ' + emoji2.code,
        'code1': emoji1.code,
        'code2': emoji2.code,
        'sprite1': {
          'hangouts_img': emoji1.hangouts_img,
          'x': emoji1.sheet_x,
          'y': emoji1.sheet_y
        },
        'sprite2': {
          'hangouts_img': emoji2.hangouts_img,
          'x': emoji2.sheet_x,
          'y': emoji2.sheet_y
        }
      }
    }

    
    return {
      getNames: function(quantityOfNames, maximumWordsPerEmoji) {
        return _.times(quantityOfNames,function(){return getSingleName(maximumWordsPerEmoji)});
      }
    }
});