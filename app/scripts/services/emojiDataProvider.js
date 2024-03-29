angular.module('emojiNameGeneratorApp').service('emojiDataProvider', function () {
  var emojiData =  [
      {
          "au": "E558",
          "docomo": "E731",
          "google": "FEB29",
          "image": "00a9.png",
          "name": "COPYRIGHT SIGN",
          "sheet_x": 0,
          "sheet_y": 11,
          "short_name": "copyright",
          "short_names": [
              "copyright"
          ],
          "softbank": "E24E",
          "text": null,
          "unified": "00A9"
      },
      {
          "au": "E559",
          "docomo": "E736",
          "google": "FEB2D",
          "image": "00ae.png",
          "name": "REGISTERED SIGN",
          "sheet_x": 0,
          "sheet_y": 12,
          "short_name": "registered",
          "short_names": [
              "registered"
          ],
          "softbank": "E24F",
          "text": null,
          "unified": "00AE"
      },
      {
          "au": "EB30",
          "docomo": "E704",
          "google": "FEB06",
          "image": "203c.png",
          "name": "DOUBLE EXCLAMATION MARK",
          "sheet_x": 24,
          "sheet_y": 7,
          "short_name": "bangbang",
          "short_names": [
              "bangbang"
          ],
          "softbank": "",
          "text": null,
          "unified": "203C"
      },
      {
          "au": "EB2F",
          "docomo": "E703",
          "google": "FEB05",
          "image": "2049.png",
          "name": "EXCLAMATION QUESTION MARK",
          "sheet_x": 24,
          "sheet_y": 8,
          "short_name": "interrobang",
          "short_names": [
              "interrobang"
          ],
          "softbank": "",
          "text": null,
          "unified": "2049"
      },
      {
          "au": "E54E",
          "docomo": "E732",
          "google": "FEB2A",
          "image": "2122.png",
          "name": "TRADE MARK SIGN",
          "sheet_x": 24,
          "sheet_y": 9,
          "short_name": "tm",
          "short_names": [
              "tm"
          ],
          "softbank": "E537",
          "text": null,
          "unified": "2122"
      },
      {
          "au": "E533",
          "docomo": "",
          "google": "FEB47",
          "image": "2139.png",
          "name": "INFORMATION SOURCE",
          "sheet_x": 24,
          "sheet_y": 10,
          "short_name": "information_source",
          "short_names": [
              "information_source"
          ],
          "softbank": "",
          "text": null,
          "unified": "2139"
      },
      {
          "au": "EB7A",
          "docomo": "E73C",
          "google": "FEAF6",
          "image": "2194.png",
          "name": "LEFT RIGHT ARROW",
          "sheet_x": 24,
          "sheet_y": 11,
          "short_name": "left_right_arrow",
          "short_names": [
              "left_right_arrow"
          ],
          "softbank": "",
          "text": null,
          "unified": "2194"
      },
      {
          "au": "EB7B",
          "docomo": "E73D",
          "google": "FEAF7",
          "image": "2195.png",
          "name": "UP DOWN ARROW",
          "sheet_x": 24,
          "sheet_y": 12,
          "short_name": "arrow_up_down",
          "short_names": [
              "arrow_up_down"
          ],
          "softbank": "",
          "text": null,
          "unified": "2195"
      },
      {
          "au": "E54C",
          "docomo": "E697",
          "google": "FEAF2",
          "image": "2196.png",
          "name": "NORTH WEST ARROW",
          "sheet_x": 24,
          "sheet_y": 13,
          "short_name": "arrow_upper_left",
          "short_names": [
              "arrow_upper_left"
          ],
          "softbank": "E237",
          "text": null,
          "unified": "2196"
      },
      {
          "au": "E555",
          "docomo": "E678",
          "google": "FEAF0",
          "image": "2197.png",
          "name": "NORTH EAST ARROW",
          "sheet_x": 24,
          "sheet_y": 14,
          "short_name": "arrow_upper_right",
          "short_names": [
              "arrow_upper_right"
          ],
          "softbank": "E236",
          "text": null,
          "unified": "2197"
      },
      {
          "au": "E54D",
          "docomo": "E696",
          "google": "FEAF1",
          "image": "2198.png",
          "name": "SOUTH EAST ARROW",
          "sheet_x": 24,
          "sheet_y": 15,
          "short_name": "arrow_lower_right",
          "short_names": [
              "arrow_lower_right"
          ],
          "softbank": "E238",
          "text": null,
          "unified": "2198"
      },
      {
          "au": "E556",
          "docomo": "E6A5",
          "google": "FEAF3",
          "image": "2199.png",
          "name": "SOUTH WEST ARROW",
          "sheet_x": 24,
          "sheet_y": 16,
          "short_name": "arrow_lower_left",
          "short_names": [
              "arrow_lower_left"
          ],
          "softbank": "E239",
          "text": null,
          "unified": "2199"
      },
      {
          "au": "E55D",
          "docomo": "E6DA",
          "google": "FEB83",
          "image": "21a9.png",
          "name": "LEFTWARDS ARROW WITH HOOK",
          "sheet_x": 24,
          "sheet_y": 17,
          "short_name": "leftwards_arrow_with_hook",
          "short_names": [
              "leftwards_arrow_with_hook"
          ],
          "softbank": "",
          "text": null,
          "unified": "21A9"
      },
      {
          "au": "E55C",
          "docomo": "",
          "google": "FEB88",
          "image": "21aa.png",
          "name": "RIGHTWARDS ARROW WITH HOOK",
          "sheet_x": 24,
          "sheet_y": 18,
          "short_name": "arrow_right_hook",
          "short_names": [
              "arrow_right_hook"
          ],
          "softbank": "",
          "text": null,
          "unified": "21AA"
      },
      {
          "au": "E57A",
          "docomo": "E71F",
          "google": "FE01D",
          "image": "231a.png",
          "name": "WATCH",
          "sheet_x": 24,
          "sheet_y": 19,
          "short_name": "watch",
          "short_names": [
              "watch"
          ],
          "softbank": "",
          "text": null,
          "unified": "231A"
      },
      {
          "au": "E57B",
          "docomo": "E71C",
          "google": "FE01C",
          "image": "231b.png",
          "name": "HOURGLASS",
          "sheet_x": 24,
          "sheet_y": 20,
          "short_name": "hourglass",
          "short_names": [
              "hourglass"
          ],
          "softbank": "",
          "text": null,
          "unified": "231B"
      },
      {
          "au": "E530",
          "docomo": "",
          "google": "FEAFE",
          "image": "23e9.png",
          "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE",
          "sheet_x": 24,
          "sheet_y": 21,
          "short_name": "fast_forward",
          "short_names": [
              "fast_forward"
          ],
          "softbank": "E23C",
          "text": null,
          "unified": "23E9"
      },
      {
          "au": "E52F",
          "docomo": "",
          "google": "FEAFF",
          "image": "23ea.png",
          "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE",
          "sheet_x": 24,
          "sheet_y": 22,
          "short_name": "rewind",
          "short_names": [
              "rewind"
          ],
          "softbank": "E23D",
          "text": null,
          "unified": "23EA"
      },
      {
          "au": "E545",
          "docomo": "",
          "google": "FEB03",
          "image": "23eb.png",
          "name": "BLACK UP-POINTING DOUBLE TRIANGLE",
          "sheet_x": 24,
          "sheet_y": 23,
          "short_name": "arrow_double_up",
          "short_names": [
              "arrow_double_up"
          ],
          "softbank": "",
          "text": null,
          "unified": "23EB"
      },
      {
          "au": "E544",
          "docomo": "",
          "google": "FEB02",
          "image": "23ec.png",
          "name": "BLACK DOWN-POINTING DOUBLE TRIANGLE",
          "sheet_x": 24,
          "sheet_y": 24,
          "short_name": "arrow_double_down",
          "short_names": [
              "arrow_double_down"
          ],
          "softbank": "",
          "text": null,
          "unified": "23EC"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE02A",
          "image": "23f0.png",
          "name": "ALARM CLOCK",
          "sheet_x": 24,
          "sheet_y": 25,
          "short_name": "alarm_clock",
          "short_names": [
              "alarm_clock"
          ],
          "softbank": "E02D",
          "text": null,
          "unified": "23F0"
      },
      {
          "au": "E47C",
          "docomo": "E71C",
          "google": "FE01B",
          "image": "23f3.png",
          "name": "HOURGLASS WITH FLOWING SAND",
          "sheet_x": 24,
          "sheet_y": 26,
          "short_name": "hourglass_flowing_sand",
          "short_names": [
              "hourglass_flowing_sand"
          ],
          "softbank": "",
          "text": null,
          "unified": "23F3"
      },
      {
          "au": "E5BC",
          "docomo": "E65C",
          "google": "FE7E1",
          "image": "24c2.png",
          "name": "CIRCLED LATIN CAPITAL LETTER M",
          "sheet_x": 24,
          "sheet_y": 27,
          "short_name": "m",
          "short_names": [
              "m"
          ],
          "softbank": "E434",
          "text": null,
          "unified": "24C2"
      },
      {
          "au": "E532",
          "docomo": "",
          "google": "FEB6E",
          "image": "25aa.png",
          "name": "BLACK SMALL SQUARE",
          "sheet_x": 24,
          "sheet_y": 28,
          "short_name": "black_small_square",
          "short_names": [
              "black_small_square"
          ],
          "softbank": "E21A",
          "text": null,
          "unified": "25AA"
      },
      {
          "au": "E531",
          "docomo": "",
          "google": "FEB6D",
          "image": "25ab.png",
          "name": "WHITE SMALL SQUARE",
          "sheet_x": 24,
          "sheet_y": 29,
          "short_name": "white_small_square",
          "short_names": [
              "white_small_square"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "25AB"
      },
      {
          "au": "E52E",
          "docomo": "",
          "google": "FEAFC",
          "image": "25b6.png",
          "name": "BLACK RIGHT-POINTING TRIANGLE",
          "sheet_x": 25,
          "sheet_y": 0,
          "short_name": "arrow_forward",
          "short_names": [
              "arrow_forward"
          ],
          "softbank": "E23A",
          "text": null,
          "unified": "25B6"
      },
      {
          "au": "E52D",
          "docomo": "",
          "google": "FEAFD",
          "image": "25c0.png",
          "name": "BLACK LEFT-POINTING TRIANGLE",
          "sheet_x": 25,
          "sheet_y": 1,
          "short_name": "arrow_backward",
          "short_names": [
              "arrow_backward"
          ],
          "softbank": "E23B",
          "text": null,
          "unified": "25C0"
      },
      {
          "au": "E538",
          "docomo": "",
          "google": "FEB71",
          "image": "25fb.png",
          "name": "WHITE MEDIUM SQUARE",
          "sheet_x": 25,
          "sheet_y": 2,
          "short_name": "white_medium_square",
          "short_names": [
              "white_medium_square"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "25FB"
      },
      {
          "au": "E539",
          "docomo": "",
          "google": "FEB72",
          "image": "25fc.png",
          "name": "BLACK MEDIUM SQUARE",
          "sheet_x": 25,
          "sheet_y": 3,
          "short_name": "black_medium_square",
          "short_names": [
              "black_medium_square"
          ],
          "softbank": "E21A",
          "text": null,
          "unified": "25FC"
      },
      {
          "au": "E534",
          "docomo": "",
          "google": "FEB6F",
          "image": "25fd.png",
          "name": "WHITE MEDIUM SMALL SQUARE",
          "sheet_x": 25,
          "sheet_y": 4,
          "short_name": "white_medium_small_square",
          "short_names": [
              "white_medium_small_square"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "25FD"
      },
      {
          "au": "E535",
          "docomo": "",
          "google": "FEB70",
          "image": "25fe.png",
          "name": "BLACK MEDIUM SMALL SQUARE",
          "sheet_x": 25,
          "sheet_y": 5,
          "short_name": "black_medium_small_square",
          "short_names": [
              "black_medium_small_square"
          ],
          "softbank": "E21A",
          "text": null,
          "unified": "25FE"
      },
      {
          "au": "E488",
          "docomo": "E63E",
          "google": "FE000",
          "image": "2600.png",
          "name": "BLACK SUN WITH RAYS",
          "sheet_x": 25,
          "sheet_y": 6,
          "short_name": "sunny",
          "short_names": [
              "sunny"
          ],
          "softbank": "E04A",
          "text": null,
          "unified": "2600"
      },
      {
          "au": "E48D",
          "docomo": "E63F",
          "google": "FE001",
          "image": "2601.png",
          "name": "CLOUD",
          "sheet_x": 25,
          "sheet_y": 7,
          "short_name": "cloud",
          "short_names": [
              "cloud"
          ],
          "softbank": "E049",
          "text": null,
          "unified": "2601"
      },
      {
          "au": "E596",
          "docomo": "E687",
          "google": "FE523",
          "image": "260e.png",
          "name": "BLACK TELEPHONE",
          "sheet_x": 25,
          "sheet_y": 8,
          "short_name": "phone",
          "short_names": [
              "phone",
              "telephone"
          ],
          "softbank": "E009",
          "text": null,
          "unified": "260E"
      },
      {
          "au": "EB02",
          "docomo": "",
          "google": "FEB8B",
          "image": "2611.png",
          "name": "BALLOT BOX WITH CHECK",
          "sheet_x": 25,
          "sheet_y": 9,
          "short_name": "ballot_box_with_check",
          "short_names": [
              "ballot_box_with_check"
          ],
          "softbank": "",
          "text": null,
          "unified": "2611"
      },
      {
          "au": "E48C",
          "docomo": "E640",
          "google": "FE002",
          "image": "2614.png",
          "name": "UMBRELLA WITH RAIN DROPS",
          "sheet_x": 25,
          "sheet_y": 10,
          "short_name": "umbrella",
          "short_names": [
              "umbrella"
          ],
          "softbank": "E04B",
          "text": null,
          "unified": "2614"
      },
      {
          "au": "E597",
          "docomo": "E670",
          "google": "FE981",
          "image": "2615.png",
          "name": "HOT BEVERAGE",
          "sheet_x": 25,
          "sheet_y": 11,
          "short_name": "coffee",
          "short_names": [
              "coffee"
          ],
          "softbank": "E045",
          "text": null,
          "unified": "2615"
      },
      {
          "au": "E4F6",
          "docomo": "",
          "google": "FEB98",
          "image": "261d.png",
          "name": "WHITE UP POINTING INDEX",
          "sheet_x": 25,
          "sheet_y": 12,
          "short_name": "point_up",
          "short_names": [
              "point_up"
          ],
          "softbank": "E00F",
          "text": null,
          "unified": "261D"
      },
      {
          "au": "E4FB",
          "docomo": "E6F0",
          "google": "FE336",
          "image": "263a.png",
          "name": "WHITE SMILING FACE",
          "sheet_x": 25,
          "sheet_y": 13,
          "short_name": "relaxed",
          "short_names": [
              "relaxed"
          ],
          "softbank": "E414",
          "text": null,
          "unified": "263A"
      },
      {
          "au": "E48F",
          "docomo": "E646",
          "google": "FE02B",
          "image": "2648.png",
          "name": "ARIES",
          "sheet_x": 25,
          "sheet_y": 14,
          "short_name": "aries",
          "short_names": [
              "aries"
          ],
          "softbank": "E23F",
          "text": null,
          "unified": "2648"
      },
      {
          "au": "E490",
          "docomo": "E647",
          "google": "FE02C",
          "image": "2649.png",
          "name": "TAURUS",
          "sheet_x": 25,
          "sheet_y": 15,
          "short_name": "taurus",
          "short_names": [
              "taurus"
          ],
          "softbank": "E240",
          "text": null,
          "unified": "2649"
      },
      {
          "au": "E491",
          "docomo": "E648",
          "google": "FE02D",
          "image": "264a.png",
          "name": "GEMINI",
          "sheet_x": 25,
          "sheet_y": 16,
          "short_name": "gemini",
          "short_names": [
              "gemini"
          ],
          "softbank": "E241",
          "text": null,
          "unified": "264A"
      },
      {
          "au": "E492",
          "docomo": "E649",
          "google": "FE02E",
          "image": "264b.png",
          "name": "CANCER",
          "sheet_x": 25,
          "sheet_y": 17,
          "short_name": "cancer",
          "short_names": [
              "cancer"
          ],
          "softbank": "E242",
          "text": null,
          "unified": "264B"
      },
      {
          "au": "E493",
          "docomo": "E64A",
          "google": "FE02F",
          "image": "264c.png",
          "name": "LEO",
          "sheet_x": 25,
          "sheet_y": 18,
          "short_name": "leo",
          "short_names": [
              "leo"
          ],
          "softbank": "E243",
          "text": null,
          "unified": "264C"
      },
      {
          "au": "E494",
          "docomo": "E64B",
          "google": "FE030",
          "image": "264d.png",
          "name": "VIRGO",
          "sheet_x": 25,
          "sheet_y": 19,
          "short_name": "virgo",
          "short_names": [
              "virgo"
          ],
          "softbank": "E244",
          "text": null,
          "unified": "264D"
      },
      {
          "au": "E495",
          "docomo": "E64C",
          "google": "FE031",
          "image": "264e.png",
          "name": "LIBRA",
          "sheet_x": 25,
          "sheet_y": 20,
          "short_name": "libra",
          "short_names": [
              "libra"
          ],
          "softbank": "E245",
          "text": null,
          "unified": "264E"
      },
      {
          "au": "E496",
          "docomo": "E64D",
          "google": "FE032",
          "image": "264f.png",
          "name": "SCORPIUS",
          "sheet_x": 25,
          "sheet_y": 21,
          "short_name": "scorpius",
          "short_names": [
              "scorpius"
          ],
          "softbank": "E246",
          "text": null,
          "unified": "264F"
      },
      {
          "au": "E497",
          "docomo": "E64E",
          "google": "FE033",
          "image": "2650.png",
          "name": "SAGITTARIUS",
          "sheet_x": 25,
          "sheet_y": 22,
          "short_name": "sagittarius",
          "short_names": [
              "sagittarius"
          ],
          "softbank": "E247",
          "text": null,
          "unified": "2650"
      },
      {
          "au": "E498",
          "docomo": "E64F",
          "google": "FE034",
          "image": "2651.png",
          "name": "CAPRICORN",
          "sheet_x": 25,
          "sheet_y": 23,
          "short_name": "capricorn",
          "short_names": [
              "capricorn"
          ],
          "softbank": "E248",
          "text": null,
          "unified": "2651"
      },
      {
          "au": "E499",
          "docomo": "E650",
          "google": "FE035",
          "image": "2652.png",
          "name": "AQUARIUS",
          "sheet_x": 25,
          "sheet_y": 24,
          "short_name": "aquarius",
          "short_names": [
              "aquarius"
          ],
          "softbank": "E249",
          "text": null,
          "unified": "2652"
      },
      {
          "au": "E49A",
          "docomo": "E651",
          "google": "FE036",
          "image": "2653.png",
          "name": "PISCES",
          "sheet_x": 25,
          "sheet_y": 25,
          "short_name": "pisces",
          "short_names": [
              "pisces"
          ],
          "softbank": "E24A",
          "text": null,
          "unified": "2653"
      },
      {
          "au": "E5A1",
          "docomo": "E68E",
          "google": "FEB1B",
          "image": "2660.png",
          "name": "BLACK SPADE SUIT",
          "sheet_x": 25,
          "sheet_y": 26,
          "short_name": "spades",
          "short_names": [
              "spades"
          ],
          "softbank": "E20E",
          "text": null,
          "unified": "2660"
      },
      {
          "au": "E5A3",
          "docomo": "E690",
          "google": "FEB1D",
          "image": "2663.png",
          "name": "BLACK CLUB SUIT",
          "sheet_x": 25,
          "sheet_y": 27,
          "short_name": "clubs",
          "short_names": [
              "clubs"
          ],
          "softbank": "E20F",
          "text": null,
          "unified": "2663"
      },
      {
          "au": "EAA5",
          "docomo": "E68D",
          "google": "FEB1A",
          "image": "2665.png",
          "name": "BLACK HEART SUIT",
          "sheet_x": 25,
          "sheet_y": 28,
          "short_name": "hearts",
          "short_names": [
              "hearts"
          ],
          "softbank": "E20C",
          "text": null,
          "unified": "2665"
      },
      {
          "au": "E5A2",
          "docomo": "E68F",
          "google": "FEB1C",
          "image": "2666.png",
          "name": "BLACK DIAMOND SUIT",
          "sheet_x": 25,
          "sheet_y": 29,
          "short_name": "diamonds",
          "short_names": [
              "diamonds"
          ],
          "softbank": "E20D",
          "text": null,
          "unified": "2666"
      },
      {
          "au": "E4BC",
          "docomo": "E6F7",
          "google": "FE7FA",
          "image": "2668.png",
          "name": "HOT SPRINGS",
          "sheet_x": 26,
          "sheet_y": 0,
          "short_name": "hotsprings",
          "short_names": [
              "hotsprings"
          ],
          "softbank": "E123",
          "text": null,
          "unified": "2668"
      },
      {
          "au": "EB79",
          "docomo": "E735",
          "google": "FEB2C",
          "image": "267b.png",
          "name": "BLACK UNIVERSAL RECYCLING SYMBOL",
          "sheet_x": 26,
          "sheet_y": 1,
          "short_name": "recycle",
          "short_names": [
              "recycle"
          ],
          "softbank": "",
          "text": null,
          "unified": "267B"
      },
      {
          "au": "E47F",
          "docomo": "E69B",
          "google": "FEB20",
          "image": "267f.png",
          "name": "WHEELCHAIR SYMBOL",
          "sheet_x": 26,
          "sheet_y": 2,
          "short_name": "wheelchair",
          "short_names": [
              "wheelchair"
          ],
          "softbank": "E20A",
          "text": null,
          "unified": "267F"
      },
      {
          "au": "E4A9",
          "docomo": "E661",
          "google": "FE4C1",
          "image": "2693.png",
          "name": "ANCHOR",
          "sheet_x": 26,
          "sheet_y": 3,
          "short_name": "anchor",
          "short_names": [
              "anchor"
          ],
          "softbank": "E202",
          "text": null,
          "unified": "2693"
      },
      {
          "au": "E481",
          "docomo": "E737",
          "google": "FEB23",
          "image": "26a0.png",
          "name": "WARNING SIGN",
          "sheet_x": 26,
          "sheet_y": 4,
          "short_name": "warning",
          "short_names": [
              "warning"
          ],
          "softbank": "E252",
          "text": null,
          "unified": "26A0"
      },
      {
          "au": "E487",
          "docomo": "E642",
          "google": "FE004",
          "image": "26a1.png",
          "name": "HIGH VOLTAGE SIGN",
          "sheet_x": 26,
          "sheet_y": 5,
          "short_name": "zap",
          "short_names": [
              "zap"
          ],
          "softbank": "E13D",
          "text": null,
          "unified": "26A1"
      },
      {
          "au": "E53A",
          "docomo": "E69C",
          "google": "FEB65",
          "image": "26aa.png",
          "name": "MEDIUM WHITE CIRCLE",
          "sheet_x": 26,
          "sheet_y": 6,
          "short_name": "white_circle",
          "short_names": [
              "white_circle"
          ],
          "softbank": "E219",
          "text": null,
          "unified": "26AA"
      },
      {
          "au": "E53B",
          "docomo": "E69C",
          "google": "FEB66",
          "image": "26ab.png",
          "name": "MEDIUM BLACK CIRCLE",
          "sheet_x": 26,
          "sheet_y": 7,
          "short_name": "black_circle",
          "short_names": [
              "black_circle"
          ],
          "softbank": "E219",
          "text": null,
          "unified": "26AB"
      },
      {
          "au": "E4B6",
          "docomo": "E656",
          "google": "FE7D4",
          "image": "26bd.png",
          "name": "SOCCER BALL",
          "sheet_x": 26,
          "sheet_y": 8,
          "short_name": "soccer",
          "short_names": [
              "soccer"
          ],
          "softbank": "E018",
          "text": null,
          "unified": "26BD"
      },
      {
          "au": "E4BA",
          "docomo": "E653",
          "google": "FE7D1",
          "image": "26be.png",
          "name": "BASEBALL",
          "sheet_x": 26,
          "sheet_y": 9,
          "short_name": "baseball",
          "short_names": [
              "baseball"
          ],
          "softbank": "E016",
          "text": null,
          "unified": "26BE"
      },
      {
          "au": "E485",
          "docomo": "E641",
          "google": "FE003",
          "image": "26c4.png",
          "name": "SNOWMAN WITHOUT SNOW",
          "sheet_x": 26,
          "sheet_y": 10,
          "short_name": "snowman",
          "short_names": [
              "snowman"
          ],
          "softbank": "E048",
          "text": null,
          "unified": "26C4"
      },
      {
          "au": "E48E",
          "docomo": "E63E-E63F",
          "google": "FE00F",
          "image": "26c5.png",
          "name": "SUN BEHIND CLOUD",
          "sheet_x": 26,
          "sheet_y": 11,
          "short_name": "partly_sunny",
          "short_names": [
              "partly_sunny"
          ],
          "softbank": "E04A-E049",
          "text": null,
          "unified": "26C5"
      },
      {
          "au": "E49B",
          "docomo": "",
          "google": "FE037",
          "image": "26ce.png",
          "name": "OPHIUCHUS",
          "sheet_x": 26,
          "sheet_y": 12,
          "short_name": "ophiuchus",
          "short_names": [
              "ophiuchus"
          ],
          "softbank": "E24B",
          "text": null,
          "unified": "26CE"
      },
      {
          "au": "E484",
          "docomo": "E72F",
          "google": "FEB26",
          "image": "26d4.png",
          "name": "NO ENTRY",
          "sheet_x": 26,
          "sheet_y": 13,
          "short_name": "no_entry",
          "short_names": [
              "no_entry"
          ],
          "softbank": "E137",
          "text": null,
          "unified": "26D4"
      },
      {
          "au": "E5BB",
          "docomo": "",
          "google": "FE4BB",
          "image": "26ea.png",
          "name": "CHURCH",
          "sheet_x": 26,
          "sheet_y": 14,
          "short_name": "church",
          "short_names": [
              "church"
          ],
          "softbank": "E037",
          "text": null,
          "unified": "26EA"
      },
      {
          "au": "E5CF",
          "docomo": "",
          "google": "FE4BC",
          "image": "26f2.png",
          "name": "FOUNTAIN",
          "sheet_x": 26,
          "sheet_y": 15,
          "short_name": "fountain",
          "short_names": [
              "fountain"
          ],
          "softbank": "E121",
          "text": null,
          "unified": "26F2"
      },
      {
          "au": "E599",
          "docomo": "E654",
          "google": "FE7D2",
          "image": "26f3.png",
          "name": "FLAG IN HOLE",
          "sheet_x": 26,
          "sheet_y": 16,
          "short_name": "golf",
          "short_names": [
              "golf"
          ],
          "softbank": "E014",
          "text": null,
          "unified": "26F3"
      },
      {
          "au": "E4B4",
          "docomo": "E6A3",
          "google": "FE7EA",
          "image": "26f5.png",
          "name": "SAILBOAT",
          "sheet_x": 26,
          "sheet_y": 17,
          "short_name": "boat",
          "short_names": [
              "boat",
              "sailboat"
          ],
          "softbank": "E01C",
          "text": null,
          "unified": "26F5"
      },
      {
          "au": "E5D0",
          "docomo": "",
          "google": "FE7FB",
          "image": "26fa.png",
          "name": "TENT",
          "sheet_x": 26,
          "sheet_y": 18,
          "short_name": "tent",
          "short_names": [
              "tent"
          ],
          "softbank": "E122",
          "text": null,
          "unified": "26FA"
      },
      {
          "au": "E571",
          "docomo": "E66B",
          "google": "FE7F5",
          "image": "26fd.png",
          "name": "FUEL PUMP",
          "sheet_x": 26,
          "sheet_y": 19,
          "short_name": "fuelpump",
          "short_names": [
              "fuelpump"
          ],
          "softbank": "E03A",
          "text": null,
          "unified": "26FD"
      },
      {
          "au": "E516",
          "docomo": "E675",
          "google": "FE53E",
          "image": "2702.png",
          "name": "BLACK SCISSORS",
          "sheet_x": 26,
          "sheet_y": 20,
          "short_name": "scissors",
          "short_names": [
              "scissors"
          ],
          "softbank": "E313",
          "text": null,
          "unified": "2702"
      },
      {
          "au": "E55E",
          "docomo": "",
          "google": "FEB4A",
          "image": "2705.png",
          "name": "WHITE HEAVY CHECK MARK",
          "sheet_x": 26,
          "sheet_y": 21,
          "short_name": "white_check_mark",
          "short_names": [
              "white_check_mark"
          ],
          "softbank": "",
          "text": null,
          "unified": "2705"
      },
      {
          "au": "E4B3",
          "docomo": "E662",
          "google": "FE7E9",
          "image": "2708.png",
          "name": "AIRPLANE",
          "sheet_x": 26,
          "sheet_y": 22,
          "short_name": "airplane",
          "short_names": [
              "airplane"
          ],
          "softbank": "E01D",
          "text": null,
          "unified": "2708"
      },
      {
          "au": "E521",
          "docomo": "E6D3",
          "google": "FE529",
          "image": "2709.png",
          "name": "ENVELOPE",
          "sheet_x": 26,
          "sheet_y": 23,
          "short_name": "email",
          "short_names": [
              "email",
              "envelope"
          ],
          "softbank": "E103",
          "text": null,
          "unified": "2709"
      },
      {
          "au": "EB83",
          "docomo": "E693",
          "google": "FEB93",
          "image": "270a.png",
          "name": "RAISED FIST",
          "sheet_x": 26,
          "sheet_y": 24,
          "short_name": "fist",
          "short_names": [
              "fist"
          ],
          "softbank": "E010",
          "text": null,
          "unified": "270A"
      },
      {
          "au": "E5A7",
          "docomo": "E695",
          "google": "FEB95",
          "image": "270b.png",
          "name": "RAISED HAND",
          "sheet_x": 26,
          "sheet_y": 25,
          "short_name": "hand",
          "short_names": [
              "hand",
              "raised_hand"
          ],
          "softbank": "E012",
          "text": null,
          "unified": "270B"
      },
      {
          "au": "E5A6",
          "docomo": "E694",
          "google": "FEB94",
          "image": "270c.png",
          "name": "VICTORY HAND",
          "sheet_x": 26,
          "sheet_y": 26,
          "short_name": "v",
          "short_names": [
              "v"
          ],
          "softbank": "E011",
          "text": null,
          "unified": "270C"
      },
      {
          "au": "E4A1",
          "docomo": "E719",
          "google": "FE539",
          "image": "270f.png",
          "name": "PENCIL",
          "sheet_x": 26,
          "sheet_y": 27,
          "short_name": "pencil2",
          "short_names": [
              "pencil2"
          ],
          "softbank": "E301",
          "text": null,
          "unified": "270F"
      },
      {
          "au": "EB03",
          "docomo": "E6AE",
          "google": "FE536",
          "image": "2712.png",
          "name": "BLACK NIB",
          "sheet_x": 26,
          "sheet_y": 28,
          "short_name": "black_nib",
          "short_names": [
              "black_nib"
          ],
          "softbank": "",
          "text": null,
          "unified": "2712"
      },
      {
          "au": "E557",
          "docomo": "",
          "google": "FEB49",
          "image": "2714.png",
          "name": "HEAVY CHECK MARK",
          "sheet_x": 26,
          "sheet_y": 29,
          "short_name": "heavy_check_mark",
          "short_names": [
              "heavy_check_mark"
          ],
          "softbank": "",
          "text": null,
          "unified": "2714"
      },
      {
          "au": "E54F",
          "docomo": "",
          "google": "FEB53",
          "image": "2716.png",
          "name": "HEAVY MULTIPLICATION X",
          "sheet_x": 27,
          "sheet_y": 0,
          "short_name": "heavy_multiplication_x",
          "short_names": [
              "heavy_multiplication_x"
          ],
          "softbank": "E333",
          "text": null,
          "unified": "2716"
      },
      {
          "au": "EAAB",
          "docomo": "E6FA",
          "google": "FEB60",
          "image": "2728.png",
          "name": "SPARKLES",
          "sheet_x": 27,
          "sheet_y": 1,
          "short_name": "sparkles",
          "short_names": [
              "sparkles"
          ],
          "softbank": "E32E",
          "text": null,
          "unified": "2728"
      },
      {
          "au": "E53E",
          "docomo": "E6F8",
          "google": "FEB62",
          "image": "2733.png",
          "name": "EIGHT SPOKED ASTERISK",
          "sheet_x": 27,
          "sheet_y": 2,
          "short_name": "eight_spoked_asterisk",
          "short_names": [
              "eight_spoked_asterisk"
          ],
          "softbank": "E206",
          "text": null,
          "unified": "2733"
      },
      {
          "au": "E479",
          "docomo": "E6F8",
          "google": "FEB61",
          "image": "2734.png",
          "name": "EIGHT POINTED BLACK STAR",
          "sheet_x": 27,
          "sheet_y": 3,
          "short_name": "eight_pointed_black_star",
          "short_names": [
              "eight_pointed_black_star"
          ],
          "softbank": "E205",
          "text": null,
          "unified": "2734"
      },
      {
          "au": "E48A",
          "docomo": "",
          "google": "FE00E",
          "image": "2744.png",
          "name": "SNOWFLAKE",
          "sheet_x": 27,
          "sheet_y": 4,
          "short_name": "snowflake",
          "short_names": [
              "snowflake"
          ],
          "softbank": "",
          "text": null,
          "unified": "2744"
      },
      {
          "au": "E46C",
          "docomo": "E6FA",
          "google": "FEB77",
          "image": "2747.png",
          "name": "SPARKLE",
          "sheet_x": 27,
          "sheet_y": 5,
          "short_name": "sparkle",
          "short_names": [
              "sparkle"
          ],
          "softbank": "E32E",
          "text": null,
          "unified": "2747"
      },
      {
          "au": "E550",
          "docomo": "",
          "google": "FEB45",
          "image": "274c.png",
          "name": "CROSS MARK",
          "sheet_x": 27,
          "sheet_y": 6,
          "short_name": "x",
          "short_names": [
              "x"
          ],
          "softbank": "E333",
          "text": null,
          "unified": "274C"
      },
      {
          "au": "E551",
          "docomo": "",
          "google": "FEB46",
          "image": "274e.png",
          "name": "NEGATIVE SQUARED CROSS MARK",
          "sheet_x": 27,
          "sheet_y": 7,
          "short_name": "negative_squared_cross_mark",
          "short_names": [
              "negative_squared_cross_mark"
          ],
          "softbank": "E333",
          "text": null,
          "unified": "274E"
      },
      {
          "au": "E483",
          "docomo": "",
          "google": "FEB09",
          "image": "2753.png",
          "name": "BLACK QUESTION MARK ORNAMENT",
          "sheet_x": 27,
          "sheet_y": 8,
          "short_name": "question",
          "short_names": [
              "question"
          ],
          "softbank": "E020",
          "text": null,
          "unified": "2753"
      },
      {
          "au": "E483",
          "docomo": "",
          "google": "FEB0A",
          "image": "2754.png",
          "name": "WHITE QUESTION MARK ORNAMENT",
          "sheet_x": 27,
          "sheet_y": 9,
          "short_name": "grey_question",
          "short_names": [
              "grey_question"
          ],
          "softbank": "E336",
          "text": null,
          "unified": "2754"
      },
      {
          "au": "E482",
          "docomo": "E702",
          "google": "FEB0B",
          "image": "2755.png",
          "name": "WHITE EXCLAMATION MARK ORNAMENT",
          "sheet_x": 27,
          "sheet_y": 10,
          "short_name": "grey_exclamation",
          "short_names": [
              "grey_exclamation"
          ],
          "softbank": "E337",
          "text": null,
          "unified": "2755"
      },
      {
          "au": "E482",
          "docomo": "E702",
          "google": "FEB04",
          "image": "2757.png",
          "name": "HEAVY EXCLAMATION MARK SYMBOL",
          "sheet_x": 27,
          "sheet_y": 11,
          "short_name": "exclamation",
          "short_names": [
              "exclamation",
              "heavy_exclamation_mark"
          ],
          "softbank": "E021",
          "text": null,
          "unified": "2757"
      },
      {
          "au": "E595",
          "docomo": "E6EC",
          "google": "FEB0C",
          "image": "2764.png",
          "name": "HEAVY BLACK HEART",
          "sheet_x": 27,
          "sheet_y": 12,
          "short_name": "heart",
          "short_names": [
              "heart"
          ],
          "softbank": "E022",
          "text": "<3",
          "unified": "2764"
      },
      {
          "au": "E53C",
          "docomo": "",
          "google": "FEB51",
          "image": "2795.png",
          "name": "HEAVY PLUS SIGN",
          "sheet_x": 27,
          "sheet_y": 13,
          "short_name": "heavy_plus_sign",
          "short_names": [
              "heavy_plus_sign"
          ],
          "softbank": "",
          "text": null,
          "unified": "2795"
      },
      {
          "au": "E53D",
          "docomo": "",
          "google": "FEB52",
          "image": "2796.png",
          "name": "HEAVY MINUS SIGN",
          "sheet_x": 27,
          "sheet_y": 14,
          "short_name": "heavy_minus_sign",
          "short_names": [
              "heavy_minus_sign"
          ],
          "softbank": "",
          "text": null,
          "unified": "2796"
      },
      {
          "au": "E554",
          "docomo": "",
          "google": "FEB54",
          "image": "2797.png",
          "name": "HEAVY DIVISION SIGN",
          "sheet_x": 27,
          "sheet_y": 15,
          "short_name": "heavy_division_sign",
          "short_names": [
              "heavy_division_sign"
          ],
          "softbank": "",
          "text": null,
          "unified": "2797"
      },
      {
          "au": "E552",
          "docomo": "",
          "google": "FEAFA",
          "image": "27a1.png",
          "name": "BLACK RIGHTWARDS ARROW",
          "sheet_x": 27,
          "sheet_y": 16,
          "short_name": "arrow_right",
          "short_names": [
              "arrow_right"
          ],
          "softbank": "E234",
          "text": null,
          "unified": "27A1"
      },
      {
          "au": "EB31",
          "docomo": "E70A",
          "google": "FEB08",
          "image": "27b0.png",
          "name": "CURLY LOOP",
          "sheet_x": 27,
          "sheet_y": 17,
          "short_name": "curly_loop",
          "short_names": [
              "curly_loop"
          ],
          "softbank": "",
          "text": null,
          "unified": "27B0"
      },
      {
          "au": "",
          "docomo": "E6DF",
          "google": "FE82B",
          "image": "27bf.png",
          "name": "DOUBLE CURLY LOOP",
          "sheet_x": 27,
          "sheet_y": 18,
          "short_name": "loop",
          "short_names": [
              "loop"
          ],
          "softbank": "E211",
          "text": null,
          "unified": "27BF"
      },
      {
          "au": "EB2D",
          "docomo": "E6F5",
          "google": "FEAF4",
          "image": "2934.png",
          "name": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS",
          "sheet_x": 27,
          "sheet_y": 19,
          "short_name": "arrow_heading_up",
          "short_names": [
              "arrow_heading_up"
          ],
          "softbank": "E236",
          "text": null,
          "unified": "2934"
      },
      {
          "au": "EB2E",
          "docomo": "E700",
          "google": "FEAF5",
          "image": "2935.png",
          "name": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS",
          "sheet_x": 27,
          "sheet_y": 20,
          "short_name": "arrow_heading_down",
          "short_names": [
              "arrow_heading_down"
          ],
          "softbank": "E238",
          "text": null,
          "unified": "2935"
      },
      {
          "au": "E553",
          "docomo": "",
          "google": "FEAFB",
          "image": "2b05.png",
          "name": "LEFTWARDS BLACK ARROW",
          "sheet_x": 27,
          "sheet_y": 21,
          "short_name": "arrow_left",
          "short_names": [
              "arrow_left"
          ],
          "softbank": "E235",
          "text": null,
          "unified": "2B05"
      },
      {
          "au": "E53F",
          "docomo": "",
          "google": "FEAF8",
          "image": "2b06.png",
          "name": "UPWARDS BLACK ARROW",
          "sheet_x": 27,
          "sheet_y": 22,
          "short_name": "arrow_up",
          "short_names": [
              "arrow_up"
          ],
          "softbank": "E232",
          "text": null,
          "unified": "2B06"
      },
      {
          "au": "E540",
          "docomo": "",
          "google": "FEAF9",
          "image": "2b07.png",
          "name": "DOWNWARDS BLACK ARROW",
          "sheet_x": 27,
          "sheet_y": 23,
          "short_name": "arrow_down",
          "short_names": [
              "arrow_down"
          ],
          "softbank": "E233",
          "text": null,
          "unified": "2B07"
      },
      {
          "au": "E549",
          "docomo": "",
          "google": "FEB6C",
          "image": "2b1b.png",
          "name": "BLACK LARGE SQUARE",
          "sheet_x": 27,
          "sheet_y": 24,
          "short_name": "black_large_square",
          "short_names": [
              "black_large_square"
          ],
          "softbank": "E21A",
          "text": null,
          "unified": "2B1B"
      },
      {
          "au": "E548",
          "docomo": "",
          "google": "FEB6B",
          "image": "2b1c.png",
          "name": "WHITE LARGE SQUARE",
          "sheet_x": 27,
          "sheet_y": 25,
          "short_name": "white_large_square",
          "short_names": [
              "white_large_square"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "2B1C"
      },
      {
          "au": "E48B",
          "docomo": "",
          "google": "FEB68",
          "image": "2b50.png",
          "name": "WHITE MEDIUM STAR",
          "sheet_x": 27,
          "sheet_y": 26,
          "short_name": "star",
          "short_names": [
              "star"
          ],
          "softbank": "E32F",
          "text": null,
          "unified": "2B50"
      },
      {
          "au": "EAAD",
          "docomo": "E6A0",
          "google": "FEB44",
          "image": "2b55.png",
          "name": "HEAVY LARGE CIRCLE",
          "sheet_x": 27,
          "sheet_y": 27,
          "short_name": "o",
          "short_names": [
              "o"
          ],
          "softbank": "E332",
          "text": null,
          "unified": "2B55"
      },
      {
          "au": "",
          "docomo": "E709",
          "google": "FEB07",
          "image": "3030.png",
          "name": "WAVY DASH",
          "sheet_x": 27,
          "sheet_y": 28,
          "short_name": "wavy_dash",
          "short_names": [
              "wavy_dash"
          ],
          "softbank": "",
          "text": null,
          "unified": "3030"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE81B",
          "image": "303d.png",
          "name": "PART ALTERNATION MARK",
          "sheet_x": 27,
          "sheet_y": 29,
          "short_name": "part_alternation_mark",
          "short_names": [
              "part_alternation_mark"
          ],
          "softbank": "E12C",
          "text": null,
          "unified": "303D"
      },
      {
          "au": "EA99",
          "docomo": "",
          "google": "FEB43",
          "image": "3297.png",
          "name": "CIRCLED IDEOGRAPH CONGRATULATION",
          "sheet_x": 28,
          "sheet_y": 0,
          "short_name": "congratulations",
          "short_names": [
              "congratulations"
          ],
          "softbank": "E30D",
          "text": null,
          "unified": "3297"
      },
      {
          "au": "E4F1",
          "docomo": "E734",
          "google": "FEB2B",
          "image": "3299.png",
          "name": "CIRCLED IDEOGRAPH SECRET",
          "sheet_x": 28,
          "sheet_y": 1,
          "short_name": "secret",
          "short_names": [
              "secret"
          ],
          "softbank": "E315",
          "text": null,
          "unified": "3299"
      },
      {
          "au": "E5D1",
          "docomo": "",
          "google": "FE80B",
          "image": "1f004.png",
          "name": "MAHJONG TILE RED DRAGON",
          "sheet_x": 0,
          "sheet_y": 13,
          "short_name": "mahjong",
          "short_names": [
              "mahjong"
          ],
          "softbank": "E12D",
          "text": null,
          "unified": "1F004"
      },
      {
          "au": "EB6F",
          "docomo": "",
          "google": "FE812",
          "image": "1f0cf.png",
          "name": "PLAYING CARD BLACK JOKER",
          "sheet_x": 0,
          "sheet_y": 14,
          "short_name": "black_joker",
          "short_names": [
              "black_joker"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F0CF"
      },
      {
          "au": "EB26",
          "docomo": "",
          "google": "FE50B",
          "image": "1f170.png",
          "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER A",
          "sheet_x": 0,
          "sheet_y": 15,
          "short_name": "a",
          "short_names": [
              "a"
          ],
          "softbank": "E532",
          "text": null,
          "unified": "1F170"
      },
      {
          "au": "EB27",
          "docomo": "",
          "google": "FE50C",
          "image": "1f171.png",
          "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER B",
          "sheet_x": 0,
          "sheet_y": 16,
          "short_name": "b",
          "short_names": [
              "b"
          ],
          "softbank": "E533",
          "text": null,
          "unified": "1F171"
      },
      {
          "au": "EB28",
          "docomo": "",
          "google": "FE50E",
          "image": "1f17e.png",
          "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER O",
          "sheet_x": 0,
          "sheet_y": 17,
          "short_name": "o2",
          "short_names": [
              "o2"
          ],
          "softbank": "E535",
          "text": null,
          "unified": "1F17E"
      },
      {
          "au": "E4A6",
          "docomo": "E66C",
          "google": "FE7F6",
          "image": "1f17f.png",
          "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER P",
          "sheet_x": 0,
          "sheet_y": 18,
          "short_name": "parking",
          "short_names": [
              "parking"
          ],
          "softbank": "E14F",
          "text": null,
          "unified": "1F17F"
      },
      {
          "au": "EB29",
          "docomo": "",
          "google": "FE50D",
          "image": "1f18e.png",
          "name": "NEGATIVE SQUARED AB",
          "sheet_x": 0,
          "sheet_y": 19,
          "short_name": "ab",
          "short_names": [
              "ab"
          ],
          "softbank": "E534",
          "text": null,
          "unified": "1F18E"
      },
      {
          "au": "E5AB",
          "docomo": "E6DB",
          "google": "FEB84",
          "image": "1f191.png",
          "name": "SQUARED CL",
          "sheet_x": 0,
          "sheet_y": 20,
          "short_name": "cl",
          "short_names": [
              "cl"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F191"
      },
      {
          "au": "EA85",
          "docomo": "",
          "google": "FEB38",
          "image": "1f192.png",
          "name": "SQUARED COOL",
          "sheet_x": 0,
          "sheet_y": 21,
          "short_name": "cool",
          "short_names": [
              "cool"
          ],
          "softbank": "E214",
          "text": null,
          "unified": "1F192"
      },
      {
          "au": "E578",
          "docomo": "E6D7",
          "google": "FEB21",
          "image": "1f193.png",
          "name": "SQUARED FREE",
          "sheet_x": 0,
          "sheet_y": 22,
          "short_name": "free",
          "short_names": [
              "free"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F193"
      },
      {
          "au": "EA88",
          "docomo": "E6D8",
          "google": "FEB81",
          "image": "1f194.png",
          "name": "SQUARED ID",
          "sheet_x": 0,
          "sheet_y": 23,
          "short_name": "id",
          "short_names": [
              "id"
          ],
          "softbank": "E229",
          "text": null,
          "unified": "1F194"
      },
      {
          "au": "E5B5",
          "docomo": "E6DD",
          "google": "FEB36",
          "image": "1f195.png",
          "name": "SQUARED NEW",
          "sheet_x": 0,
          "sheet_y": 24,
          "short_name": "new",
          "short_names": [
              "new"
          ],
          "softbank": "E212",
          "text": null,
          "unified": "1F195"
      },
      {
          "au": "",
          "docomo": "E72F",
          "google": "FEB28",
          "image": "1f196.png",
          "name": "SQUARED NG",
          "sheet_x": 0,
          "sheet_y": 25,
          "short_name": "ng",
          "short_names": [
              "ng"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F196"
      },
      {
          "au": "E5AD",
          "docomo": "E70B",
          "google": "FEB27",
          "image": "1f197.png",
          "name": "SQUARED OK",
          "sheet_x": 0,
          "sheet_y": 26,
          "short_name": "ok",
          "short_names": [
              "ok"
          ],
          "softbank": "E24D",
          "text": null,
          "unified": "1F197"
      },
      {
          "au": "E4E8",
          "docomo": "",
          "google": "FEB4F",
          "image": "1f198.png",
          "name": "SQUARED SOS",
          "sheet_x": 0,
          "sheet_y": 27,
          "short_name": "sos",
          "short_names": [
              "sos"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F198"
      },
      {
          "au": "E50F",
          "docomo": "",
          "google": "FEB37",
          "image": "1f199.png",
          "name": "SQUARED UP WITH EXCLAMATION MARK",
          "sheet_x": 0,
          "sheet_y": 28,
          "short_name": "up",
          "short_names": [
              "up"
          ],
          "softbank": "E213",
          "text": null,
          "unified": "1F199"
      },
      {
          "au": "E5D2",
          "docomo": "",
          "google": "FEB32",
          "image": "1f19a.png",
          "name": "SQUARED VS",
          "sheet_x": 0,
          "sheet_y": 29,
          "short_name": "vs",
          "short_names": [
              "vs"
          ],
          "softbank": "E12E",
          "text": null,
          "unified": "1F19A"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB24",
          "image": "1f201.png",
          "name": "SQUARED KATAKANA KOKO",
          "sheet_x": 1,
          "sheet_y": 10,
          "short_name": "koko",
          "short_names": [
              "koko"
          ],
          "softbank": "E203",
          "text": null,
          "unified": "1F201"
      },
      {
          "au": "EA87",
          "docomo": "",
          "google": "FEB3F",
          "image": "1f202.png",
          "name": "SQUARED KATAKANA SA",
          "sheet_x": 1,
          "sheet_y": 11,
          "short_name": "sa",
          "short_names": [
              "sa"
          ],
          "softbank": "E228",
          "text": null,
          "unified": "1F202"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB3A",
          "image": "1f21a.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-7121",
          "sheet_x": 1,
          "sheet_y": 12,
          "short_name": "u7121",
          "short_names": [
              "u7121"
          ],
          "softbank": "E216",
          "text": null,
          "unified": "1F21A"
      },
      {
          "au": "EA8B",
          "docomo": "",
          "google": "FEB40",
          "image": "1f22f.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-6307",
          "sheet_x": 1,
          "sheet_y": 13,
          "short_name": "u6307",
          "short_names": [
              "u6307"
          ],
          "softbank": "E22C",
          "text": null,
          "unified": "1F22F"
      },
      {
          "au": "",
          "docomo": "E738",
          "google": "FEB2E",
          "image": "1f232.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-7981",
          "sheet_x": 1,
          "sheet_y": 14,
          "short_name": "u7981",
          "short_names": [
              "u7981"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F232"
      },
      {
          "au": "EA8A",
          "docomo": "E739",
          "google": "FEB2F",
          "image": "1f233.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A",
          "sheet_x": 1,
          "sheet_y": 15,
          "short_name": "u7a7a",
          "short_names": [
              "u7a7a"
          ],
          "softbank": "E22B",
          "text": null,
          "unified": "1F233"
      },
      {
          "au": "",
          "docomo": "E73A",
          "google": "FEB30",
          "image": "1f234.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-5408",
          "sheet_x": 1,
          "sheet_y": 16,
          "short_name": "u5408",
          "short_names": [
              "u5408"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F234"
      },
      {
          "au": "EA89",
          "docomo": "E73B",
          "google": "FEB31",
          "image": "1f235.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-6E80",
          "sheet_x": 1,
          "sheet_y": 17,
          "short_name": "u6e80",
          "short_names": [
              "u6e80"
          ],
          "softbank": "E22A",
          "text": null,
          "unified": "1F235"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB39",
          "image": "1f236.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-6709",
          "sheet_x": 1,
          "sheet_y": 18,
          "short_name": "u6709",
          "short_names": [
              "u6709"
          ],
          "softbank": "E215",
          "text": null,
          "unified": "1F236"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB3B",
          "image": "1f237.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-6708",
          "sheet_x": 1,
          "sheet_y": 19,
          "short_name": "u6708",
          "short_names": [
              "u6708"
          ],
          "softbank": "E217",
          "text": null,
          "unified": "1F237"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB3C",
          "image": "1f238.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-7533",
          "sheet_x": 1,
          "sheet_y": 20,
          "short_name": "u7533",
          "short_names": [
              "u7533"
          ],
          "softbank": "E218",
          "text": null,
          "unified": "1F238"
      },
      {
          "au": "EA86",
          "docomo": "",
          "google": "FEB3E",
          "image": "1f239.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-5272",
          "sheet_x": 1,
          "sheet_y": 21,
          "short_name": "u5272",
          "short_names": [
              "u5272"
          ],
          "softbank": "E227",
          "text": null,
          "unified": "1F239"
      },
      {
          "au": "EA8C",
          "docomo": "",
          "google": "FEB41",
          "image": "1f23a.png",
          "name": "SQUARED CJK UNIFIED IDEOGRAPH-55B6",
          "sheet_x": 1,
          "sheet_y": 22,
          "short_name": "u55b6",
          "short_names": [
              "u55b6"
          ],
          "softbank": "E22D",
          "text": null,
          "unified": "1F23A"
      },
      {
          "au": "E4F7",
          "docomo": "",
          "google": "FEB3D",
          "image": "1f250.png",
          "name": "CIRCLED IDEOGRAPH ADVANTAGE",
          "sheet_x": 1,
          "sheet_y": 23,
          "short_name": "ideograph_advantage",
          "short_names": [
              "ideograph_advantage"
          ],
          "softbank": "E226",
          "text": null,
          "unified": "1F250"
      },
      {
          "au": "EB01",
          "docomo": "",
          "google": "FEB50",
          "image": "1f251.png",
          "name": "CIRCLED IDEOGRAPH ACCEPT",
          "sheet_x": 1,
          "sheet_y": 24,
          "short_name": "accept",
          "short_names": [
              "accept"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F251"
      },
      {
          "au": "E469",
          "docomo": "E643",
          "google": "FE005",
          "image": "1f300.png",
          "name": "CYCLONE",
          "sheet_x": 1,
          "sheet_y": 25,
          "short_name": "cyclone",
          "short_names": [
              "cyclone"
          ],
          "softbank": "E443",
          "text": null,
          "unified": "1F300"
      },
      {
          "au": "E598",
          "docomo": "E644",
          "google": "FE006",
          "image": "1f301.png",
          "name": "FOGGY",
          "sheet_x": 1,
          "sheet_y": 26,
          "short_name": "foggy",
          "short_names": [
              "foggy"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F301"
      },
      {
          "au": "EAE8",
          "docomo": "E645",
          "google": "FE007",
          "image": "1f302.png",
          "name": "CLOSED UMBRELLA",
          "sheet_x": 1,
          "sheet_y": 27,
          "short_name": "closed_umbrella",
          "short_names": [
              "closed_umbrella"
          ],
          "softbank": "E43C",
          "text": null,
          "unified": "1F302"
      },
      {
          "au": "EAF1",
          "docomo": "E6B3",
          "google": "FE008",
          "image": "1f303.png",
          "name": "NIGHT WITH STARS",
          "sheet_x": 1,
          "sheet_y": 28,
          "short_name": "stars",
          "short_names": [
              "stars"
          ],
          "softbank": "E44B",
          "text": null,
          "unified": "1F303"
      },
      {
          "au": "EAF4",
          "docomo": "E63E",
          "google": "FE009",
          "image": "1f304.png",
          "name": "SUNRISE OVER MOUNTAINS",
          "sheet_x": 1,
          "sheet_y": 29,
          "short_name": "sunrise_over_mountains",
          "short_names": [
              "sunrise_over_mountains"
          ],
          "softbank": "E04D",
          "text": null,
          "unified": "1F304"
      },
      {
          "au": "EAF4",
          "docomo": "E63E",
          "google": "FE00A",
          "image": "1f305.png",
          "name": "SUNRISE",
          "sheet_x": 2,
          "sheet_y": 0,
          "short_name": "sunrise",
          "short_names": [
              "sunrise"
          ],
          "softbank": "E449",
          "text": null,
          "unified": "1F305"
      },
      {
          "au": "E5DA",
          "docomo": "",
          "google": "FE00B",
          "image": "1f306.png",
          "name": "CITYSCAPE AT DUSK",
          "sheet_x": 2,
          "sheet_y": 1,
          "short_name": "city_sunset",
          "short_names": [
              "city_sunset"
          ],
          "softbank": "E146",
          "text": null,
          "unified": "1F306"
      },
      {
          "au": "E5DA",
          "docomo": "E63E",
          "google": "FE00C",
          "image": "1f307.png",
          "name": "SUNSET OVER BUILDINGS",
          "sheet_x": 2,
          "sheet_y": 2,
          "short_name": "city_sunrise",
          "short_names": [
              "city_sunrise"
          ],
          "softbank": "E44A",
          "text": null,
          "unified": "1F307"
      },
      {
          "au": "EAF2",
          "docomo": "",
          "google": "FE00D",
          "image": "1f308.png",
          "name": "RAINBOW",
          "sheet_x": 2,
          "sheet_y": 3,
          "short_name": "rainbow",
          "short_names": [
              "rainbow"
          ],
          "softbank": "E44C",
          "text": null,
          "unified": "1F308"
      },
      {
          "au": "E4BF",
          "docomo": "E6B3",
          "google": "FE010",
          "image": "1f309.png",
          "name": "BRIDGE AT NIGHT",
          "sheet_x": 2,
          "sheet_y": 4,
          "short_name": "bridge_at_night",
          "short_names": [
              "bridge_at_night"
          ],
          "softbank": "E44B",
          "text": null,
          "unified": "1F309"
      },
      {
          "au": "EB7C",
          "docomo": "E73F",
          "google": "FE038",
          "image": "1f30a.png",
          "name": "WATER WAVE",
          "sheet_x": 2,
          "sheet_y": 5,
          "short_name": "ocean",
          "short_names": [
              "ocean"
          ],
          "softbank": "E43E",
          "text": null,
          "unified": "1F30A"
      },
      {
          "au": "EB53",
          "docomo": "",
          "google": "FE03A",
          "image": "1f30b.png",
          "name": "VOLCANO",
          "sheet_x": 2,
          "sheet_y": 6,
          "short_name": "volcano",
          "short_names": [
              "volcano"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F30B"
      },
      {
          "au": "EB5F",
          "docomo": "E6B3",
          "google": "FE03B",
          "image": "1f30c.png",
          "name": "MILKY WAY",
          "sheet_x": 2,
          "sheet_y": 7,
          "short_name": "milky_way",
          "short_names": [
              "milky_way"
          ],
          "softbank": "E44B",
          "text": null,
          "unified": "1F30C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f30d.png",
          "name": "EARTH GLOBE EUROPE-AFRICA",
          "sheet_x": 2,
          "sheet_y": 8,
          "short_name": "earth_africa",
          "short_names": [
              "earth_africa"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F30D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f30e.png",
          "name": "EARTH GLOBE AMERICAS",
          "sheet_x": 2,
          "sheet_y": 9,
          "short_name": "earth_americas",
          "short_names": [
              "earth_americas"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F30E"
      },
      {
          "au": "E5B3",
          "docomo": "",
          "google": "FE039",
          "image": "1f30f.png",
          "name": "EARTH GLOBE ASIA-AUSTRALIA",
          "sheet_x": 2,
          "sheet_y": 10,
          "short_name": "earth_asia",
          "short_names": [
              "earth_asia"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F30F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f310.png",
          "name": "GLOBE WITH MERIDIANS",
          "sheet_x": 2,
          "sheet_y": 11,
          "short_name": "globe_with_meridians",
          "short_names": [
              "globe_with_meridians"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F310"
      },
      {
          "au": "E5A8",
          "docomo": "E69C",
          "google": "FE011",
          "image": "1f311.png",
          "name": "NEW MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 12,
          "short_name": "new_moon",
          "short_names": [
              "new_moon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F311"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f312.png",
          "name": "WAXING CRESCENT MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 13,
          "short_name": "waxing_crescent_moon",
          "short_names": [
              "waxing_crescent_moon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F312"
      },
      {
          "au": "E5AA",
          "docomo": "E69E",
          "google": "FE013",
          "image": "1f313.png",
          "name": "FIRST QUARTER MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 14,
          "short_name": "first_quarter_moon",
          "short_names": [
              "first_quarter_moon"
          ],
          "softbank": "E04C",
          "text": null,
          "unified": "1F313"
      },
      {
          "au": "E5A9",
          "docomo": "E69D",
          "google": "FE012",
          "image": "1f314.png",
          "name": "WAXING GIBBOUS MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 15,
          "short_name": "moon",
          "short_names": [
              "moon",
              "waxing_gibbous_moon"
          ],
          "softbank": "E04C",
          "text": null,
          "unified": "1F314"
      },
      {
          "au": "",
          "docomo": "E6A0",
          "google": "FE015",
          "image": "1f315.png",
          "name": "FULL MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 16,
          "short_name": "full_moon",
          "short_names": [
              "full_moon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F315"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f316.png",
          "name": "WANING GIBBOUS MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 17,
          "short_name": "waning_gibbous_moon",
          "short_names": [
              "waning_gibbous_moon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F316"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f317.png",
          "name": "LAST QUARTER MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 18,
          "short_name": "last_quarter_moon",
          "short_names": [
              "last_quarter_moon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F317"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f318.png",
          "name": "WANING CRESCENT MOON SYMBOL",
          "sheet_x": 2,
          "sheet_y": 19,
          "short_name": "waning_crescent_moon",
          "short_names": [
              "waning_crescent_moon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F318"
      },
      {
          "au": "E486",
          "docomo": "E69F",
          "google": "FE014",
          "image": "1f319.png",
          "name": "CRESCENT MOON",
          "sheet_x": 2,
          "sheet_y": 20,
          "short_name": "crescent_moon",
          "short_names": [
              "crescent_moon"
          ],
          "softbank": "E04C",
          "text": null,
          "unified": "1F319"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f31a.png",
          "name": "NEW MOON WITH FACE",
          "sheet_x": 2,
          "sheet_y": 21,
          "short_name": "new_moon_with_face",
          "short_names": [
              "new_moon_with_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F31A"
      },
      {
          "au": "E489",
          "docomo": "E69E",
          "google": "FE016",
          "image": "1f31b.png",
          "name": "FIRST QUARTER MOON WITH FACE",
          "sheet_x": 2,
          "sheet_y": 22,
          "short_name": "first_quarter_moon_with_face",
          "short_names": [
              "first_quarter_moon_with_face"
          ],
          "softbank": "E04C",
          "text": null,
          "unified": "1F31B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f31c.png",
          "name": "LAST QUARTER MOON WITH FACE",
          "sheet_x": 2,
          "sheet_y": 23,
          "short_name": "last_quarter_moon_with_face",
          "short_names": [
              "last_quarter_moon_with_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F31C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f31d.png",
          "name": "FULL MOON WITH FACE",
          "sheet_x": 2,
          "sheet_y": 24,
          "short_name": "full_moon_with_face",
          "short_names": [
              "full_moon_with_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F31D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f31e.png",
          "name": "SUN WITH FACE",
          "sheet_x": 2,
          "sheet_y": 25,
          "short_name": "sun_with_face",
          "short_names": [
              "sun_with_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F31E"
      },
      {
          "au": "E48B",
          "docomo": "",
          "google": "FEB69",
          "image": "1f31f.png",
          "name": "GLOWING STAR",
          "sheet_x": 2,
          "sheet_y": 26,
          "short_name": "star2",
          "short_names": [
              "star2"
          ],
          "softbank": "E335",
          "text": null,
          "unified": "1F31F"
      },
      {
          "au": "EB38",
          "docomo": "",
          "google": "FE04C",
          "image": "1f330.png",
          "name": "CHESTNUT",
          "sheet_x": 2,
          "sheet_y": 27,
          "short_name": "chestnut",
          "short_names": [
              "chestnut"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F330"
      },
      {
          "au": "EB7D",
          "docomo": "E746",
          "google": "FE03E",
          "image": "1f331.png",
          "name": "SEEDLING",
          "sheet_x": 2,
          "sheet_y": 28,
          "short_name": "seedling",
          "short_names": [
              "seedling"
          ],
          "softbank": "E110",
          "text": null,
          "unified": "1F331"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f332.png",
          "name": "EVERGREEN TREE",
          "sheet_x": 2,
          "sheet_y": 29,
          "short_name": "evergreen_tree",
          "short_names": [
              "evergreen_tree"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F332"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f333.png",
          "name": "DECIDUOUS TREE",
          "sheet_x": 3,
          "sheet_y": 0,
          "short_name": "deciduous_tree",
          "short_names": [
              "deciduous_tree"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F333"
      },
      {
          "au": "E4E2",
          "docomo": "",
          "google": "FE047",
          "image": "1f334.png",
          "name": "PALM TREE",
          "sheet_x": 3,
          "sheet_y": 1,
          "short_name": "palm_tree",
          "short_names": [
              "palm_tree"
          ],
          "softbank": "E307",
          "text": null,
          "unified": "1F334"
      },
      {
          "au": "EA96",
          "docomo": "",
          "google": "FE048",
          "image": "1f335.png",
          "name": "CACTUS",
          "sheet_x": 3,
          "sheet_y": 2,
          "short_name": "cactus",
          "short_names": [
              "cactus"
          ],
          "softbank": "E308",
          "text": null,
          "unified": "1F335"
      },
      {
          "au": "E4E4",
          "docomo": "E743",
          "google": "FE03D",
          "image": "1f337.png",
          "name": "TULIP",
          "sheet_x": 3,
          "sheet_y": 3,
          "short_name": "tulip",
          "short_names": [
              "tulip"
          ],
          "softbank": "E304",
          "text": null,
          "unified": "1F337"
      },
      {
          "au": "E4CA",
          "docomo": "E748",
          "google": "FE040",
          "image": "1f338.png",
          "name": "CHERRY BLOSSOM",
          "sheet_x": 3,
          "sheet_y": 4,
          "short_name": "cherry_blossom",
          "short_names": [
              "cherry_blossom"
          ],
          "softbank": "E030",
          "text": null,
          "unified": "1F338"
      },
      {
          "au": "E5BA",
          "docomo": "",
          "google": "FE041",
          "image": "1f339.png",
          "name": "ROSE",
          "sheet_x": 3,
          "sheet_y": 5,
          "short_name": "rose",
          "short_names": [
              "rose"
          ],
          "softbank": "E032",
          "text": null,
          "unified": "1F339"
      },
      {
          "au": "EA94",
          "docomo": "",
          "google": "FE045",
          "image": "1f33a.png",
          "name": "HIBISCUS",
          "sheet_x": 3,
          "sheet_y": 6,
          "short_name": "hibiscus",
          "short_names": [
              "hibiscus"
          ],
          "softbank": "E303",
          "text": null,
          "unified": "1F33A"
      },
      {
          "au": "E4E3",
          "docomo": "",
          "google": "FE046",
          "image": "1f33b.png",
          "name": "SUNFLOWER",
          "sheet_x": 3,
          "sheet_y": 7,
          "short_name": "sunflower",
          "short_names": [
              "sunflower"
          ],
          "softbank": "E305",
          "text": null,
          "unified": "1F33B"
      },
      {
          "au": "EB49",
          "docomo": "",
          "google": "FE04D",
          "image": "1f33c.png",
          "name": "BLOSSOM",
          "sheet_x": 3,
          "sheet_y": 8,
          "short_name": "blossom",
          "short_names": [
              "blossom"
          ],
          "softbank": "E305",
          "text": null,
          "unified": "1F33C"
      },
      {
          "au": "EB36",
          "docomo": "",
          "google": "FE04A",
          "image": "1f33d.png",
          "name": "EAR OF MAIZE",
          "sheet_x": 3,
          "sheet_y": 9,
          "short_name": "corn",
          "short_names": [
              "corn"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F33D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE049",
          "image": "1f33e.png",
          "name": "EAR OF RICE",
          "sheet_x": 3,
          "sheet_y": 10,
          "short_name": "ear_of_rice",
          "short_names": [
              "ear_of_rice"
          ],
          "softbank": "E444",
          "text": null,
          "unified": "1F33E"
      },
      {
          "au": "EB82",
          "docomo": "E741",
          "google": "FE04E",
          "image": "1f33f.png",
          "name": "HERB",
          "sheet_x": 3,
          "sheet_y": 11,
          "short_name": "herb",
          "short_names": [
              "herb"
          ],
          "softbank": "E110",
          "text": null,
          "unified": "1F33F"
      },
      {
          "au": "E513",
          "docomo": "E741",
          "google": "FE03C",
          "image": "1f340.png",
          "name": "FOUR LEAF CLOVER",
          "sheet_x": 3,
          "sheet_y": 12,
          "short_name": "four_leaf_clover",
          "short_names": [
              "four_leaf_clover"
          ],
          "softbank": "E110",
          "text": null,
          "unified": "1F340"
      },
      {
          "au": "E4CE",
          "docomo": "E747",
          "google": "FE03F",
          "image": "1f341.png",
          "name": "MAPLE LEAF",
          "sheet_x": 3,
          "sheet_y": 13,
          "short_name": "maple_leaf",
          "short_names": [
              "maple_leaf"
          ],
          "softbank": "E118",
          "text": null,
          "unified": "1F341"
      },
      {
          "au": "E5CD",
          "docomo": "E747",
          "google": "FE042",
          "image": "1f342.png",
          "name": "FALLEN LEAF",
          "sheet_x": 3,
          "sheet_y": 14,
          "short_name": "fallen_leaf",
          "short_names": [
              "fallen_leaf"
          ],
          "softbank": "E119",
          "text": null,
          "unified": "1F342"
      },
      {
          "au": "E5CD",
          "docomo": "",
          "google": "FE043",
          "image": "1f343.png",
          "name": "LEAF FLUTTERING IN WIND",
          "sheet_x": 3,
          "sheet_y": 15,
          "short_name": "leaves",
          "short_names": [
              "leaves"
          ],
          "softbank": "E447",
          "text": null,
          "unified": "1F343"
      },
      {
          "au": "EB37",
          "docomo": "",
          "google": "FE04B",
          "image": "1f344.png",
          "name": "MUSHROOM",
          "sheet_x": 3,
          "sheet_y": 16,
          "short_name": "mushroom",
          "short_names": [
              "mushroom"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F344"
      },
      {
          "au": "EABB",
          "docomo": "",
          "google": "FE055",
          "image": "1f345.png",
          "name": "TOMATO",
          "sheet_x": 3,
          "sheet_y": 17,
          "short_name": "tomato",
          "short_names": [
              "tomato"
          ],
          "softbank": "E349",
          "text": null,
          "unified": "1F345"
      },
      {
          "au": "EABC",
          "docomo": "",
          "google": "FE056",
          "image": "1f346.png",
          "name": "AUBERGINE",
          "sheet_x": 3,
          "sheet_y": 18,
          "short_name": "eggplant",
          "short_names": [
              "eggplant"
          ],
          "softbank": "E34A",
          "text": null,
          "unified": "1F346"
      },
      {
          "au": "EB34",
          "docomo": "",
          "google": "FE059",
          "image": "1f347.png",
          "name": "GRAPES",
          "sheet_x": 3,
          "sheet_y": 19,
          "short_name": "grapes",
          "short_names": [
              "grapes"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F347"
      },
      {
          "au": "EB32",
          "docomo": "",
          "google": "FE057",
          "image": "1f348.png",
          "name": "MELON",
          "sheet_x": 3,
          "sheet_y": 20,
          "short_name": "melon",
          "short_names": [
              "melon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F348"
      },
      {
          "au": "E4CD",
          "docomo": "",
          "google": "FE054",
          "image": "1f349.png",
          "name": "WATERMELON",
          "sheet_x": 3,
          "sheet_y": 21,
          "short_name": "watermelon",
          "short_names": [
              "watermelon"
          ],
          "softbank": "E348",
          "text": null,
          "unified": "1F349"
      },
      {
          "au": "EABA",
          "docomo": "",
          "google": "FE052",
          "image": "1f34a.png",
          "name": "TANGERINE",
          "sheet_x": 3,
          "sheet_y": 22,
          "short_name": "tangerine",
          "short_names": [
              "tangerine"
          ],
          "softbank": "E346",
          "text": null,
          "unified": "1F34A"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f34b.png",
          "name": "LEMON",
          "sheet_x": 3,
          "sheet_y": 23,
          "short_name": "lemon",
          "short_names": [
              "lemon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F34B"
      },
      {
          "au": "EB35",
          "docomo": "E744",
          "google": "FE050",
          "image": "1f34c.png",
          "name": "BANANA",
          "sheet_x": 3,
          "sheet_y": 24,
          "short_name": "banana",
          "short_names": [
              "banana"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F34C"
      },
      {
          "au": "EB33",
          "docomo": "",
          "google": "FE058",
          "image": "1f34d.png",
          "name": "PINEAPPLE",
          "sheet_x": 3,
          "sheet_y": 25,
          "short_name": "pineapple",
          "short_names": [
              "pineapple"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F34D"
      },
      {
          "au": "EAB9",
          "docomo": "E745",
          "google": "FE051",
          "image": "1f34e.png",
          "name": "RED APPLE",
          "sheet_x": 3,
          "sheet_y": 26,
          "short_name": "apple",
          "short_names": [
              "apple"
          ],
          "softbank": "E345",
          "text": null,
          "unified": "1F34E"
      },
      {
          "au": "EB5A",
          "docomo": "E745",
          "google": "FE05B",
          "image": "1f34f.png",
          "name": "GREEN APPLE",
          "sheet_x": 3,
          "sheet_y": 27,
          "short_name": "green_apple",
          "short_names": [
              "green_apple"
          ],
          "softbank": "E345",
          "text": null,
          "unified": "1F34F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f350.png",
          "name": "PEAR",
          "sheet_x": 3,
          "sheet_y": 28,
          "short_name": "pear",
          "short_names": [
              "pear"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F350"
      },
      {
          "au": "EB39",
          "docomo": "",
          "google": "FE05A",
          "image": "1f351.png",
          "name": "PEACH",
          "sheet_x": 3,
          "sheet_y": 29,
          "short_name": "peach",
          "short_names": [
              "peach"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F351"
      },
      {
          "au": "E4D2",
          "docomo": "E742",
          "google": "FE04F",
          "image": "1f352.png",
          "name": "CHERRIES",
          "sheet_x": 4,
          "sheet_y": 0,
          "short_name": "cherries",
          "short_names": [
              "cherries"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F352"
      },
      {
          "au": "E4D4",
          "docomo": "",
          "google": "FE053",
          "image": "1f353.png",
          "name": "STRAWBERRY",
          "sheet_x": 4,
          "sheet_y": 1,
          "short_name": "strawberry",
          "short_names": [
              "strawberry"
          ],
          "softbank": "E347",
          "text": null,
          "unified": "1F353"
      },
      {
          "au": "E4D6",
          "docomo": "E673",
          "google": "FE960",
          "image": "1f354.png",
          "name": "HAMBURGER",
          "sheet_x": 4,
          "sheet_y": 2,
          "short_name": "hamburger",
          "short_names": [
              "hamburger"
          ],
          "softbank": "E120",
          "text": null,
          "unified": "1F354"
      },
      {
          "au": "EB3B",
          "docomo": "",
          "google": "FE975",
          "image": "1f355.png",
          "name": "SLICE OF PIZZA",
          "sheet_x": 4,
          "sheet_y": 3,
          "short_name": "pizza",
          "short_names": [
              "pizza"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F355"
      },
      {
          "au": "E4C4",
          "docomo": "",
          "google": "FE972",
          "image": "1f356.png",
          "name": "MEAT ON BONE",
          "sheet_x": 4,
          "sheet_y": 4,
          "short_name": "meat_on_bone",
          "short_names": [
              "meat_on_bone"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F356"
      },
      {
          "au": "EB3C",
          "docomo": "",
          "google": "FE976",
          "image": "1f357.png",
          "name": "POULTRY LEG",
          "sheet_x": 4,
          "sheet_y": 5,
          "short_name": "poultry_leg",
          "short_names": [
              "poultry_leg"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F357"
      },
      {
          "au": "EAB3",
          "docomo": "",
          "google": "FE969",
          "image": "1f358.png",
          "name": "RICE CRACKER",
          "sheet_x": 4,
          "sheet_y": 6,
          "short_name": "rice_cracker",
          "short_names": [
              "rice_cracker"
          ],
          "softbank": "E33D",
          "text": null,
          "unified": "1F358"
      },
      {
          "au": "E4D5",
          "docomo": "E749",
          "google": "FE961",
          "image": "1f359.png",
          "name": "RICE BALL",
          "sheet_x": 4,
          "sheet_y": 7,
          "short_name": "rice_ball",
          "short_names": [
              "rice_ball"
          ],
          "softbank": "E342",
          "text": null,
          "unified": "1F359"
      },
      {
          "au": "EAB4",
          "docomo": "E74C",
          "google": "FE96A",
          "image": "1f35a.png",
          "name": "COOKED RICE",
          "sheet_x": 4,
          "sheet_y": 8,
          "short_name": "rice",
          "short_names": [
              "rice"
          ],
          "softbank": "E33E",
          "text": null,
          "unified": "1F35A"
      },
      {
          "au": "EAB6",
          "docomo": "",
          "google": "FE96C",
          "image": "1f35b.png",
          "name": "CURRY AND RICE",
          "sheet_x": 4,
          "sheet_y": 9,
          "short_name": "curry",
          "short_names": [
              "curry"
          ],
          "softbank": "E341",
          "text": null,
          "unified": "1F35B"
      },
      {
          "au": "E5B4",
          "docomo": "E74C",
          "google": "FE963",
          "image": "1f35c.png",
          "name": "STEAMING BOWL",
          "sheet_x": 4,
          "sheet_y": 10,
          "short_name": "ramen",
          "short_names": [
              "ramen"
          ],
          "softbank": "E340",
          "text": null,
          "unified": "1F35C"
      },
      {
          "au": "EAB5",
          "docomo": "",
          "google": "FE96B",
          "image": "1f35d.png",
          "name": "SPAGHETTI",
          "sheet_x": 4,
          "sheet_y": 11,
          "short_name": "spaghetti",
          "short_names": [
              "spaghetti"
          ],
          "softbank": "E33F",
          "text": null,
          "unified": "1F35D"
      },
      {
          "au": "EAAF",
          "docomo": "E74D",
          "google": "FE964",
          "image": "1f35e.png",
          "name": "BREAD",
          "sheet_x": 4,
          "sheet_y": 12,
          "short_name": "bread",
          "short_names": [
              "bread"
          ],
          "softbank": "E339",
          "text": null,
          "unified": "1F35E"
      },
      {
          "au": "EAB1",
          "docomo": "",
          "google": "FE967",
          "image": "1f35f.png",
          "name": "FRENCH FRIES",
          "sheet_x": 4,
          "sheet_y": 13,
          "short_name": "fries",
          "short_names": [
              "fries"
          ],
          "softbank": "E33B",
          "text": null,
          "unified": "1F35F"
      },
      {
          "au": "EB3A",
          "docomo": "",
          "google": "FE974",
          "image": "1f360.png",
          "name": "ROASTED SWEET POTATO",
          "sheet_x": 4,
          "sheet_y": 14,
          "short_name": "sweet_potato",
          "short_names": [
              "sweet_potato"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F360"
      },
      {
          "au": "EAB2",
          "docomo": "",
          "google": "FE968",
          "image": "1f361.png",
          "name": "DANGO",
          "sheet_x": 4,
          "sheet_y": 15,
          "short_name": "dango",
          "short_names": [
              "dango"
          ],
          "softbank": "E33C",
          "text": null,
          "unified": "1F361"
      },
      {
          "au": "EAB7",
          "docomo": "",
          "google": "FE96D",
          "image": "1f362.png",
          "name": "ODEN",
          "sheet_x": 4,
          "sheet_y": 16,
          "short_name": "oden",
          "short_names": [
              "oden"
          ],
          "softbank": "E343",
          "text": null,
          "unified": "1F362"
      },
      {
          "au": "EAB8",
          "docomo": "",
          "google": "FE96E",
          "image": "1f363.png",
          "name": "SUSHI",
          "sheet_x": 4,
          "sheet_y": 17,
          "short_name": "sushi",
          "short_names": [
              "sushi"
          ],
          "softbank": "E344",
          "text": null,
          "unified": "1F363"
      },
      {
          "au": "EB70",
          "docomo": "",
          "google": "FE97F",
          "image": "1f364.png",
          "name": "FRIED SHRIMP",
          "sheet_x": 4,
          "sheet_y": 18,
          "short_name": "fried_shrimp",
          "short_names": [
              "fried_shrimp"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F364"
      },
      {
          "au": "E4ED",
          "docomo": "E643",
          "google": "FE973",
          "image": "1f365.png",
          "name": "FISH CAKE WITH SWIRL DESIGN",
          "sheet_x": 4,
          "sheet_y": 19,
          "short_name": "fish_cake",
          "short_names": [
              "fish_cake"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F365"
      },
      {
          "au": "EAB0",
          "docomo": "",
          "google": "FE966",
          "image": "1f366.png",
          "name": "SOFT ICE CREAM",
          "sheet_x": 4,
          "sheet_y": 20,
          "short_name": "icecream",
          "short_names": [
              "icecream"
          ],
          "softbank": "E33A",
          "text": null,
          "unified": "1F366"
      },
      {
          "au": "EAEA",
          "docomo": "",
          "google": "FE971",
          "image": "1f367.png",
          "name": "SHAVED ICE",
          "sheet_x": 4,
          "sheet_y": 21,
          "short_name": "shaved_ice",
          "short_names": [
              "shaved_ice"
          ],
          "softbank": "E43F",
          "text": null,
          "unified": "1F367"
      },
      {
          "au": "EB4A",
          "docomo": "",
          "google": "FE977",
          "image": "1f368.png",
          "name": "ICE CREAM",
          "sheet_x": 4,
          "sheet_y": 22,
          "short_name": "ice_cream",
          "short_names": [
              "ice_cream"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F368"
      },
      {
          "au": "EB4B",
          "docomo": "",
          "google": "FE978",
          "image": "1f369.png",
          "name": "DOUGHNUT",
          "sheet_x": 4,
          "sheet_y": 23,
          "short_name": "doughnut",
          "short_names": [
              "doughnut"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F369"
      },
      {
          "au": "EB4C",
          "docomo": "",
          "google": "FE979",
          "image": "1f36a.png",
          "name": "COOKIE",
          "sheet_x": 4,
          "sheet_y": 24,
          "short_name": "cookie",
          "short_names": [
              "cookie"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F36A"
      },
      {
          "au": "EB4D",
          "docomo": "",
          "google": "FE97A",
          "image": "1f36b.png",
          "name": "CHOCOLATE BAR",
          "sheet_x": 4,
          "sheet_y": 25,
          "short_name": "chocolate_bar",
          "short_names": [
              "chocolate_bar"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F36B"
      },
      {
          "au": "EB4E",
          "docomo": "",
          "google": "FE97B",
          "image": "1f36c.png",
          "name": "CANDY",
          "sheet_x": 4,
          "sheet_y": 26,
          "short_name": "candy",
          "short_names": [
              "candy"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F36C"
      },
      {
          "au": "EB4F",
          "docomo": "",
          "google": "FE97C",
          "image": "1f36d.png",
          "name": "LOLLIPOP",
          "sheet_x": 4,
          "sheet_y": 27,
          "short_name": "lollipop",
          "short_names": [
              "lollipop"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F36D"
      },
      {
          "au": "EB56",
          "docomo": "",
          "google": "FE97D",
          "image": "1f36e.png",
          "name": "CUSTARD",
          "sheet_x": 4,
          "sheet_y": 28,
          "short_name": "custard",
          "short_names": [
              "custard"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F36E"
      },
      {
          "au": "EB59",
          "docomo": "",
          "google": "FE97E",
          "image": "1f36f.png",
          "name": "HONEY POT",
          "sheet_x": 4,
          "sheet_y": 29,
          "short_name": "honey_pot",
          "short_names": [
              "honey_pot"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F36F"
      },
      {
          "au": "E4D0",
          "docomo": "E74A",
          "google": "FE962",
          "image": "1f370.png",
          "name": "SHORTCAKE",
          "sheet_x": 5,
          "sheet_y": 0,
          "short_name": "cake",
          "short_names": [
              "cake"
          ],
          "softbank": "E046",
          "text": null,
          "unified": "1F370"
      },
      {
          "au": "EABD",
          "docomo": "",
          "google": "FE96F",
          "image": "1f371.png",
          "name": "BENTO BOX",
          "sheet_x": 5,
          "sheet_y": 1,
          "short_name": "bento",
          "short_names": [
              "bento"
          ],
          "softbank": "E34C",
          "text": null,
          "unified": "1F371"
      },
      {
          "au": "EABE",
          "docomo": "",
          "google": "FE970",
          "image": "1f372.png",
          "name": "POT OF FOOD",
          "sheet_x": 5,
          "sheet_y": 2,
          "short_name": "stew",
          "short_names": [
              "stew"
          ],
          "softbank": "E34D",
          "text": null,
          "unified": "1F372"
      },
      {
          "au": "E4D1",
          "docomo": "",
          "google": "FE965",
          "image": "1f373.png",
          "name": "COOKING",
          "sheet_x": 5,
          "sheet_y": 3,
          "short_name": "egg",
          "short_names": [
              "egg"
          ],
          "softbank": "E147",
          "text": null,
          "unified": "1F373"
      },
      {
          "au": "E4AC",
          "docomo": "E66F",
          "google": "FE980",
          "image": "1f374.png",
          "name": "FORK AND KNIFE",
          "sheet_x": 5,
          "sheet_y": 4,
          "short_name": "fork_and_knife",
          "short_names": [
              "fork_and_knife"
          ],
          "softbank": "E043",
          "text": null,
          "unified": "1F374"
      },
      {
          "au": "EAAE",
          "docomo": "E71E",
          "google": "FE984",
          "image": "1f375.png",
          "name": "TEACUP WITHOUT HANDLE",
          "sheet_x": 5,
          "sheet_y": 5,
          "short_name": "tea",
          "short_names": [
              "tea"
          ],
          "softbank": "E338",
          "text": null,
          "unified": "1F375"
      },
      {
          "au": "EA97",
          "docomo": "E74B",
          "google": "FE985",
          "image": "1f376.png",
          "name": "SAKE BOTTLE AND CUP",
          "sheet_x": 5,
          "sheet_y": 6,
          "short_name": "sake",
          "short_names": [
              "sake"
          ],
          "softbank": "E30B",
          "text": null,
          "unified": "1F376"
      },
      {
          "au": "E4C1",
          "docomo": "E756",
          "google": "FE986",
          "image": "1f377.png",
          "name": "WINE GLASS",
          "sheet_x": 5,
          "sheet_y": 7,
          "short_name": "wine_glass",
          "short_names": [
              "wine_glass"
          ],
          "softbank": "E044",
          "text": null,
          "unified": "1F377"
      },
      {
          "au": "E4C2",
          "docomo": "E671",
          "google": "FE982",
          "image": "1f378.png",
          "name": "COCKTAIL GLASS",
          "sheet_x": 5,
          "sheet_y": 8,
          "short_name": "cocktail",
          "short_names": [
              "cocktail"
          ],
          "softbank": "E044",
          "text": null,
          "unified": "1F378"
      },
      {
          "au": "EB3E",
          "docomo": "E671",
          "google": "FE988",
          "image": "1f379.png",
          "name": "TROPICAL DRINK",
          "sheet_x": 5,
          "sheet_y": 9,
          "short_name": "tropical_drink",
          "short_names": [
              "tropical_drink"
          ],
          "softbank": "E044",
          "text": null,
          "unified": "1F379"
      },
      {
          "au": "E4C3",
          "docomo": "E672",
          "google": "FE983",
          "image": "1f37a.png",
          "name": "BEER MUG",
          "sheet_x": 5,
          "sheet_y": 10,
          "short_name": "beer",
          "short_names": [
              "beer"
          ],
          "softbank": "E047",
          "text": null,
          "unified": "1F37A"
      },
      {
          "au": "EA98",
          "docomo": "E672",
          "google": "FE987",
          "image": "1f37b.png",
          "name": "CLINKING BEER MUGS",
          "sheet_x": 5,
          "sheet_y": 11,
          "short_name": "beers",
          "short_names": [
              "beers"
          ],
          "softbank": "E30C",
          "text": null,
          "unified": "1F37B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f37c.png",
          "name": "BABY BOTTLE",
          "sheet_x": 5,
          "sheet_y": 12,
          "short_name": "baby_bottle",
          "short_names": [
              "baby_bottle"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F37C"
      },
      {
          "au": "E59F",
          "docomo": "E684",
          "google": "FE50F",
          "image": "1f380.png",
          "name": "RIBBON",
          "sheet_x": 5,
          "sheet_y": 13,
          "short_name": "ribbon",
          "short_names": [
              "ribbon"
          ],
          "softbank": "E314",
          "text": null,
          "unified": "1F380"
      },
      {
          "au": "E4CF",
          "docomo": "E685",
          "google": "FE510",
          "image": "1f381.png",
          "name": "WRAPPED PRESENT",
          "sheet_x": 5,
          "sheet_y": 14,
          "short_name": "gift",
          "short_names": [
              "gift"
          ],
          "softbank": "E112",
          "text": null,
          "unified": "1F381"
      },
      {
          "au": "E5A0",
          "docomo": "E686",
          "google": "FE511",
          "image": "1f382.png",
          "name": "BIRTHDAY CAKE",
          "sheet_x": 5,
          "sheet_y": 15,
          "short_name": "birthday",
          "short_names": [
              "birthday"
          ],
          "softbank": "E34B",
          "text": null,
          "unified": "1F382"
      },
      {
          "au": "EAEE",
          "docomo": "",
          "google": "FE51F",
          "image": "1f383.png",
          "name": "JACK-O-LANTERN",
          "sheet_x": 5,
          "sheet_y": 16,
          "short_name": "jack_o_lantern",
          "short_names": [
              "jack_o_lantern"
          ],
          "softbank": "E445",
          "text": null,
          "unified": "1F383"
      },
      {
          "au": "E4C9",
          "docomo": "E6A4",
          "google": "FE512",
          "image": "1f384.png",
          "name": "CHRISTMAS TREE",
          "sheet_x": 5,
          "sheet_y": 17,
          "short_name": "christmas_tree",
          "short_names": [
              "christmas_tree"
          ],
          "softbank": "E033",
          "text": null,
          "unified": "1F384"
      },
      {
          "au": "EAF0",
          "docomo": "",
          "google": "FE513",
          "image": "1f385.png",
          "name": "FATHER CHRISTMAS",
          "sheet_x": 5,
          "sheet_y": 18,
          "short_name": "santa",
          "short_names": [
              "santa"
          ],
          "softbank": "E448",
          "text": null,
          "unified": "1F385"
      },
      {
          "au": "E5CC",
          "docomo": "",
          "google": "FE515",
          "image": "1f386.png",
          "name": "FIREWORKS",
          "sheet_x": 5,
          "sheet_y": 19,
          "short_name": "fireworks",
          "short_names": [
              "fireworks"
          ],
          "softbank": "E117",
          "text": null,
          "unified": "1F386"
      },
      {
          "au": "EAEB",
          "docomo": "",
          "google": "FE51D",
          "image": "1f387.png",
          "name": "FIREWORK SPARKLER",
          "sheet_x": 5,
          "sheet_y": 20,
          "short_name": "sparkler",
          "short_names": [
              "sparkler"
          ],
          "softbank": "E440",
          "text": null,
          "unified": "1F387"
      },
      {
          "au": "EA9B",
          "docomo": "",
          "google": "FE516",
          "image": "1f388.png",
          "name": "BALLOON",
          "sheet_x": 5,
          "sheet_y": 21,
          "short_name": "balloon",
          "short_names": [
              "balloon"
          ],
          "softbank": "E310",
          "text": null,
          "unified": "1F388"
      },
      {
          "au": "EA9C",
          "docomo": "",
          "google": "FE517",
          "image": "1f389.png",
          "name": "PARTY POPPER",
          "sheet_x": 5,
          "sheet_y": 22,
          "short_name": "tada",
          "short_names": [
              "tada"
          ],
          "softbank": "E312",
          "text": null,
          "unified": "1F389"
      },
      {
          "au": "E46F",
          "docomo": "",
          "google": "FE520",
          "image": "1f38a.png",
          "name": "CONFETTI BALL",
          "sheet_x": 5,
          "sheet_y": 23,
          "short_name": "confetti_ball",
          "short_names": [
              "confetti_ball"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F38A"
      },
      {
          "au": "EB3D",
          "docomo": "",
          "google": "FE521",
          "image": "1f38b.png",
          "name": "TANABATA TREE",
          "sheet_x": 5,
          "sheet_y": 24,
          "short_name": "tanabata_tree",
          "short_names": [
              "tanabata_tree"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F38B"
      },
      {
          "au": "E5D9",
          "docomo": "",
          "google": "FE514",
          "image": "1f38c.png",
          "name": "CROSSED FLAGS",
          "sheet_x": 5,
          "sheet_y": 25,
          "short_name": "crossed_flags",
          "short_names": [
              "crossed_flags"
          ],
          "softbank": "E143",
          "text": null,
          "unified": "1F38C"
      },
      {
          "au": "EAE3",
          "docomo": "",
          "google": "FE518",
          "image": "1f38d.png",
          "name": "PINE DECORATION",
          "sheet_x": 5,
          "sheet_y": 26,
          "short_name": "bamboo",
          "short_names": [
              "bamboo"
          ],
          "softbank": "E436",
          "text": null,
          "unified": "1F38D"
      },
      {
          "au": "EAE4",
          "docomo": "",
          "google": "FE519",
          "image": "1f38e.png",
          "name": "JAPANESE DOLLS",
          "sheet_x": 5,
          "sheet_y": 27,
          "short_name": "dolls",
          "short_names": [
              "dolls"
          ],
          "softbank": "E438",
          "text": null,
          "unified": "1F38E"
      },
      {
          "au": "EAE7",
          "docomo": "",
          "google": "FE51C",
          "image": "1f38f.png",
          "name": "CARP STREAMER",
          "sheet_x": 5,
          "sheet_y": 28,
          "short_name": "flags",
          "short_names": [
              "flags"
          ],
          "softbank": "E43B",
          "text": null,
          "unified": "1F38F"
      },
      {
          "au": "EAED",
          "docomo": "",
          "google": "FE51E",
          "image": "1f390.png",
          "name": "WIND CHIME",
          "sheet_x": 5,
          "sheet_y": 29,
          "short_name": "wind_chime",
          "short_names": [
              "wind_chime"
          ],
          "softbank": "E442",
          "text": null,
          "unified": "1F390"
      },
      {
          "au": "EAEF",
          "docomo": "",
          "google": "FE017",
          "image": "1f391.png",
          "name": "MOON VIEWING CEREMONY",
          "sheet_x": 6,
          "sheet_y": 0,
          "short_name": "rice_scene",
          "short_names": [
              "rice_scene"
          ],
          "softbank": "E446",
          "text": null,
          "unified": "1F391"
      },
      {
          "au": "EAE6",
          "docomo": "",
          "google": "FE51B",
          "image": "1f392.png",
          "name": "SCHOOL SATCHEL",
          "sheet_x": 6,
          "sheet_y": 1,
          "short_name": "school_satchel",
          "short_names": [
              "school_satchel"
          ],
          "softbank": "E43A",
          "text": null,
          "unified": "1F392"
      },
      {
          "au": "EAE5",
          "docomo": "",
          "google": "FE51A",
          "image": "1f393.png",
          "name": "GRADUATION CAP",
          "sheet_x": 6,
          "sheet_y": 2,
          "short_name": "mortar_board",
          "short_names": [
              "mortar_board"
          ],
          "softbank": "E439",
          "text": null,
          "unified": "1F393"
      },
      {
          "au": "",
          "docomo": "E679",
          "google": "FE7FC",
          "image": "1f3a0.png",
          "name": "CAROUSEL HORSE",
          "sheet_x": 6,
          "sheet_y": 3,
          "short_name": "carousel_horse",
          "short_names": [
              "carousel_horse"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3A0"
      },
      {
          "au": "E46D",
          "docomo": "",
          "google": "FE7FD",
          "image": "1f3a1.png",
          "name": "FERRIS WHEEL",
          "sheet_x": 6,
          "sheet_y": 4,
          "short_name": "ferris_wheel",
          "short_names": [
              "ferris_wheel"
          ],
          "softbank": "E124",
          "text": null,
          "unified": "1F3A1"
      },
      {
          "au": "EAE2",
          "docomo": "",
          "google": "FE7FE",
          "image": "1f3a2.png",
          "name": "ROLLER COASTER",
          "sheet_x": 6,
          "sheet_y": 5,
          "short_name": "roller_coaster",
          "short_names": [
              "roller_coaster"
          ],
          "softbank": "E433",
          "text": null,
          "unified": "1F3A2"
      },
      {
          "au": "EB42",
          "docomo": "E751",
          "google": "FE7FF",
          "image": "1f3a3.png",
          "name": "FISHING POLE AND FISH",
          "sheet_x": 6,
          "sheet_y": 6,
          "short_name": "fishing_pole_and_fish",
          "short_names": [
              "fishing_pole_and_fish"
          ],
          "softbank": "E019",
          "text": null,
          "unified": "1F3A3"
      },
      {
          "au": "E503",
          "docomo": "E676",
          "google": "FE800",
          "image": "1f3a4.png",
          "name": "MICROPHONE",
          "sheet_x": 6,
          "sheet_y": 7,
          "short_name": "microphone",
          "short_names": [
              "microphone"
          ],
          "softbank": "E03C",
          "text": null,
          "unified": "1F3A4"
      },
      {
          "au": "E517",
          "docomo": "E677",
          "google": "FE801",
          "image": "1f3a5.png",
          "name": "MOVIE CAMERA",
          "sheet_x": 6,
          "sheet_y": 8,
          "short_name": "movie_camera",
          "short_names": [
              "movie_camera"
          ],
          "softbank": "E03D",
          "text": null,
          "unified": "1F3A5"
      },
      {
          "au": "E517",
          "docomo": "E677",
          "google": "FE802",
          "image": "1f3a6.png",
          "name": "CINEMA",
          "sheet_x": 6,
          "sheet_y": 9,
          "short_name": "cinema",
          "short_names": [
              "cinema"
          ],
          "softbank": "E507",
          "text": null,
          "unified": "1F3A6"
      },
      {
          "au": "E508",
          "docomo": "E67A",
          "google": "FE803",
          "image": "1f3a7.png",
          "name": "HEADPHONE",
          "sheet_x": 6,
          "sheet_y": 10,
          "short_name": "headphones",
          "short_names": [
              "headphones"
          ],
          "softbank": "E30A",
          "text": null,
          "unified": "1F3A7"
      },
      {
          "au": "E59C",
          "docomo": "E67B",
          "google": "FE804",
          "image": "1f3a8.png",
          "name": "ARTIST PALETTE",
          "sheet_x": 6,
          "sheet_y": 11,
          "short_name": "art",
          "short_names": [
              "art"
          ],
          "softbank": "E502",
          "text": null,
          "unified": "1F3A8"
      },
      {
          "au": "EAF5",
          "docomo": "E67C",
          "google": "FE805",
          "image": "1f3a9.png",
          "name": "TOP HAT",
          "sheet_x": 6,
          "sheet_y": 12,
          "short_name": "tophat",
          "short_names": [
              "tophat"
          ],
          "softbank": "E503",
          "text": null,
          "unified": "1F3A9"
      },
      {
          "au": "E59E",
          "docomo": "E67D",
          "google": "FE806",
          "image": "1f3aa.png",
          "name": "CIRCUS TENT",
          "sheet_x": 6,
          "sheet_y": 13,
          "short_name": "circus_tent",
          "short_names": [
              "circus_tent"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3AA"
      },
      {
          "au": "E49E",
          "docomo": "E67E",
          "google": "FE807",
          "image": "1f3ab.png",
          "name": "TICKET",
          "sheet_x": 6,
          "sheet_y": 14,
          "short_name": "ticket",
          "short_names": [
              "ticket"
          ],
          "softbank": "E125",
          "text": null,
          "unified": "1F3AB"
      },
      {
          "au": "E4BE",
          "docomo": "E6AC",
          "google": "FE808",
          "image": "1f3ac.png",
          "name": "CLAPPER BOARD",
          "sheet_x": 6,
          "sheet_y": 15,
          "short_name": "clapper",
          "short_names": [
              "clapper"
          ],
          "softbank": "E324",
          "text": null,
          "unified": "1F3AC"
      },
      {
          "au": "E59D",
          "docomo": "",
          "google": "FE809",
          "image": "1f3ad.png",
          "name": "PERFORMING ARTS",
          "sheet_x": 6,
          "sheet_y": 16,
          "short_name": "performing_arts",
          "short_names": [
              "performing_arts"
          ],
          "softbank": "E503",
          "text": null,
          "unified": "1F3AD"
      },
      {
          "au": "E4C6",
          "docomo": "E68B",
          "google": "FE80A",
          "image": "1f3ae.png",
          "name": "VIDEO GAME",
          "sheet_x": 6,
          "sheet_y": 17,
          "short_name": "video_game",
          "short_names": [
              "video_game"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3AE"
      },
      {
          "au": "E4C5",
          "docomo": "",
          "google": "FE80C",
          "image": "1f3af.png",
          "name": "DIRECT HIT",
          "sheet_x": 6,
          "sheet_y": 18,
          "short_name": "dart",
          "short_names": [
              "dart"
          ],
          "softbank": "E130",
          "text": null,
          "unified": "1F3AF"
      },
      {
          "au": "E46E",
          "docomo": "",
          "google": "FE80D",
          "image": "1f3b0.png",
          "name": "SLOT MACHINE",
          "sheet_x": 6,
          "sheet_y": 19,
          "short_name": "slot_machine",
          "short_names": [
              "slot_machine"
          ],
          "softbank": "E133",
          "text": null,
          "unified": "1F3B0"
      },
      {
          "au": "EADD",
          "docomo": "",
          "google": "FE80E",
          "image": "1f3b1.png",
          "name": "BILLIARDS",
          "sheet_x": 6,
          "sheet_y": 20,
          "short_name": "8ball",
          "short_names": [
              "8ball"
          ],
          "softbank": "E42C",
          "text": null,
          "unified": "1F3B1"
      },
      {
          "au": "E4C8",
          "docomo": "",
          "google": "FE80F",
          "image": "1f3b2.png",
          "name": "GAME DIE",
          "sheet_x": 6,
          "sheet_y": 21,
          "short_name": "game_die",
          "short_names": [
              "game_die"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3B2"
      },
      {
          "au": "EB43",
          "docomo": "",
          "google": "FE810",
          "image": "1f3b3.png",
          "name": "BOWLING",
          "sheet_x": 6,
          "sheet_y": 22,
          "short_name": "bowling",
          "short_names": [
              "bowling"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3B3"
      },
      {
          "au": "EB6E",
          "docomo": "",
          "google": "FE811",
          "image": "1f3b4.png",
          "name": "FLOWER PLAYING CARDS",
          "sheet_x": 6,
          "sheet_y": 23,
          "short_name": "flower_playing_cards",
          "short_names": [
              "flower_playing_cards"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3B4"
      },
      {
          "au": "E5BE",
          "docomo": "E6F6",
          "google": "FE813",
          "image": "1f3b5.png",
          "name": "MUSICAL NOTE",
          "sheet_x": 6,
          "sheet_y": 24,
          "short_name": "musical_note",
          "short_names": [
              "musical_note"
          ],
          "softbank": "E03E",
          "text": null,
          "unified": "1F3B5"
      },
      {
          "au": "E505",
          "docomo": "E6FF",
          "google": "FE814",
          "image": "1f3b6.png",
          "name": "MULTIPLE MUSICAL NOTES",
          "sheet_x": 6,
          "sheet_y": 25,
          "short_name": "notes",
          "short_names": [
              "notes"
          ],
          "softbank": "E326",
          "text": null,
          "unified": "1F3B6"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE815",
          "image": "1f3b7.png",
          "name": "SAXOPHONE",
          "sheet_x": 6,
          "sheet_y": 26,
          "short_name": "saxophone",
          "short_names": [
              "saxophone"
          ],
          "softbank": "E040",
          "text": null,
          "unified": "1F3B7"
      },
      {
          "au": "E506",
          "docomo": "",
          "google": "FE816",
          "image": "1f3b8.png",
          "name": "GUITAR",
          "sheet_x": 6,
          "sheet_y": 27,
          "short_name": "guitar",
          "short_names": [
              "guitar"
          ],
          "softbank": "E041",
          "text": null,
          "unified": "1F3B8"
      },
      {
          "au": "EB40",
          "docomo": "",
          "google": "FE817",
          "image": "1f3b9.png",
          "name": "MUSICAL KEYBOARD",
          "sheet_x": 6,
          "sheet_y": 28,
          "short_name": "musical_keyboard",
          "short_names": [
              "musical_keyboard"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3B9"
      },
      {
          "au": "EADC",
          "docomo": "",
          "google": "FE818",
          "image": "1f3ba.png",
          "name": "TRUMPET",
          "sheet_x": 6,
          "sheet_y": 29,
          "short_name": "trumpet",
          "short_names": [
              "trumpet"
          ],
          "softbank": "E042",
          "text": null,
          "unified": "1F3BA"
      },
      {
          "au": "E507",
          "docomo": "",
          "google": "FE819",
          "image": "1f3bb.png",
          "name": "VIOLIN",
          "sheet_x": 7,
          "sheet_y": 0,
          "short_name": "violin",
          "short_names": [
              "violin"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3BB"
      },
      {
          "au": "EACC",
          "docomo": "E6FF",
          "google": "FE81A",
          "image": "1f3bc.png",
          "name": "MUSICAL SCORE",
          "sheet_x": 7,
          "sheet_y": 1,
          "short_name": "musical_score",
          "short_names": [
              "musical_score"
          ],
          "softbank": "E326",
          "text": null,
          "unified": "1F3BC"
      },
      {
          "au": "",
          "docomo": "E652",
          "google": "FE7D0",
          "image": "1f3bd.png",
          "name": "RUNNING SHIRT WITH SASH",
          "sheet_x": 7,
          "sheet_y": 2,
          "short_name": "running_shirt_with_sash",
          "short_names": [
              "running_shirt_with_sash"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3BD"
      },
      {
          "au": "E4B7",
          "docomo": "E655",
          "google": "FE7D3",
          "image": "1f3be.png",
          "name": "TENNIS RACQUET AND BALL",
          "sheet_x": 7,
          "sheet_y": 3,
          "short_name": "tennis",
          "short_names": [
              "tennis"
          ],
          "softbank": "E015",
          "text": null,
          "unified": "1F3BE"
      },
      {
          "au": "EAAC",
          "docomo": "E657",
          "google": "FE7D5",
          "image": "1f3bf.png",
          "name": "SKI AND SKI BOOT",
          "sheet_x": 7,
          "sheet_y": 4,
          "short_name": "ski",
          "short_names": [
              "ski"
          ],
          "softbank": "E013",
          "text": null,
          "unified": "1F3BF"
      },
      {
          "au": "E59A",
          "docomo": "E658",
          "google": "FE7D6",
          "image": "1f3c0.png",
          "name": "BASKETBALL AND HOOP",
          "sheet_x": 7,
          "sheet_y": 5,
          "short_name": "basketball",
          "short_names": [
              "basketball"
          ],
          "softbank": "E42A",
          "text": null,
          "unified": "1F3C0"
      },
      {
          "au": "E4B9",
          "docomo": "E659",
          "google": "FE7D7",
          "image": "1f3c1.png",
          "name": "CHEQUERED FLAG",
          "sheet_x": 7,
          "sheet_y": 6,
          "short_name": "checkered_flag",
          "short_names": [
              "checkered_flag"
          ],
          "softbank": "E132",
          "text": null,
          "unified": "1F3C1"
      },
      {
          "au": "E4B8",
          "docomo": "E712",
          "google": "FE7D8",
          "image": "1f3c2.png",
          "name": "SNOWBOARDER",
          "sheet_x": 7,
          "sheet_y": 7,
          "short_name": "snowboarder",
          "short_names": [
              "snowboarder"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3C2"
      },
      {
          "au": "E46B",
          "docomo": "E733",
          "google": "FE7D9",
          "image": "1f3c3.png",
          "name": "RUNNER",
          "sheet_x": 7,
          "sheet_y": 8,
          "short_name": "runner",
          "short_names": [
              "runner",
              "running"
          ],
          "softbank": "E115",
          "text": null,
          "unified": "1F3C3"
      },
      {
          "au": "EB41",
          "docomo": "E712",
          "google": "FE7DA",
          "image": "1f3c4.png",
          "name": "SURFER",
          "sheet_x": 7,
          "sheet_y": 9,
          "short_name": "surfer",
          "short_names": [
              "surfer"
          ],
          "softbank": "E017",
          "text": null,
          "unified": "1F3C4"
      },
      {
          "au": "E5D3",
          "docomo": "",
          "google": "FE7DB",
          "image": "1f3c6.png",
          "name": "TROPHY",
          "sheet_x": 7,
          "sheet_y": 10,
          "short_name": "trophy",
          "short_names": [
              "trophy"
          ],
          "softbank": "E131",
          "text": null,
          "unified": "1F3C6"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f3c7.png",
          "name": "HORSE RACING",
          "sheet_x": 7,
          "sheet_y": 11,
          "short_name": "horse_racing",
          "short_names": [
              "horse_racing"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3C7"
      },
      {
          "au": "E4BB",
          "docomo": "",
          "google": "FE7DD",
          "image": "1f3c8.png",
          "name": "AMERICAN FOOTBALL",
          "sheet_x": 7,
          "sheet_y": 12,
          "short_name": "football",
          "short_names": [
              "football"
          ],
          "softbank": "E42B",
          "text": null,
          "unified": "1F3C8"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f3c9.png",
          "name": "RUGBY FOOTBALL",
          "sheet_x": 7,
          "sheet_y": 13,
          "short_name": "rugby_football",
          "short_names": [
              "rugby_football"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3C9"
      },
      {
          "au": "EADE",
          "docomo": "",
          "google": "FE7DE",
          "image": "1f3ca.png",
          "name": "SWIMMER",
          "sheet_x": 7,
          "sheet_y": 14,
          "short_name": "swimmer",
          "short_names": [
              "swimmer"
          ],
          "softbank": "E42D",
          "text": null,
          "unified": "1F3CA"
      },
      {
          "au": "E4AB",
          "docomo": "E663",
          "google": "FE4B0",
          "image": "1f3e0.png",
          "name": "HOUSE BUILDING",
          "sheet_x": 7,
          "sheet_y": 15,
          "short_name": "house",
          "short_names": [
              "house"
          ],
          "softbank": "E036",
          "text": null,
          "unified": "1F3E0"
      },
      {
          "au": "EB09",
          "docomo": "E663",
          "google": "FE4B1",
          "image": "1f3e1.png",
          "name": "HOUSE WITH GARDEN",
          "sheet_x": 7,
          "sheet_y": 16,
          "short_name": "house_with_garden",
          "short_names": [
              "house_with_garden"
          ],
          "softbank": "E036",
          "text": null,
          "unified": "1F3E1"
      },
      {
          "au": "E4AD",
          "docomo": "E664",
          "google": "FE4B2",
          "image": "1f3e2.png",
          "name": "OFFICE BUILDING",
          "sheet_x": 7,
          "sheet_y": 17,
          "short_name": "office",
          "short_names": [
              "office"
          ],
          "softbank": "E038",
          "text": null,
          "unified": "1F3E2"
      },
      {
          "au": "E5DE",
          "docomo": "E665",
          "google": "FE4B3",
          "image": "1f3e3.png",
          "name": "JAPANESE POST OFFICE",
          "sheet_x": 7,
          "sheet_y": 18,
          "short_name": "post_office",
          "short_names": [
              "post_office"
          ],
          "softbank": "E153",
          "text": null,
          "unified": "1F3E3"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f3e4.png",
          "name": "EUROPEAN POST OFFICE",
          "sheet_x": 7,
          "sheet_y": 19,
          "short_name": "european_post_office",
          "short_names": [
              "european_post_office"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F3E4"
      },
      {
          "au": "E5DF",
          "docomo": "E666",
          "google": "FE4B4",
          "image": "1f3e5.png",
          "name": "HOSPITAL",
          "sheet_x": 7,
          "sheet_y": 20,
          "short_name": "hospital",
          "short_names": [
              "hospital"
          ],
          "softbank": "E155",
          "text": null,
          "unified": "1F3E5"
      },
      {
          "au": "E4AA",
          "docomo": "E667",
          "google": "FE4B5",
          "image": "1f3e6.png",
          "name": "BANK",
          "sheet_x": 7,
          "sheet_y": 21,
          "short_name": "bank",
          "short_names": [
              "bank"
          ],
          "softbank": "E14D",
          "text": null,
          "unified": "1F3E6"
      },
      {
          "au": "E4A3",
          "docomo": "E668",
          "google": "FE4B6",
          "image": "1f3e7.png",
          "name": "AUTOMATED TELLER MACHINE",
          "sheet_x": 7,
          "sheet_y": 22,
          "short_name": "atm",
          "short_names": [
              "atm"
          ],
          "softbank": "E154",
          "text": null,
          "unified": "1F3E7"
      },
      {
          "au": "EA81",
          "docomo": "E669",
          "google": "FE4B7",
          "image": "1f3e8.png",
          "name": "HOTEL",
          "sheet_x": 7,
          "sheet_y": 23,
          "short_name": "hotel",
          "short_names": [
              "hotel"
          ],
          "softbank": "E158",
          "text": null,
          "unified": "1F3E8"
      },
      {
          "au": "EAF3",
          "docomo": "E669-E6EF",
          "google": "FE4B8",
          "image": "1f3e9.png",
          "name": "LOVE HOTEL",
          "sheet_x": 7,
          "sheet_y": 24,
          "short_name": "love_hotel",
          "short_names": [
              "love_hotel"
          ],
          "softbank": "E501",
          "text": null,
          "unified": "1F3E9"
      },
      {
          "au": "E4A4",
          "docomo": "E66A",
          "google": "FE4B9",
          "image": "1f3ea.png",
          "name": "CONVENIENCE STORE",
          "sheet_x": 7,
          "sheet_y": 25,
          "short_name": "convenience_store",
          "short_names": [
              "convenience_store"
          ],
          "softbank": "E156",
          "text": null,
          "unified": "1F3EA"
      },
      {
          "au": "EA80",
          "docomo": "E73E",
          "google": "FE4BA",
          "image": "1f3eb.png",
          "name": "SCHOOL",
          "sheet_x": 7,
          "sheet_y": 26,
          "short_name": "school",
          "short_names": [
              "school"
          ],
          "softbank": "E157",
          "text": null,
          "unified": "1F3EB"
      },
      {
          "au": "EAF6",
          "docomo": "",
          "google": "FE4BD",
          "image": "1f3ec.png",
          "name": "DEPARTMENT STORE",
          "sheet_x": 7,
          "sheet_y": 27,
          "short_name": "department_store",
          "short_names": [
              "department_store"
          ],
          "softbank": "E504",
          "text": null,
          "unified": "1F3EC"
      },
      {
          "au": "EAF9",
          "docomo": "",
          "google": "FE4C0",
          "image": "1f3ed.png",
          "name": "FACTORY",
          "sheet_x": 7,
          "sheet_y": 28,
          "short_name": "factory",
          "short_names": [
              "factory"
          ],
          "softbank": "E508",
          "text": null,
          "unified": "1F3ED"
      },
      {
          "au": "E4BD",
          "docomo": "E74B",
          "google": "FE4C2",
          "image": "1f3ee.png",
          "name": "IZAKAYA LANTERN",
          "sheet_x": 7,
          "sheet_y": 29,
          "short_name": "izakaya_lantern",
          "short_names": [
              "izakaya_lantern",
              "lantern"
          ],
          "softbank": "E30B",
          "text": null,
          "unified": "1F3EE"
      },
      {
          "au": "EAF7",
          "docomo": "",
          "google": "FE4BE",
          "image": "1f3ef.png",
          "name": "JAPANESE CASTLE",
          "sheet_x": 8,
          "sheet_y": 0,
          "short_name": "japanese_castle",
          "short_names": [
              "japanese_castle"
          ],
          "softbank": "E505",
          "text": null,
          "unified": "1F3EF"
      },
      {
          "au": "EAF8",
          "docomo": "",
          "google": "FE4BF",
          "image": "1f3f0.png",
          "name": "EUROPEAN CASTLE",
          "sheet_x": 8,
          "sheet_y": 1,
          "short_name": "european_castle",
          "short_names": [
              "european_castle"
          ],
          "softbank": "E506",
          "text": null,
          "unified": "1F3F0"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f400.png",
          "name": "RAT",
          "sheet_x": 8,
          "sheet_y": 2,
          "short_name": "rat",
          "short_names": [
              "rat"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F400"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f401.png",
          "name": "MOUSE",
          "sheet_x": 8,
          "sheet_y": 3,
          "short_name": "mouse2",
          "short_names": [
              "mouse2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F401"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f402.png",
          "name": "OX",
          "sheet_x": 8,
          "sheet_y": 4,
          "short_name": "ox",
          "short_names": [
              "ox"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F402"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f403.png",
          "name": "WATER BUFFALO",
          "sheet_x": 8,
          "sheet_y": 5,
          "short_name": "water_buffalo",
          "short_names": [
              "water_buffalo"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F403"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f404.png",
          "name": "COW",
          "sheet_x": 8,
          "sheet_y": 6,
          "short_name": "cow2",
          "short_names": [
              "cow2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F404"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f405.png",
          "name": "TIGER",
          "sheet_x": 8,
          "sheet_y": 7,
          "short_name": "tiger2",
          "short_names": [
              "tiger2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F405"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f406.png",
          "name": "LEOPARD",
          "sheet_x": 8,
          "sheet_y": 8,
          "short_name": "leopard",
          "short_names": [
              "leopard"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F406"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f407.png",
          "name": "RABBIT",
          "sheet_x": 8,
          "sheet_y": 9,
          "short_name": "rabbit2",
          "short_names": [
              "rabbit2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F407"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f408.png",
          "name": "CAT",
          "sheet_x": 8,
          "sheet_y": 10,
          "short_name": "cat2",
          "short_names": [
              "cat2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F408"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f409.png",
          "name": "DRAGON",
          "sheet_x": 8,
          "sheet_y": 11,
          "short_name": "dragon",
          "short_names": [
              "dragon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F409"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f40a.png",
          "name": "CROCODILE",
          "sheet_x": 8,
          "sheet_y": 12,
          "short_name": "crocodile",
          "short_names": [
              "crocodile"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F40A"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f40b.png",
          "name": "WHALE",
          "sheet_x": 8,
          "sheet_y": 13,
          "short_name": "whale2",
          "short_names": [
              "whale2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F40B"
      },
      {
          "au": "EB7E",
          "docomo": "E74E",
          "google": "FE1B9",
          "image": "1f40c.png",
          "name": "SNAIL",
          "sheet_x": 8,
          "sheet_y": 14,
          "short_name": "snail",
          "short_names": [
              "snail"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F40C"
      },
      {
          "au": "EB22",
          "docomo": "",
          "google": "FE1D3",
          "image": "1f40d.png",
          "name": "SNAKE",
          "sheet_x": 8,
          "sheet_y": 15,
          "short_name": "snake",
          "short_names": [
              "snake"
          ],
          "softbank": "E52D",
          "text": null,
          "unified": "1F40D"
      },
      {
          "au": "E4D8",
          "docomo": "E754",
          "google": "FE7DC",
          "image": "1f40e.png",
          "name": "HORSE",
          "sheet_x": 8,
          "sheet_y": 16,
          "short_name": "racehorse",
          "short_names": [
              "racehorse"
          ],
          "softbank": "E134",
          "text": null,
          "unified": "1F40E"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f40f.png",
          "name": "RAM",
          "sheet_x": 8,
          "sheet_y": 17,
          "short_name": "ram",
          "short_names": [
              "ram"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F40F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f410.png",
          "name": "GOAT",
          "sheet_x": 8,
          "sheet_y": 18,
          "short_name": "goat",
          "short_names": [
              "goat"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F410"
      },
      {
          "au": "E48F",
          "docomo": "",
          "google": "FE1CF",
          "image": "1f411.png",
          "name": "SHEEP",
          "sheet_x": 8,
          "sheet_y": 19,
          "short_name": "sheep",
          "short_names": [
              "sheep"
          ],
          "softbank": "E529",
          "text": null,
          "unified": "1F411"
      },
      {
          "au": "E4D9",
          "docomo": "",
          "google": "FE1CE",
          "image": "1f412.png",
          "name": "MONKEY",
          "sheet_x": 8,
          "sheet_y": 20,
          "short_name": "monkey",
          "short_names": [
              "monkey"
          ],
          "softbank": "E528",
          "text": null,
          "unified": "1F412"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f413.png",
          "name": "ROOSTER",
          "sheet_x": 8,
          "sheet_y": 21,
          "short_name": "rooster",
          "short_names": [
              "rooster"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F413"
      },
      {
          "au": "EB23",
          "docomo": "",
          "google": "FE1D4",
          "image": "1f414.png",
          "name": "CHICKEN",
          "sheet_x": 8,
          "sheet_y": 22,
          "short_name": "chicken",
          "short_names": [
              "chicken"
          ],
          "softbank": "E52E",
          "text": null,
          "unified": "1F414"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f415.png",
          "name": "DOG",
          "sheet_x": 8,
          "sheet_y": 23,
          "short_name": "dog2",
          "short_names": [
              "dog2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F415"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f416.png",
          "name": "PIG",
          "sheet_x": 8,
          "sheet_y": 24,
          "short_name": "pig2",
          "short_names": [
              "pig2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F416"
      },
      {
          "au": "EB24",
          "docomo": "",
          "google": "FE1D5",
          "image": "1f417.png",
          "name": "BOAR",
          "sheet_x": 8,
          "sheet_y": 25,
          "short_name": "boar",
          "short_names": [
              "boar"
          ],
          "softbank": "E52F",
          "text": null,
          "unified": "1F417"
      },
      {
          "au": "EB1F",
          "docomo": "",
          "google": "FE1CC",
          "image": "1f418.png",
          "name": "ELEPHANT",
          "sheet_x": 8,
          "sheet_y": 26,
          "short_name": "elephant",
          "short_names": [
              "elephant"
          ],
          "softbank": "E526",
          "text": null,
          "unified": "1F418"
      },
      {
          "au": "E5C7",
          "docomo": "",
          "google": "FE1C5",
          "image": "1f419.png",
          "name": "OCTOPUS",
          "sheet_x": 8,
          "sheet_y": 27,
          "short_name": "octopus",
          "short_names": [
              "octopus"
          ],
          "softbank": "E10A",
          "text": null,
          "unified": "1F419"
      },
      {
          "au": "EAEC",
          "docomo": "",
          "google": "FE1C6",
          "image": "1f41a.png",
          "name": "SPIRAL SHELL",
          "sheet_x": 8,
          "sheet_y": 28,
          "short_name": "shell",
          "short_names": [
              "shell"
          ],
          "softbank": "E441",
          "text": null,
          "unified": "1F41A"
      },
      {
          "au": "EB1E",
          "docomo": "",
          "google": "FE1CB",
          "image": "1f41b.png",
          "name": "BUG",
          "sheet_x": 8,
          "sheet_y": 29,
          "short_name": "bug",
          "short_names": [
              "bug"
          ],
          "softbank": "E525",
          "text": null,
          "unified": "1F41B"
      },
      {
          "au": "E4DD",
          "docomo": "",
          "google": "FE1DA",
          "image": "1f41c.png",
          "name": "ANT",
          "sheet_x": 9,
          "sheet_y": 0,
          "short_name": "ant",
          "short_names": [
              "ant"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F41C"
      },
      {
          "au": "EB57",
          "docomo": "",
          "google": "FE1E1",
          "image": "1f41d.png",
          "name": "HONEYBEE",
          "sheet_x": 9,
          "sheet_y": 1,
          "short_name": "bee",
          "short_names": [
              "bee",
              "honeybee"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F41D"
      },
      {
          "au": "EB58",
          "docomo": "",
          "google": "FE1E2",
          "image": "1f41e.png",
          "name": "LADY BEETLE",
          "sheet_x": 9,
          "sheet_y": 2,
          "short_name": "beetle",
          "short_names": [
              "beetle"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F41E"
      },
      {
          "au": "E49A",
          "docomo": "E751",
          "google": "FE1BD",
          "image": "1f41f.png",
          "name": "FISH",
          "sheet_x": 9,
          "sheet_y": 3,
          "short_name": "fish",
          "short_names": [
              "fish"
          ],
          "softbank": "E019",
          "text": null,
          "unified": "1F41F"
      },
      {
          "au": "EB1D",
          "docomo": "E751",
          "google": "FE1C9",
          "image": "1f420.png",
          "name": "TROPICAL FISH",
          "sheet_x": 9,
          "sheet_y": 4,
          "short_name": "tropical_fish",
          "short_names": [
              "tropical_fish"
          ],
          "softbank": "E522",
          "text": null,
          "unified": "1F420"
      },
      {
          "au": "E4D3",
          "docomo": "E751",
          "google": "FE1D9",
          "image": "1f421.png",
          "name": "BLOWFISH",
          "sheet_x": 9,
          "sheet_y": 5,
          "short_name": "blowfish",
          "short_names": [
              "blowfish"
          ],
          "softbank": "E019",
          "text": null,
          "unified": "1F421"
      },
      {
          "au": "E5D4",
          "docomo": "",
          "google": "FE1DC",
          "image": "1f422.png",
          "name": "TURTLE",
          "sheet_x": 9,
          "sheet_y": 6,
          "short_name": "turtle",
          "short_names": [
              "turtle"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F422"
      },
      {
          "au": "E5DB",
          "docomo": "E74F",
          "google": "FE1DD",
          "image": "1f423.png",
          "name": "HATCHING CHICK",
          "sheet_x": 9,
          "sheet_y": 7,
          "short_name": "hatching_chick",
          "short_names": [
              "hatching_chick"
          ],
          "softbank": "E523",
          "text": null,
          "unified": "1F423"
      },
      {
          "au": "E4E0",
          "docomo": "E74F",
          "google": "FE1BA",
          "image": "1f424.png",
          "name": "BABY CHICK",
          "sheet_x": 9,
          "sheet_y": 8,
          "short_name": "baby_chick",
          "short_names": [
              "baby_chick"
          ],
          "softbank": "E523",
          "text": null,
          "unified": "1F424"
      },
      {
          "au": "EB76",
          "docomo": "E74F",
          "google": "FE1BB",
          "image": "1f425.png",
          "name": "FRONT-FACING BABY CHICK",
          "sheet_x": 9,
          "sheet_y": 9,
          "short_name": "hatched_chick",
          "short_names": [
              "hatched_chick"
          ],
          "softbank": "E523",
          "text": null,
          "unified": "1F425"
      },
      {
          "au": "E4E0",
          "docomo": "E74F",
          "google": "FE1C8",
          "image": "1f426.png",
          "name": "BIRD",
          "sheet_x": 9,
          "sheet_y": 10,
          "short_name": "bird",
          "short_names": [
              "bird"
          ],
          "softbank": "E521",
          "text": null,
          "unified": "1F426"
      },
      {
          "au": "E4DC",
          "docomo": "E750",
          "google": "FE1BC",
          "image": "1f427.png",
          "name": "PENGUIN",
          "sheet_x": 9,
          "sheet_y": 11,
          "short_name": "penguin",
          "short_names": [
              "penguin"
          ],
          "softbank": "E055",
          "text": null,
          "unified": "1F427"
      },
      {
          "au": "EB20",
          "docomo": "",
          "google": "FE1CD",
          "image": "1f428.png",
          "name": "KOALA",
          "sheet_x": 9,
          "sheet_y": 12,
          "short_name": "koala",
          "short_names": [
              "koala"
          ],
          "softbank": "E527",
          "text": null,
          "unified": "1F428"
      },
      {
          "au": "E4DF",
          "docomo": "E6A1",
          "google": "FE1D8",
          "image": "1f429.png",
          "name": "POODLE",
          "sheet_x": 9,
          "sheet_y": 13,
          "short_name": "poodle",
          "short_names": [
              "poodle"
          ],
          "softbank": "E052",
          "text": null,
          "unified": "1F429"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f42a.png",
          "name": "DROMEDARY CAMEL",
          "sheet_x": 9,
          "sheet_y": 14,
          "short_name": "dromedary_camel",
          "short_names": [
              "dromedary_camel"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F42A"
      },
      {
          "au": "EB25",
          "docomo": "",
          "google": "FE1D6",
          "image": "1f42b.png",
          "name": "BACTRIAN CAMEL",
          "sheet_x": 9,
          "sheet_y": 15,
          "short_name": "camel",
          "short_names": [
              "camel"
          ],
          "softbank": "E530",
          "text": null,
          "unified": "1F42B"
      },
      {
          "au": "EB1B",
          "docomo": "",
          "google": "FE1C7",
          "image": "1f42c.png",
          "name": "DOLPHIN",
          "sheet_x": 9,
          "sheet_y": 16,
          "short_name": "dolphin",
          "short_names": [
              "dolphin",
              "flipper"
          ],
          "softbank": "E520",
          "text": null,
          "unified": "1F42C"
      },
      {
          "au": "E5C2",
          "docomo": "",
          "google": "FE1C2",
          "image": "1f42d.png",
          "name": "MOUSE FACE",
          "sheet_x": 9,
          "sheet_y": 17,
          "short_name": "mouse",
          "short_names": [
              "mouse"
          ],
          "softbank": "E053",
          "text": null,
          "unified": "1F42D"
      },
      {
          "au": "EB21",
          "docomo": "",
          "google": "FE1D1",
          "image": "1f42e.png",
          "name": "COW FACE",
          "sheet_x": 9,
          "sheet_y": 18,
          "short_name": "cow",
          "short_names": [
              "cow"
          ],
          "softbank": "E52B",
          "text": null,
          "unified": "1F42E"
      },
      {
          "au": "E5C0",
          "docomo": "",
          "google": "FE1C0",
          "image": "1f42f.png",
          "name": "TIGER FACE",
          "sheet_x": 9,
          "sheet_y": 19,
          "short_name": "tiger",
          "short_names": [
              "tiger"
          ],
          "softbank": "E050",
          "text": null,
          "unified": "1F42F"
      },
      {
          "au": "E4D7",
          "docomo": "",
          "google": "FE1D2",
          "image": "1f430.png",
          "name": "RABBIT FACE",
          "sheet_x": 9,
          "sheet_y": 20,
          "short_name": "rabbit",
          "short_names": [
              "rabbit"
          ],
          "softbank": "E52C",
          "text": null,
          "unified": "1F430"
      },
      {
          "au": "E4DB",
          "docomo": "E6A2",
          "google": "FE1B8",
          "image": "1f431.png",
          "name": "CAT FACE",
          "sheet_x": 9,
          "sheet_y": 21,
          "short_name": "cat",
          "short_names": [
              "cat"
          ],
          "softbank": "E04F",
          "text": null,
          "unified": "1F431"
      },
      {
          "au": "EB3F",
          "docomo": "",
          "google": "FE1DE",
          "image": "1f432.png",
          "name": "DRAGON FACE",
          "sheet_x": 9,
          "sheet_y": 22,
          "short_name": "dragon_face",
          "short_names": [
              "dragon_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F432"
      },
      {
          "au": "E470",
          "docomo": "",
          "google": "FE1C3",
          "image": "1f433.png",
          "name": "SPOUTING WHALE",
          "sheet_x": 9,
          "sheet_y": 23,
          "short_name": "whale",
          "short_names": [
              "whale"
          ],
          "softbank": "E054",
          "text": null,
          "unified": "1F433"
      },
      {
          "au": "E4D8",
          "docomo": "E754",
          "google": "FE1BE",
          "image": "1f434.png",
          "name": "HORSE FACE",
          "sheet_x": 9,
          "sheet_y": 24,
          "short_name": "horse",
          "short_names": [
              "horse"
          ],
          "softbank": "E01A",
          "text": null,
          "unified": "1F434"
      },
      {
          "au": "E4D9",
          "docomo": "",
          "google": "FE1C4",
          "image": "1f435.png",
          "name": "MONKEY FACE",
          "sheet_x": 9,
          "sheet_y": 25,
          "short_name": "monkey_face",
          "short_names": [
              "monkey_face"
          ],
          "softbank": "E109",
          "text": null,
          "unified": "1F435"
      },
      {
          "au": "E4E1",
          "docomo": "E6A1",
          "google": "FE1B7",
          "image": "1f436.png",
          "name": "DOG FACE",
          "sheet_x": 9,
          "sheet_y": 26,
          "short_name": "dog",
          "short_names": [
              "dog"
          ],
          "softbank": "E052",
          "text": null,
          "unified": "1F436"
      },
      {
          "au": "E4DE",
          "docomo": "E755",
          "google": "FE1BF",
          "image": "1f437.png",
          "name": "PIG FACE",
          "sheet_x": 9,
          "sheet_y": 27,
          "short_name": "pig",
          "short_names": [
              "pig"
          ],
          "softbank": "E10B",
          "text": null,
          "unified": "1F437"
      },
      {
          "au": "E4DA",
          "docomo": "",
          "google": "FE1D7",
          "image": "1f438.png",
          "name": "FROG FACE",
          "sheet_x": 9,
          "sheet_y": 28,
          "short_name": "frog",
          "short_names": [
              "frog"
          ],
          "softbank": "E531",
          "text": null,
          "unified": "1F438"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE1CA",
          "image": "1f439.png",
          "name": "HAMSTER FACE",
          "sheet_x": 9,
          "sheet_y": 29,
          "short_name": "hamster",
          "short_names": [
              "hamster"
          ],
          "softbank": "E524",
          "text": null,
          "unified": "1F439"
      },
      {
          "au": "E4E1",
          "docomo": "E6A1",
          "google": "FE1D0",
          "image": "1f43a.png",
          "name": "WOLF FACE",
          "sheet_x": 10,
          "sheet_y": 0,
          "short_name": "wolf",
          "short_names": [
              "wolf"
          ],
          "softbank": "E52A",
          "text": null,
          "unified": "1F43A"
      },
      {
          "au": "E5C1",
          "docomo": "",
          "google": "FE1C1",
          "image": "1f43b.png",
          "name": "BEAR FACE",
          "sheet_x": 10,
          "sheet_y": 1,
          "short_name": "bear",
          "short_names": [
              "bear"
          ],
          "softbank": "E051",
          "text": null,
          "unified": "1F43B"
      },
      {
          "au": "EB46",
          "docomo": "",
          "google": "FE1DF",
          "image": "1f43c.png",
          "name": "PANDA FACE",
          "sheet_x": 10,
          "sheet_y": 2,
          "short_name": "panda_face",
          "short_names": [
              "panda_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F43C"
      },
      {
          "au": "EB48",
          "docomo": "E755",
          "google": "FE1E0",
          "image": "1f43d.png",
          "name": "PIG NOSE",
          "sheet_x": 10,
          "sheet_y": 3,
          "short_name": "pig_nose",
          "short_names": [
              "pig_nose"
          ],
          "softbank": "E10B",
          "text": null,
          "unified": "1F43D"
      },
      {
          "au": "E4EE",
          "docomo": "E698",
          "google": "FE1DB",
          "image": "1f43e.png",
          "name": "PAW PRINTS",
          "sheet_x": 10,
          "sheet_y": 4,
          "short_name": "feet",
          "short_names": [
              "feet",
              "paw_prints"
          ],
          "softbank": "E536",
          "text": null,
          "unified": "1F43E"
      },
      {
          "au": "E5A4",
          "docomo": "E691",
          "google": "FE190",
          "image": "1f440.png",
          "name": "EYES",
          "sheet_x": 10,
          "sheet_y": 5,
          "short_name": "eyes",
          "short_names": [
              "eyes"
          ],
          "softbank": "E419",
          "text": null,
          "unified": "1F440"
      },
      {
          "au": "E5A5",
          "docomo": "E692",
          "google": "FE191",
          "image": "1f442.png",
          "name": "EAR",
          "sheet_x": 10,
          "sheet_y": 6,
          "short_name": "ear",
          "short_names": [
              "ear"
          ],
          "softbank": "E41B",
          "text": null,
          "unified": "1F442"
      },
      {
          "au": "EAD0",
          "docomo": "",
          "google": "FE192",
          "image": "1f443.png",
          "name": "NOSE",
          "sheet_x": 10,
          "sheet_y": 7,
          "short_name": "nose",
          "short_names": [
              "nose"
          ],
          "softbank": "E41A",
          "text": null,
          "unified": "1F443"
      },
      {
          "au": "EAD1",
          "docomo": "E6F9",
          "google": "FE193",
          "image": "1f444.png",
          "name": "MOUTH",
          "sheet_x": 10,
          "sheet_y": 8,
          "short_name": "lips",
          "short_names": [
              "lips"
          ],
          "softbank": "E41C",
          "text": null,
          "unified": "1F444"
      },
      {
          "au": "EB47",
          "docomo": "E728",
          "google": "FE194",
          "image": "1f445.png",
          "name": "TONGUE",
          "sheet_x": 10,
          "sheet_y": 9,
          "short_name": "tongue",
          "short_names": [
              "tongue"
          ],
          "softbank": "E409",
          "text": null,
          "unified": "1F445"
      },
      {
          "au": "EA8D",
          "docomo": "",
          "google": "FEB99",
          "image": "1f446.png",
          "name": "WHITE UP POINTING BACKHAND INDEX",
          "sheet_x": 10,
          "sheet_y": 10,
          "short_name": "point_up_2",
          "short_names": [
              "point_up_2"
          ],
          "softbank": "E22E",
          "text": null,
          "unified": "1F446"
      },
      {
          "au": "EA8E",
          "docomo": "",
          "google": "FEB9A",
          "image": "1f447.png",
          "name": "WHITE DOWN POINTING BACKHAND INDEX",
          "sheet_x": 10,
          "sheet_y": 11,
          "short_name": "point_down",
          "short_names": [
              "point_down"
          ],
          "softbank": "E22F",
          "text": null,
          "unified": "1F447"
      },
      {
          "au": "E4FF",
          "docomo": "",
          "google": "FEB9B",
          "image": "1f448.png",
          "name": "WHITE LEFT POINTING BACKHAND INDEX",
          "sheet_x": 10,
          "sheet_y": 12,
          "short_name": "point_left",
          "short_names": [
              "point_left"
          ],
          "softbank": "E230",
          "text": null,
          "unified": "1F448"
      },
      {
          "au": "E500",
          "docomo": "",
          "google": "FEB9C",
          "image": "1f449.png",
          "name": "WHITE RIGHT POINTING BACKHAND INDEX",
          "sheet_x": 10,
          "sheet_y": 13,
          "short_name": "point_right",
          "short_names": [
              "point_right"
          ],
          "softbank": "E231",
          "text": null,
          "unified": "1F449"
      },
      {
          "au": "E4F3",
          "docomo": "E6FD",
          "google": "FEB96",
          "image": "1f44a.png",
          "name": "FISTED HAND SIGN",
          "sheet_x": 10,
          "sheet_y": 14,
          "short_name": "facepunch",
          "short_names": [
              "facepunch",
              "punch"
          ],
          "softbank": "E00D",
          "text": null,
          "unified": "1F44A"
      },
      {
          "au": "EAD6",
          "docomo": "E695",
          "google": "FEB9D",
          "image": "1f44b.png",
          "name": "WAVING HAND SIGN",
          "sheet_x": 10,
          "sheet_y": 15,
          "short_name": "wave",
          "short_names": [
              "wave"
          ],
          "softbank": "E41E",
          "text": null,
          "unified": "1F44B"
      },
      {
          "au": "EAD4",
          "docomo": "E70B",
          "google": "FEB9F",
          "image": "1f44c.png",
          "name": "OK HAND SIGN",
          "sheet_x": 10,
          "sheet_y": 16,
          "short_name": "ok_hand",
          "short_names": [
              "ok_hand"
          ],
          "softbank": "E420",
          "text": null,
          "unified": "1F44C"
      },
      {
          "au": "E4F9",
          "docomo": "E727",
          "google": "FEB97",
          "image": "1f44d.png",
          "name": "THUMBS UP SIGN",
          "sheet_x": 10,
          "sheet_y": 17,
          "short_name": "+1",
          "short_names": [
              "+1",
              "thumbsup"
          ],
          "softbank": "E00E",
          "text": null,
          "unified": "1F44D"
      },
      {
          "au": "EAD5",
          "docomo": "E700",
          "google": "FEBA0",
          "image": "1f44e.png",
          "name": "THUMBS DOWN SIGN",
          "sheet_x": 10,
          "sheet_y": 18,
          "short_name": "-1",
          "short_names": [
              "-1",
              "thumbsdown"
          ],
          "softbank": "E421",
          "text": null,
          "unified": "1F44E"
      },
      {
          "au": "EAD3",
          "docomo": "",
          "google": "FEB9E",
          "image": "1f44f.png",
          "name": "CLAPPING HANDS SIGN",
          "sheet_x": 10,
          "sheet_y": 19,
          "short_name": "clap",
          "short_names": [
              "clap"
          ],
          "softbank": "E41F",
          "text": null,
          "unified": "1F44F"
      },
      {
          "au": "EAD6",
          "docomo": "E695",
          "google": "FEBA1",
          "image": "1f450.png",
          "name": "OPEN HANDS SIGN",
          "sheet_x": 10,
          "sheet_y": 20,
          "short_name": "open_hands",
          "short_names": [
              "open_hands"
          ],
          "softbank": "E422",
          "text": null,
          "unified": "1F450"
      },
      {
          "au": "E5C9",
          "docomo": "E71A",
          "google": "FE4D1",
          "image": "1f451.png",
          "name": "CROWN",
          "sheet_x": 10,
          "sheet_y": 21,
          "short_name": "crown",
          "short_names": [
              "crown"
          ],
          "softbank": "E10E",
          "text": null,
          "unified": "1F451"
      },
      {
          "au": "EA9E",
          "docomo": "",
          "google": "FE4D4",
          "image": "1f452.png",
          "name": "WOMANS HAT",
          "sheet_x": 10,
          "sheet_y": 22,
          "short_name": "womans_hat",
          "short_names": [
              "womans_hat"
          ],
          "softbank": "E318",
          "text": null,
          "unified": "1F452"
      },
      {
          "au": "E4FE",
          "docomo": "E69A",
          "google": "FE4CE",
          "image": "1f453.png",
          "name": "EYEGLASSES",
          "sheet_x": 10,
          "sheet_y": 23,
          "short_name": "eyeglasses",
          "short_names": [
              "eyeglasses"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F453"
      },
      {
          "au": "EA93",
          "docomo": "",
          "google": "FE4D3",
          "image": "1f454.png",
          "name": "NECKTIE",
          "sheet_x": 10,
          "sheet_y": 24,
          "short_name": "necktie",
          "short_names": [
              "necktie"
          ],
          "softbank": "E302",
          "text": null,
          "unified": "1F454"
      },
      {
          "au": "E5B6",
          "docomo": "E70E",
          "google": "FE4CF",
          "image": "1f455.png",
          "name": "T-SHIRT",
          "sheet_x": 10,
          "sheet_y": 25,
          "short_name": "shirt",
          "short_names": [
              "shirt",
              "tshirt"
          ],
          "softbank": "E006",
          "text": null,
          "unified": "1F455"
      },
      {
          "au": "EB77",
          "docomo": "E711",
          "google": "FE4D0",
          "image": "1f456.png",
          "name": "JEANS",
          "sheet_x": 10,
          "sheet_y": 26,
          "short_name": "jeans",
          "short_names": [
              "jeans"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F456"
      },
      {
          "au": "EB6B",
          "docomo": "",
          "google": "FE4D5",
          "image": "1f457.png",
          "name": "DRESS",
          "sheet_x": 10,
          "sheet_y": 27,
          "short_name": "dress",
          "short_names": [
              "dress"
          ],
          "softbank": "E319",
          "text": null,
          "unified": "1F457"
      },
      {
          "au": "EAA3",
          "docomo": "",
          "google": "FE4D9",
          "image": "1f458.png",
          "name": "KIMONO",
          "sheet_x": 10,
          "sheet_y": 28,
          "short_name": "kimono",
          "short_names": [
              "kimono"
          ],
          "softbank": "E321",
          "text": null,
          "unified": "1F458"
      },
      {
          "au": "EAA4",
          "docomo": "",
          "google": "FE4DA",
          "image": "1f459.png",
          "name": "BIKINI",
          "sheet_x": 10,
          "sheet_y": 29,
          "short_name": "bikini",
          "short_names": [
              "bikini"
          ],
          "softbank": "E322",
          "text": null,
          "unified": "1F459"
      },
      {
          "au": "E50D",
          "docomo": "E70E",
          "google": "FE4DB",
          "image": "1f45a.png",
          "name": "WOMANS CLOTHES",
          "sheet_x": 11,
          "sheet_y": 0,
          "short_name": "womans_clothes",
          "short_names": [
              "womans_clothes"
          ],
          "softbank": "E006",
          "text": null,
          "unified": "1F45A"
      },
      {
          "au": "E504",
          "docomo": "E70F",
          "google": "FE4DC",
          "image": "1f45b.png",
          "name": "PURSE",
          "sheet_x": 11,
          "sheet_y": 1,
          "short_name": "purse",
          "short_names": [
              "purse"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F45B"
      },
      {
          "au": "E49C",
          "docomo": "E682",
          "google": "FE4F0",
          "image": "1f45c.png",
          "name": "HANDBAG",
          "sheet_x": 11,
          "sheet_y": 2,
          "short_name": "handbag",
          "short_names": [
              "handbag"
          ],
          "softbank": "E323",
          "text": null,
          "unified": "1F45C"
      },
      {
          "au": "",
          "docomo": "E6AD",
          "google": "FE4F1",
          "image": "1f45d.png",
          "name": "POUCH",
          "sheet_x": 11,
          "sheet_y": 3,
          "short_name": "pouch",
          "short_names": [
              "pouch"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F45D"
      },
      {
          "au": "E5B7",
          "docomo": "E699",
          "google": "FE4CC",
          "image": "1f45e.png",
          "name": "MANS SHOE",
          "sheet_x": 11,
          "sheet_y": 4,
          "short_name": "mans_shoe",
          "short_names": [
              "mans_shoe",
              "shoe"
          ],
          "softbank": "E007",
          "text": null,
          "unified": "1F45E"
      },
      {
          "au": "EB2B",
          "docomo": "E699",
          "google": "FE4CD",
          "image": "1f45f.png",
          "name": "ATHLETIC SHOE",
          "sheet_x": 11,
          "sheet_y": 5,
          "short_name": "athletic_shoe",
          "short_names": [
              "athletic_shoe"
          ],
          "softbank": "E007",
          "text": null,
          "unified": "1F45F"
      },
      {
          "au": "E51A",
          "docomo": "E674",
          "google": "FE4D6",
          "image": "1f460.png",
          "name": "HIGH-HEELED SHOE",
          "sheet_x": 11,
          "sheet_y": 6,
          "short_name": "high_heel",
          "short_names": [
              "high_heel"
          ],
          "softbank": "E13E",
          "text": null,
          "unified": "1F460"
      },
      {
          "au": "E51A",
          "docomo": "E674",
          "google": "FE4D7",
          "image": "1f461.png",
          "name": "WOMANS SANDAL",
          "sheet_x": 11,
          "sheet_y": 7,
          "short_name": "sandal",
          "short_names": [
              "sandal"
          ],
          "softbank": "E31A",
          "text": null,
          "unified": "1F461"
      },
      {
          "au": "EA9F",
          "docomo": "",
          "google": "FE4D8",
          "image": "1f462.png",
          "name": "WOMANS BOOTS",
          "sheet_x": 11,
          "sheet_y": 8,
          "short_name": "boot",
          "short_names": [
              "boot"
          ],
          "softbank": "E31B",
          "text": null,
          "unified": "1F462"
      },
      {
          "au": "EB2A",
          "docomo": "E698",
          "google": "FE553",
          "image": "1f463.png",
          "name": "FOOTPRINTS",
          "sheet_x": 11,
          "sheet_y": 9,
          "short_name": "footprints",
          "short_names": [
              "footprints"
          ],
          "softbank": "E536",
          "text": null,
          "unified": "1F463"
      },
      {
          "au": "",
          "docomo": "E6B1",
          "google": "FE19A",
          "image": "1f464.png",
          "name": "BUST IN SILHOUETTE",
          "sheet_x": 11,
          "sheet_y": 10,
          "short_name": "bust_in_silhouette",
          "short_names": [
              "bust_in_silhouette"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F464"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f465.png",
          "name": "BUSTS IN SILHOUETTE",
          "sheet_x": 11,
          "sheet_y": 11,
          "short_name": "busts_in_silhouette",
          "short_names": [
              "busts_in_silhouette"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F465"
      },
      {
          "au": "E4FC",
          "docomo": "E6F0",
          "google": "FE19B",
          "image": "1f466.png",
          "name": "BOY",
          "sheet_x": 11,
          "sheet_y": 12,
          "short_name": "boy",
          "short_names": [
              "boy"
          ],
          "softbank": "E001",
          "text": null,
          "unified": "1F466"
      },
      {
          "au": "E4FA",
          "docomo": "E6F0",
          "google": "FE19C",
          "image": "1f467.png",
          "name": "GIRL",
          "sheet_x": 11,
          "sheet_y": 13,
          "short_name": "girl",
          "short_names": [
              "girl"
          ],
          "softbank": "E002",
          "text": null,
          "unified": "1F467"
      },
      {
          "au": "E4FC",
          "docomo": "E6F0",
          "google": "FE19D",
          "image": "1f468.png",
          "name": "MAN",
          "sheet_x": 11,
          "sheet_y": 14,
          "short_name": "man",
          "short_names": [
              "man"
          ],
          "softbank": "E004",
          "text": null,
          "unified": "1F468"
      },
      {
          "au": "E4FA",
          "docomo": "E6F0",
          "google": "FE19E",
          "image": "1f469.png",
          "name": "WOMAN",
          "sheet_x": 11,
          "sheet_y": 15,
          "short_name": "woman",
          "short_names": [
              "woman"
          ],
          "softbank": "E005",
          "text": null,
          "unified": "1F469"
      },
      {
          "au": "E501",
          "docomo": "",
          "google": "FE19F",
          "image": "1f46a.png",
          "name": "FAMILY",
          "sheet_x": 11,
          "sheet_y": 16,
          "short_name": "family",
          "short_names": [
              "family"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F46A"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE1A0",
          "image": "1f46b.png",
          "name": "MAN AND WOMAN HOLDING HANDS",
          "sheet_x": 11,
          "sheet_y": 17,
          "short_name": "couple",
          "short_names": [
              "couple"
          ],
          "softbank": "E428",
          "text": null,
          "unified": "1F46B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f46c.png",
          "name": "TWO MEN HOLDING HANDS",
          "sheet_x": 11,
          "sheet_y": 18,
          "short_name": "two_men_holding_hands",
          "short_names": [
              "two_men_holding_hands"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F46C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f46d.png",
          "name": "TWO WOMEN HOLDING HANDS",
          "sheet_x": 11,
          "sheet_y": 19,
          "short_name": "two_women_holding_hands",
          "short_names": [
              "two_women_holding_hands"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F46D"
      },
      {
          "au": "E5DD",
          "docomo": "",
          "google": "FE1A1",
          "image": "1f46e.png",
          "name": "POLICE OFFICER",
          "sheet_x": 11,
          "sheet_y": 20,
          "short_name": "cop",
          "short_names": [
              "cop"
          ],
          "softbank": "E152",
          "text": null,
          "unified": "1F46E"
      },
      {
          "au": "EADB",
          "docomo": "",
          "google": "FE1A2",
          "image": "1f46f.png",
          "name": "WOMAN WITH BUNNY EARS",
          "sheet_x": 11,
          "sheet_y": 21,
          "short_name": "dancers",
          "short_names": [
              "dancers"
          ],
          "softbank": "E429",
          "text": null,
          "unified": "1F46F"
      },
      {
          "au": "EAE9",
          "docomo": "",
          "google": "FE1A3",
          "image": "1f470.png",
          "name": "BRIDE WITH VEIL",
          "sheet_x": 11,
          "sheet_y": 22,
          "short_name": "bride_with_veil",
          "short_names": [
              "bride_with_veil"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F470"
      },
      {
          "au": "EB13",
          "docomo": "",
          "google": "FE1A4",
          "image": "1f471.png",
          "name": "PERSON WITH BLOND HAIR",
          "sheet_x": 11,
          "sheet_y": 23,
          "short_name": "person_with_blond_hair",
          "short_names": [
              "person_with_blond_hair"
          ],
          "softbank": "E515",
          "text": null,
          "unified": "1F471"
      },
      {
          "au": "EB14",
          "docomo": "",
          "google": "FE1A5",
          "image": "1f472.png",
          "name": "MAN WITH GUA PI MAO",
          "sheet_x": 11,
          "sheet_y": 24,
          "short_name": "man_with_gua_pi_mao",
          "short_names": [
              "man_with_gua_pi_mao"
          ],
          "softbank": "E516",
          "text": null,
          "unified": "1F472"
      },
      {
          "au": "EB15",
          "docomo": "",
          "google": "FE1A6",
          "image": "1f473.png",
          "name": "MAN WITH TURBAN",
          "sheet_x": 11,
          "sheet_y": 25,
          "short_name": "man_with_turban",
          "short_names": [
              "man_with_turban"
          ],
          "softbank": "E517",
          "text": null,
          "unified": "1F473"
      },
      {
          "au": "EB16",
          "docomo": "",
          "google": "FE1A7",
          "image": "1f474.png",
          "name": "OLDER MAN",
          "sheet_x": 11,
          "sheet_y": 26,
          "short_name": "older_man",
          "short_names": [
              "older_man"
          ],
          "softbank": "E518",
          "text": null,
          "unified": "1F474"
      },
      {
          "au": "EB17",
          "docomo": "",
          "google": "FE1A8",
          "image": "1f475.png",
          "name": "OLDER WOMAN",
          "sheet_x": 11,
          "sheet_y": 27,
          "short_name": "older_woman",
          "short_names": [
              "older_woman"
          ],
          "softbank": "E519",
          "text": null,
          "unified": "1F475"
      },
      {
          "au": "EB18",
          "docomo": "",
          "google": "FE1A9",
          "image": "1f476.png",
          "name": "BABY",
          "sheet_x": 11,
          "sheet_y": 28,
          "short_name": "baby",
          "short_names": [
              "baby"
          ],
          "softbank": "E51A",
          "text": null,
          "unified": "1F476"
      },
      {
          "au": "EB19",
          "docomo": "",
          "google": "FE1AA",
          "image": "1f477.png",
          "name": "CONSTRUCTION WORKER",
          "sheet_x": 11,
          "sheet_y": 29,
          "short_name": "construction_worker",
          "short_names": [
              "construction_worker"
          ],
          "softbank": "E51B",
          "text": null,
          "unified": "1F477"
      },
      {
          "au": "EB1A",
          "docomo": "",
          "google": "FE1AB",
          "image": "1f478.png",
          "name": "PRINCESS",
          "sheet_x": 12,
          "sheet_y": 0,
          "short_name": "princess",
          "short_names": [
              "princess"
          ],
          "softbank": "E51C",
          "text": null,
          "unified": "1F478"
      },
      {
          "au": "EB44",
          "docomo": "",
          "google": "FE1AC",
          "image": "1f479.png",
          "name": "JAPANESE OGRE",
          "sheet_x": 12,
          "sheet_y": 1,
          "short_name": "japanese_ogre",
          "short_names": [
              "japanese_ogre"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F479"
      },
      {
          "au": "EB45",
          "docomo": "",
          "google": "FE1AD",
          "image": "1f47a.png",
          "name": "JAPANESE GOBLIN",
          "sheet_x": 12,
          "sheet_y": 2,
          "short_name": "japanese_goblin",
          "short_names": [
              "japanese_goblin"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F47A"
      },
      {
          "au": "E4CB",
          "docomo": "",
          "google": "FE1AE",
          "image": "1f47b.png",
          "name": "GHOST",
          "sheet_x": 12,
          "sheet_y": 3,
          "short_name": "ghost",
          "short_names": [
              "ghost"
          ],
          "softbank": "E11B",
          "text": null,
          "unified": "1F47B"
      },
      {
          "au": "E5BF",
          "docomo": "",
          "google": "FE1AF",
          "image": "1f47c.png",
          "name": "BABY ANGEL",
          "sheet_x": 12,
          "sheet_y": 4,
          "short_name": "angel",
          "short_names": [
              "angel"
          ],
          "softbank": "E04E",
          "text": null,
          "unified": "1F47C"
      },
      {
          "au": "E50E",
          "docomo": "",
          "google": "FE1B0",
          "image": "1f47d.png",
          "name": "EXTRATERRESTRIAL ALIEN",
          "sheet_x": 12,
          "sheet_y": 5,
          "short_name": "alien",
          "short_names": [
              "alien"
          ],
          "softbank": "E10C",
          "text": null,
          "unified": "1F47D"
      },
      {
          "au": "E4EC",
          "docomo": "",
          "google": "FE1B1",
          "image": "1f47e.png",
          "name": "ALIEN MONSTER",
          "sheet_x": 12,
          "sheet_y": 6,
          "short_name": "space_invader",
          "short_names": [
              "space_invader"
          ],
          "softbank": "E12B",
          "text": null,
          "unified": "1F47E"
      },
      {
          "au": "E4EF",
          "docomo": "",
          "google": "FE1B2",
          "image": "1f47f.png",
          "name": "IMP",
          "sheet_x": 12,
          "sheet_y": 7,
          "short_name": "imp",
          "short_names": [
              "imp"
          ],
          "softbank": "E11A",
          "text": null,
          "unified": "1F47F"
      },
      {
          "au": "E4F8",
          "docomo": "",
          "google": "FE1B3",
          "image": "1f480.png",
          "name": "SKULL",
          "sheet_x": 12,
          "sheet_y": 8,
          "short_name": "skull",
          "short_names": [
              "skull"
          ],
          "softbank": "E11C",
          "text": null,
          "unified": "1F480"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE1B4",
          "image": "1f481.png",
          "name": "INFORMATION DESK PERSON",
          "sheet_x": 12,
          "sheet_y": 9,
          "short_name": "information_desk_person",
          "short_names": [
              "information_desk_person"
          ],
          "softbank": "E253",
          "text": null,
          "unified": "1F481"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE1B5",
          "image": "1f482.png",
          "name": "GUARDSMAN",
          "sheet_x": 12,
          "sheet_y": 10,
          "short_name": "guardsman",
          "short_names": [
              "guardsman"
          ],
          "softbank": "E51E",
          "text": null,
          "unified": "1F482"
      },
      {
          "au": "EB1C",
          "docomo": "",
          "google": "FE1B6",
          "image": "1f483.png",
          "name": "DANCER",
          "sheet_x": 12,
          "sheet_y": 11,
          "short_name": "dancer",
          "short_names": [
              "dancer"
          ],
          "softbank": "E51F",
          "text": null,
          "unified": "1F483"
      },
      {
          "au": "E509",
          "docomo": "E710",
          "google": "FE195",
          "image": "1f484.png",
          "name": "LIPSTICK",
          "sheet_x": 12,
          "sheet_y": 12,
          "short_name": "lipstick",
          "short_names": [
              "lipstick"
          ],
          "softbank": "E31C",
          "text": null,
          "unified": "1F484"
      },
      {
          "au": "EAA0",
          "docomo": "",
          "google": "FE196",
          "image": "1f485.png",
          "name": "NAIL POLISH",
          "sheet_x": 12,
          "sheet_y": 13,
          "short_name": "nail_care",
          "short_names": [
              "nail_care"
          ],
          "softbank": "E31D",
          "text": null,
          "unified": "1F485"
      },
      {
          "au": "E50B",
          "docomo": "",
          "google": "FE197",
          "image": "1f486.png",
          "name": "FACE MASSAGE",
          "sheet_x": 12,
          "sheet_y": 14,
          "short_name": "massage",
          "short_names": [
              "massage"
          ],
          "softbank": "E31E",
          "text": null,
          "unified": "1F486"
      },
      {
          "au": "EAA1",
          "docomo": "E675",
          "google": "FE198",
          "image": "1f487.png",
          "name": "HAIRCUT",
          "sheet_x": 12,
          "sheet_y": 15,
          "short_name": "haircut",
          "short_names": [
              "haircut"
          ],
          "softbank": "E31F",
          "text": null,
          "unified": "1F487"
      },
      {
          "au": "EAA2",
          "docomo": "",
          "google": "FE199",
          "image": "1f488.png",
          "name": "BARBER POLE",
          "sheet_x": 12,
          "sheet_y": 16,
          "short_name": "barber",
          "short_names": [
              "barber"
          ],
          "softbank": "E320",
          "text": null,
          "unified": "1F488"
      },
      {
          "au": "E510",
          "docomo": "",
          "google": "FE509",
          "image": "1f489.png",
          "name": "SYRINGE",
          "sheet_x": 12,
          "sheet_y": 17,
          "short_name": "syringe",
          "short_names": [
              "syringe"
          ],
          "softbank": "E13B",
          "text": null,
          "unified": "1F489"
      },
      {
          "au": "EA9A",
          "docomo": "",
          "google": "FE50A",
          "image": "1f48a.png",
          "name": "PILL",
          "sheet_x": 12,
          "sheet_y": 18,
          "short_name": "pill",
          "short_names": [
              "pill"
          ],
          "softbank": "E30F",
          "text": null,
          "unified": "1F48A"
      },
      {
          "au": "E4EB",
          "docomo": "E6F9",
          "google": "FE823",
          "image": "1f48b.png",
          "name": "KISS MARK",
          "sheet_x": 12,
          "sheet_y": 19,
          "short_name": "kiss",
          "short_names": [
              "kiss"
          ],
          "softbank": "E003",
          "text": null,
          "unified": "1F48B"
      },
      {
          "au": "EB78",
          "docomo": "E717",
          "google": "FE824",
          "image": "1f48c.png",
          "name": "LOVE LETTER",
          "sheet_x": 12,
          "sheet_y": 20,
          "short_name": "love_letter",
          "short_names": [
              "love_letter"
          ],
          "softbank": "E103-E328",
          "text": null,
          "unified": "1F48C"
      },
      {
          "au": "E514",
          "docomo": "E71B",
          "google": "FE825",
          "image": "1f48d.png",
          "name": "RING",
          "sheet_x": 12,
          "sheet_y": 21,
          "short_name": "ring",
          "short_names": [
              "ring"
          ],
          "softbank": "E034",
          "text": null,
          "unified": "1F48D"
      },
      {
          "au": "E514",
          "docomo": "E71B",
          "google": "FE826",
          "image": "1f48e.png",
          "name": "GEM STONE",
          "sheet_x": 12,
          "sheet_y": 22,
          "short_name": "gem",
          "short_names": [
              "gem"
          ],
          "softbank": "E035",
          "text": null,
          "unified": "1F48E"
      },
      {
          "au": "E5CA",
          "docomo": "E6F9",
          "google": "FE827",
          "image": "1f48f.png",
          "name": "KISS",
          "sheet_x": 12,
          "sheet_y": 23,
          "short_name": "couplekiss",
          "short_names": [
              "couplekiss"
          ],
          "softbank": "E111",
          "text": null,
          "unified": "1F48F"
      },
      {
          "au": "EA95",
          "docomo": "",
          "google": "FE828",
          "image": "1f490.png",
          "name": "BOUQUET",
          "sheet_x": 12,
          "sheet_y": 24,
          "short_name": "bouquet",
          "short_names": [
              "bouquet"
          ],
          "softbank": "E306",
          "text": null,
          "unified": "1F490"
      },
      {
          "au": "EADA",
          "docomo": "E6ED",
          "google": "FE829",
          "image": "1f491.png",
          "name": "COUPLE WITH HEART",
          "sheet_x": 12,
          "sheet_y": 25,
          "short_name": "couple_with_heart",
          "short_names": [
              "couple_with_heart"
          ],
          "softbank": "E425",
          "text": null,
          "unified": "1F491"
      },
      {
          "au": "E5BB",
          "docomo": "",
          "google": "FE82A",
          "image": "1f492.png",
          "name": "WEDDING",
          "sheet_x": 12,
          "sheet_y": 26,
          "short_name": "wedding",
          "short_names": [
              "wedding"
          ],
          "softbank": "E43D",
          "text": null,
          "unified": "1F492"
      },
      {
          "au": "EB75",
          "docomo": "E6ED",
          "google": "FEB0D",
          "image": "1f493.png",
          "name": "BEATING HEART",
          "sheet_x": 12,
          "sheet_y": 27,
          "short_name": "heartbeat",
          "short_names": [
              "heartbeat"
          ],
          "softbank": "E327",
          "text": null,
          "unified": "1F493"
      },
      {
          "au": "E477",
          "docomo": "E6EE",
          "google": "FEB0E",
          "image": "1f494.png",
          "name": "BROKEN HEART",
          "sheet_x": 12,
          "sheet_y": 28,
          "short_name": "broken_heart",
          "short_names": [
              "broken_heart"
          ],
          "softbank": "E023",
          "text": "</3",
          "unified": "1F494"
      },
      {
          "au": "E478",
          "docomo": "E6EF",
          "google": "FEB0F",
          "image": "1f495.png",
          "name": "TWO HEARTS",
          "sheet_x": 12,
          "sheet_y": 29,
          "short_name": "two_hearts",
          "short_names": [
              "two_hearts"
          ],
          "softbank": "E327",
          "text": null,
          "unified": "1F495"
      },
      {
          "au": "EAA6",
          "docomo": "E6EC",
          "google": "FEB10",
          "image": "1f496.png",
          "name": "SPARKLING HEART",
          "sheet_x": 13,
          "sheet_y": 0,
          "short_name": "sparkling_heart",
          "short_names": [
              "sparkling_heart"
          ],
          "softbank": "E327",
          "text": null,
          "unified": "1F496"
      },
      {
          "au": "EB75",
          "docomo": "E6ED",
          "google": "FEB11",
          "image": "1f497.png",
          "name": "GROWING HEART",
          "sheet_x": 13,
          "sheet_y": 1,
          "short_name": "heartpulse",
          "short_names": [
              "heartpulse"
          ],
          "softbank": "E328",
          "text": null,
          "unified": "1F497"
      },
      {
          "au": "E4EA",
          "docomo": "E6EC",
          "google": "FEB12",
          "image": "1f498.png",
          "name": "HEART WITH ARROW",
          "sheet_x": 13,
          "sheet_y": 2,
          "short_name": "cupid",
          "short_names": [
              "cupid"
          ],
          "softbank": "E329",
          "text": null,
          "unified": "1F498"
      },
      {
          "au": "EAA7",
          "docomo": "E6EC",
          "google": "FEB13",
          "image": "1f499.png",
          "name": "BLUE HEART",
          "sheet_x": 13,
          "sheet_y": 3,
          "short_name": "blue_heart",
          "short_names": [
              "blue_heart"
          ],
          "softbank": "E32A",
          "text": "<3",
          "unified": "1F499"
      },
      {
          "au": "EAA8",
          "docomo": "E6EC",
          "google": "FEB14",
          "image": "1f49a.png",
          "name": "GREEN HEART",
          "sheet_x": 13,
          "sheet_y": 4,
          "short_name": "green_heart",
          "short_names": [
              "green_heart"
          ],
          "softbank": "E32B",
          "text": "<3",
          "unified": "1F49A"
      },
      {
          "au": "EAA9",
          "docomo": "E6EC",
          "google": "FEB15",
          "image": "1f49b.png",
          "name": "YELLOW HEART",
          "sheet_x": 13,
          "sheet_y": 5,
          "short_name": "yellow_heart",
          "short_names": [
              "yellow_heart"
          ],
          "softbank": "E32C",
          "text": "<3",
          "unified": "1F49B"
      },
      {
          "au": "EAAA",
          "docomo": "E6EC",
          "google": "FEB16",
          "image": "1f49c.png",
          "name": "PURPLE HEART",
          "sheet_x": 13,
          "sheet_y": 6,
          "short_name": "purple_heart",
          "short_names": [
              "purple_heart"
          ],
          "softbank": "E32D",
          "text": "<3",
          "unified": "1F49C"
      },
      {
          "au": "EB54",
          "docomo": "E6EC",
          "google": "FEB17",
          "image": "1f49d.png",
          "name": "HEART WITH RIBBON",
          "sheet_x": 13,
          "sheet_y": 7,
          "short_name": "gift_heart",
          "short_names": [
              "gift_heart"
          ],
          "softbank": "E437",
          "text": null,
          "unified": "1F49D"
      },
      {
          "au": "E5AF",
          "docomo": "E6ED",
          "google": "FEB18",
          "image": "1f49e.png",
          "name": "REVOLVING HEARTS",
          "sheet_x": 13,
          "sheet_y": 8,
          "short_name": "revolving_hearts",
          "short_names": [
              "revolving_hearts"
          ],
          "softbank": "E327",
          "text": null,
          "unified": "1F49E"
      },
      {
          "au": "E595",
          "docomo": "E6F8",
          "google": "FEB19",
          "image": "1f49f.png",
          "name": "HEART DECORATION",
          "sheet_x": 13,
          "sheet_y": 9,
          "short_name": "heart_decoration",
          "short_names": [
              "heart_decoration"
          ],
          "softbank": "E204",
          "text": null,
          "unified": "1F49F"
      },
      {
          "au": "",
          "docomo": "E6F8",
          "google": "FEB55",
          "image": "1f4a0.png",
          "name": "DIAMOND SHAPE WITH A DOT INSIDE",
          "sheet_x": 13,
          "sheet_y": 10,
          "short_name": "diamond_shape_with_a_dot_inside",
          "short_names": [
              "diamond_shape_with_a_dot_inside"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4A0"
      },
      {
          "au": "E476",
          "docomo": "E6FB",
          "google": "FEB56",
          "image": "1f4a1.png",
          "name": "ELECTRIC LIGHT BULB",
          "sheet_x": 13,
          "sheet_y": 11,
          "short_name": "bulb",
          "short_names": [
              "bulb"
          ],
          "softbank": "E10F",
          "text": null,
          "unified": "1F4A1"
      },
      {
          "au": "E4E5",
          "docomo": "E6FC",
          "google": "FEB57",
          "image": "1f4a2.png",
          "name": "ANGER SYMBOL",
          "sheet_x": 13,
          "sheet_y": 12,
          "short_name": "anger",
          "short_names": [
              "anger"
          ],
          "softbank": "E334",
          "text": null,
          "unified": "1F4A2"
      },
      {
          "au": "E47A",
          "docomo": "E6FE",
          "google": "FEB58",
          "image": "1f4a3.png",
          "name": "BOMB",
          "sheet_x": 13,
          "sheet_y": 13,
          "short_name": "bomb",
          "short_names": [
              "bomb"
          ],
          "softbank": "E311",
          "text": null,
          "unified": "1F4A3"
      },
      {
          "au": "E475",
          "docomo": "E701",
          "google": "FEB59",
          "image": "1f4a4.png",
          "name": "SLEEPING SYMBOL",
          "sheet_x": 13,
          "sheet_y": 14,
          "short_name": "zzz",
          "short_names": [
              "zzz"
          ],
          "softbank": "E13C",
          "text": null,
          "unified": "1F4A4"
      },
      {
          "au": "E5B0",
          "docomo": "E705",
          "google": "FEB5A",
          "image": "1f4a5.png",
          "name": "COLLISION SYMBOL",
          "sheet_x": 13,
          "sheet_y": 15,
          "short_name": "boom",
          "short_names": [
              "boom",
              "collision"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4A5"
      },
      {
          "au": "E5B1",
          "docomo": "E706",
          "google": "FEB5B",
          "image": "1f4a6.png",
          "name": "SPLASHING SWEAT SYMBOL",
          "sheet_x": 13,
          "sheet_y": 16,
          "short_name": "sweat_drops",
          "short_names": [
              "sweat_drops"
          ],
          "softbank": "E331",
          "text": null,
          "unified": "1F4A6"
      },
      {
          "au": "E4E6",
          "docomo": "E707",
          "google": "FEB5C",
          "image": "1f4a7.png",
          "name": "DROPLET",
          "sheet_x": 13,
          "sheet_y": 17,
          "short_name": "droplet",
          "short_names": [
              "droplet"
          ],
          "softbank": "E331",
          "text": null,
          "unified": "1F4A7"
      },
      {
          "au": "E4F4",
          "docomo": "E708",
          "google": "FEB5D",
          "image": "1f4a8.png",
          "name": "DASH SYMBOL",
          "sheet_x": 13,
          "sheet_y": 18,
          "short_name": "dash",
          "short_names": [
              "dash"
          ],
          "softbank": "E330",
          "text": null,
          "unified": "1F4A8"
      },
      {
          "au": "E4F5",
          "docomo": "",
          "google": "FE4F4",
          "image": "1f4a9.png",
          "name": "PILE OF POO",
          "sheet_x": 13,
          "sheet_y": 19,
          "short_name": "hankey",
          "short_names": [
              "hankey",
              "poop",
              "shit"
          ],
          "softbank": "E05A",
          "text": null,
          "unified": "1F4A9"
      },
      {
          "au": "E4E9",
          "docomo": "",
          "google": "FEB5E",
          "image": "1f4aa.png",
          "name": "FLEXED BICEPS",
          "sheet_x": 13,
          "sheet_y": 20,
          "short_name": "muscle",
          "short_names": [
              "muscle"
          ],
          "softbank": "E14C",
          "text": null,
          "unified": "1F4AA"
      },
      {
          "au": "EB5C",
          "docomo": "",
          "google": "FEB5F",
          "image": "1f4ab.png",
          "name": "DIZZY SYMBOL",
          "sheet_x": 13,
          "sheet_y": 21,
          "short_name": "dizzy",
          "short_names": [
              "dizzy"
          ],
          "softbank": "E407",
          "text": null,
          "unified": "1F4AB"
      },
      {
          "au": "E4FD",
          "docomo": "",
          "google": "FE532",
          "image": "1f4ac.png",
          "name": "SPEECH BALLOON",
          "sheet_x": 13,
          "sheet_y": 22,
          "short_name": "speech_balloon",
          "short_names": [
              "speech_balloon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4AC"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4ad.png",
          "name": "THOUGHT BALLOON",
          "sheet_x": 13,
          "sheet_y": 23,
          "short_name": "thought_balloon",
          "short_names": [
              "thought_balloon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4AD"
      },
      {
          "au": "E4F0",
          "docomo": "",
          "google": "FEB7A",
          "image": "1f4ae.png",
          "name": "WHITE FLOWER",
          "sheet_x": 13,
          "sheet_y": 24,
          "short_name": "white_flower",
          "short_names": [
              "white_flower"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4AE"
      },
      {
          "au": "E4F2",
          "docomo": "",
          "google": "FEB7B",
          "image": "1f4af.png",
          "name": "HUNDRED POINTS SYMBOL",
          "sheet_x": 13,
          "sheet_y": 25,
          "short_name": "100",
          "short_names": [
              "100"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4AF"
      },
      {
          "au": "E4C7",
          "docomo": "E715",
          "google": "FE4DD",
          "image": "1f4b0.png",
          "name": "MONEY BAG",
          "sheet_x": 13,
          "sheet_y": 26,
          "short_name": "moneybag",
          "short_names": [
              "moneybag"
          ],
          "softbank": "E12F",
          "text": null,
          "unified": "1F4B0"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE4DE",
          "image": "1f4b1.png",
          "name": "CURRENCY EXCHANGE",
          "sheet_x": 13,
          "sheet_y": 27,
          "short_name": "currency_exchange",
          "short_names": [
              "currency_exchange"
          ],
          "softbank": "E149",
          "text": null,
          "unified": "1F4B1"
      },
      {
          "au": "E579",
          "docomo": "E715",
          "google": "FE4E0",
          "image": "1f4b2.png",
          "name": "HEAVY DOLLAR SIGN",
          "sheet_x": 13,
          "sheet_y": 28,
          "short_name": "heavy_dollar_sign",
          "short_names": [
              "heavy_dollar_sign"
          ],
          "softbank": "E12F",
          "text": null,
          "unified": "1F4B2"
      },
      {
          "au": "E57C",
          "docomo": "",
          "google": "FE4E1",
          "image": "1f4b3.png",
          "name": "CREDIT CARD",
          "sheet_x": 13,
          "sheet_y": 29,
          "short_name": "credit_card",
          "short_names": [
              "credit_card"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4B3"
      },
      {
          "au": "E57D",
          "docomo": "E6D6",
          "google": "FE4E2",
          "image": "1f4b4.png",
          "name": "BANKNOTE WITH YEN SIGN",
          "sheet_x": 14,
          "sheet_y": 0,
          "short_name": "yen",
          "short_names": [
              "yen"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4B4"
      },
      {
          "au": "E585",
          "docomo": "E715",
          "google": "FE4E3",
          "image": "1f4b5.png",
          "name": "BANKNOTE WITH DOLLAR SIGN",
          "sheet_x": 14,
          "sheet_y": 1,
          "short_name": "dollar",
          "short_names": [
              "dollar"
          ],
          "softbank": "E12F",
          "text": null,
          "unified": "1F4B5"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4b6.png",
          "name": "BANKNOTE WITH EURO SIGN",
          "sheet_x": 14,
          "sheet_y": 2,
          "short_name": "euro",
          "short_names": [
              "euro"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4B6"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4b7.png",
          "name": "BANKNOTE WITH POUND SIGN",
          "sheet_x": 14,
          "sheet_y": 3,
          "short_name": "pound",
          "short_names": [
              "pound"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4B7"
      },
      {
          "au": "EB5B",
          "docomo": "",
          "google": "FE4E4",
          "image": "1f4b8.png",
          "name": "MONEY WITH WINGS",
          "sheet_x": 14,
          "sheet_y": 4,
          "short_name": "money_with_wings",
          "short_names": [
              "money_with_wings"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4B8"
      },
      {
          "au": "E5DC",
          "docomo": "",
          "google": "FE4DF",
          "image": "1f4b9.png",
          "name": "CHART WITH UPWARDS TREND AND YEN SIGN",
          "sheet_x": 14,
          "sheet_y": 5,
          "short_name": "chart",
          "short_names": [
              "chart"
          ],
          "softbank": "E14A",
          "text": null,
          "unified": "1F4B9"
      },
      {
          "au": "",
          "docomo": "E6B2",
          "google": "FE537",
          "image": "1f4ba.png",
          "name": "SEAT",
          "sheet_x": 14,
          "sheet_y": 6,
          "short_name": "seat",
          "short_names": [
              "seat"
          ],
          "softbank": "E11F",
          "text": null,
          "unified": "1F4BA"
      },
      {
          "au": "E5B8",
          "docomo": "E716",
          "google": "FE538",
          "image": "1f4bb.png",
          "name": "PERSONAL COMPUTER",
          "sheet_x": 14,
          "sheet_y": 7,
          "short_name": "computer",
          "short_names": [
              "computer"
          ],
          "softbank": "E00C",
          "text": null,
          "unified": "1F4BB"
      },
      {
          "au": "E5CE",
          "docomo": "E682",
          "google": "FE53B",
          "image": "1f4bc.png",
          "name": "BRIEFCASE",
          "sheet_x": 14,
          "sheet_y": 8,
          "short_name": "briefcase",
          "short_names": [
              "briefcase"
          ],
          "softbank": "E11E",
          "text": null,
          "unified": "1F4BC"
      },
      {
          "au": "E582",
          "docomo": "",
          "google": "FE53C",
          "image": "1f4bd.png",
          "name": "MINIDISC",
          "sheet_x": 14,
          "sheet_y": 9,
          "short_name": "minidisc",
          "short_names": [
              "minidisc"
          ],
          "softbank": "E316",
          "text": null,
          "unified": "1F4BD"
      },
      {
          "au": "E562",
          "docomo": "",
          "google": "FE53D",
          "image": "1f4be.png",
          "name": "FLOPPY DISK",
          "sheet_x": 14,
          "sheet_y": 10,
          "short_name": "floppy_disk",
          "short_names": [
              "floppy_disk"
          ],
          "softbank": "E316",
          "text": null,
          "unified": "1F4BE"
      },
      {
          "au": "E50C",
          "docomo": "E68C",
          "google": "FE81D",
          "image": "1f4bf.png",
          "name": "OPTICAL DISC",
          "sheet_x": 14,
          "sheet_y": 11,
          "short_name": "cd",
          "short_names": [
              "cd"
          ],
          "softbank": "E126",
          "text": null,
          "unified": "1F4BF"
      },
      {
          "au": "E50C",
          "docomo": "E68C",
          "google": "FE81E",
          "image": "1f4c0.png",
          "name": "DVD",
          "sheet_x": 14,
          "sheet_y": 12,
          "short_name": "dvd",
          "short_names": [
              "dvd"
          ],
          "softbank": "E127",
          "text": null,
          "unified": "1F4C0"
      },
      {
          "au": "E58F",
          "docomo": "",
          "google": "FE543",
          "image": "1f4c1.png",
          "name": "FILE FOLDER",
          "sheet_x": 14,
          "sheet_y": 13,
          "short_name": "file_folder",
          "short_names": [
              "file_folder"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4C1"
      },
      {
          "au": "E590",
          "docomo": "",
          "google": "FE544",
          "image": "1f4c2.png",
          "name": "OPEN FILE FOLDER",
          "sheet_x": 14,
          "sheet_y": 14,
          "short_name": "open_file_folder",
          "short_names": [
              "open_file_folder"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4C2"
      },
      {
          "au": "E561",
          "docomo": "E689",
          "google": "FE540",
          "image": "1f4c3.png",
          "name": "PAGE WITH CURL",
          "sheet_x": 14,
          "sheet_y": 15,
          "short_name": "page_with_curl",
          "short_names": [
              "page_with_curl"
          ],
          "softbank": "E301",
          "text": null,
          "unified": "1F4C3"
      },
      {
          "au": "E569",
          "docomo": "E689",
          "google": "FE541",
          "image": "1f4c4.png",
          "name": "PAGE FACING UP",
          "sheet_x": 14,
          "sheet_y": 16,
          "short_name": "page_facing_up",
          "short_names": [
              "page_facing_up"
          ],
          "softbank": "E301",
          "text": null,
          "unified": "1F4C4"
      },
      {
          "au": "E563",
          "docomo": "",
          "google": "FE542",
          "image": "1f4c5.png",
          "name": "CALENDAR",
          "sheet_x": 14,
          "sheet_y": 17,
          "short_name": "date",
          "short_names": [
              "date"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4C5"
      },
      {
          "au": "E56A",
          "docomo": "",
          "google": "FE549",
          "image": "1f4c6.png",
          "name": "TEAR-OFF CALENDAR",
          "sheet_x": 14,
          "sheet_y": 18,
          "short_name": "calendar",
          "short_names": [
              "calendar"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4C6"
      },
      {
          "au": "E56C",
          "docomo": "E683",
          "google": "FE54D",
          "image": "1f4c7.png",
          "name": "CARD INDEX",
          "sheet_x": 14,
          "sheet_y": 19,
          "short_name": "card_index",
          "short_names": [
              "card_index"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4C7"
      },
      {
          "au": "E575",
          "docomo": "",
          "google": "FE54B",
          "image": "1f4c8.png",
          "name": "CHART WITH UPWARDS TREND",
          "sheet_x": 14,
          "sheet_y": 20,
          "short_name": "chart_with_upwards_trend",
          "short_names": [
              "chart_with_upwards_trend"
          ],
          "softbank": "E14A",
          "text": null,
          "unified": "1F4C8"
      },
      {
          "au": "E576",
          "docomo": "",
          "google": "FE54C",
          "image": "1f4c9.png",
          "name": "CHART WITH DOWNWARDS TREND",
          "sheet_x": 14,
          "sheet_y": 21,
          "short_name": "chart_with_downwards_trend",
          "short_names": [
              "chart_with_downwards_trend"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4C9"
      },
      {
          "au": "E574",
          "docomo": "",
          "google": "FE54A",
          "image": "1f4ca.png",
          "name": "BAR CHART",
          "sheet_x": 14,
          "sheet_y": 22,
          "short_name": "bar_chart",
          "short_names": [
              "bar_chart"
          ],
          "softbank": "E14A",
          "text": null,
          "unified": "1F4CA"
      },
      {
          "au": "E564",
          "docomo": "E689",
          "google": "FE548",
          "image": "1f4cb.png",
          "name": "CLIPBOARD",
          "sheet_x": 14,
          "sheet_y": 23,
          "short_name": "clipboard",
          "short_names": [
              "clipboard"
          ],
          "softbank": "E301",
          "text": null,
          "unified": "1F4CB"
      },
      {
          "au": "E56D",
          "docomo": "",
          "google": "FE54E",
          "image": "1f4cc.png",
          "name": "PUSHPIN",
          "sheet_x": 14,
          "sheet_y": 24,
          "short_name": "pushpin",
          "short_names": [
              "pushpin"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4CC"
      },
      {
          "au": "E560",
          "docomo": "",
          "google": "FE53F",
          "image": "1f4cd.png",
          "name": "ROUND PUSHPIN",
          "sheet_x": 14,
          "sheet_y": 25,
          "short_name": "round_pushpin",
          "short_names": [
              "round_pushpin"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4CD"
      },
      {
          "au": "E4A0",
          "docomo": "E730",
          "google": "FE53A",
          "image": "1f4ce.png",
          "name": "PAPERCLIP",
          "sheet_x": 14,
          "sheet_y": 26,
          "short_name": "paperclip",
          "short_names": [
              "paperclip"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4CE"
      },
      {
          "au": "E570",
          "docomo": "",
          "google": "FE550",
          "image": "1f4cf.png",
          "name": "STRAIGHT RULER",
          "sheet_x": 14,
          "sheet_y": 27,
          "short_name": "straight_ruler",
          "short_names": [
              "straight_ruler"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4CF"
      },
      {
          "au": "E4A2",
          "docomo": "",
          "google": "FE551",
          "image": "1f4d0.png",
          "name": "TRIANGULAR RULER",
          "sheet_x": 14,
          "sheet_y": 28,
          "short_name": "triangular_ruler",
          "short_names": [
              "triangular_ruler"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4D0"
      },
      {
          "au": "EB0B",
          "docomo": "E689",
          "google": "FE552",
          "image": "1f4d1.png",
          "name": "BOOKMARK TABS",
          "sheet_x": 14,
          "sheet_y": 29,
          "short_name": "bookmark_tabs",
          "short_names": [
              "bookmark_tabs"
          ],
          "softbank": "E301",
          "text": null,
          "unified": "1F4D1"
      },
      {
          "au": "E56E",
          "docomo": "E683",
          "google": "FE54F",
          "image": "1f4d2.png",
          "name": "LEDGER",
          "sheet_x": 15,
          "sheet_y": 0,
          "short_name": "ledger",
          "short_names": [
              "ledger"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D2"
      },
      {
          "au": "E56B",
          "docomo": "E683",
          "google": "FE545",
          "image": "1f4d3.png",
          "name": "NOTEBOOK",
          "sheet_x": 15,
          "sheet_y": 1,
          "short_name": "notebook",
          "short_names": [
              "notebook"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D3"
      },
      {
          "au": "E49D",
          "docomo": "E683",
          "google": "FE547",
          "image": "1f4d4.png",
          "name": "NOTEBOOK WITH DECORATIVE COVER",
          "sheet_x": 15,
          "sheet_y": 2,
          "short_name": "notebook_with_decorative_cover",
          "short_names": [
              "notebook_with_decorative_cover"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D4"
      },
      {
          "au": "E568",
          "docomo": "E683",
          "google": "FE502",
          "image": "1f4d5.png",
          "name": "CLOSED BOOK",
          "sheet_x": 15,
          "sheet_y": 3,
          "short_name": "closed_book",
          "short_names": [
              "closed_book"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D5"
      },
      {
          "au": "E49F",
          "docomo": "E683",
          "google": "FE546",
          "image": "1f4d6.png",
          "name": "OPEN BOOK",
          "sheet_x": 15,
          "sheet_y": 4,
          "short_name": "book",
          "short_names": [
              "book",
              "open_book"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D6"
      },
      {
          "au": "E565",
          "docomo": "E683",
          "google": "FE4FF",
          "image": "1f4d7.png",
          "name": "GREEN BOOK",
          "sheet_x": 15,
          "sheet_y": 5,
          "short_name": "green_book",
          "short_names": [
              "green_book"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D7"
      },
      {
          "au": "E566",
          "docomo": "E683",
          "google": "FE500",
          "image": "1f4d8.png",
          "name": "BLUE BOOK",
          "sheet_x": 15,
          "sheet_y": 6,
          "short_name": "blue_book",
          "short_names": [
              "blue_book"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D8"
      },
      {
          "au": "E567",
          "docomo": "E683",
          "google": "FE501",
          "image": "1f4d9.png",
          "name": "ORANGE BOOK",
          "sheet_x": 15,
          "sheet_y": 7,
          "short_name": "orange_book",
          "short_names": [
              "orange_book"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4D9"
      },
      {
          "au": "E56F",
          "docomo": "E683",
          "google": "FE503",
          "image": "1f4da.png",
          "name": "BOOKS",
          "sheet_x": 15,
          "sheet_y": 8,
          "short_name": "books",
          "short_names": [
              "books"
          ],
          "softbank": "E148",
          "text": null,
          "unified": "1F4DA"
      },
      {
          "au": "E51D",
          "docomo": "",
          "google": "FE504",
          "image": "1f4db.png",
          "name": "NAME BADGE",
          "sheet_x": 15,
          "sheet_y": 9,
          "short_name": "name_badge",
          "short_names": [
              "name_badge"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4DB"
      },
      {
          "au": "E55F",
          "docomo": "E70A",
          "google": "FE4FD",
          "image": "1f4dc.png",
          "name": "SCROLL",
          "sheet_x": 15,
          "sheet_y": 10,
          "short_name": "scroll",
          "short_names": [
              "scroll"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4DC"
      },
      {
          "au": "EA92",
          "docomo": "E689",
          "google": "FE527",
          "image": "1f4dd.png",
          "name": "MEMO",
          "sheet_x": 15,
          "sheet_y": 11,
          "short_name": "memo",
          "short_names": [
              "memo",
              "pencil"
          ],
          "softbank": "E301",
          "text": null,
          "unified": "1F4DD"
      },
      {
          "au": "E51E",
          "docomo": "E687",
          "google": "FE524",
          "image": "1f4de.png",
          "name": "TELEPHONE RECEIVER",
          "sheet_x": 15,
          "sheet_y": 12,
          "short_name": "telephone_receiver",
          "short_names": [
              "telephone_receiver"
          ],
          "softbank": "E009",
          "text": null,
          "unified": "1F4DE"
      },
      {
          "au": "E59B",
          "docomo": "E65A",
          "google": "FE522",
          "image": "1f4df.png",
          "name": "PAGER",
          "sheet_x": 15,
          "sheet_y": 13,
          "short_name": "pager",
          "short_names": [
              "pager"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4DF"
      },
      {
          "au": "E520",
          "docomo": "E6D0",
          "google": "FE528",
          "image": "1f4e0.png",
          "name": "FAX MACHINE",
          "sheet_x": 15,
          "sheet_y": 14,
          "short_name": "fax",
          "short_names": [
              "fax"
          ],
          "softbank": "E00B",
          "text": null,
          "unified": "1F4E0"
      },
      {
          "au": "E4A8",
          "docomo": "",
          "google": "FE531",
          "image": "1f4e1.png",
          "name": "SATELLITE ANTENNA",
          "sheet_x": 15,
          "sheet_y": 15,
          "short_name": "satellite",
          "short_names": [
              "satellite"
          ],
          "softbank": "E14B",
          "text": null,
          "unified": "1F4E1"
      },
      {
          "au": "E511",
          "docomo": "",
          "google": "FE52F",
          "image": "1f4e2.png",
          "name": "PUBLIC ADDRESS LOUDSPEAKER",
          "sheet_x": 15,
          "sheet_y": 16,
          "short_name": "loudspeaker",
          "short_names": [
              "loudspeaker"
          ],
          "softbank": "E142",
          "text": null,
          "unified": "1F4E2"
      },
      {
          "au": "E511",
          "docomo": "",
          "google": "FE530",
          "image": "1f4e3.png",
          "name": "CHEERING MEGAPHONE",
          "sheet_x": 15,
          "sheet_y": 17,
          "short_name": "mega",
          "short_names": [
              "mega"
          ],
          "softbank": "E317",
          "text": null,
          "unified": "1F4E3"
      },
      {
          "au": "E592",
          "docomo": "",
          "google": "FE533",
          "image": "1f4e4.png",
          "name": "OUTBOX TRAY",
          "sheet_x": 15,
          "sheet_y": 18,
          "short_name": "outbox_tray",
          "short_names": [
              "outbox_tray"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4E4"
      },
      {
          "au": "E593",
          "docomo": "",
          "google": "FE534",
          "image": "1f4e5.png",
          "name": "INBOX TRAY",
          "sheet_x": 15,
          "sheet_y": 19,
          "short_name": "inbox_tray",
          "short_names": [
              "inbox_tray"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4E5"
      },
      {
          "au": "E51F",
          "docomo": "E685",
          "google": "FE535",
          "image": "1f4e6.png",
          "name": "PACKAGE",
          "sheet_x": 15,
          "sheet_y": 20,
          "short_name": "package",
          "short_names": [
              "package"
          ],
          "softbank": "E112",
          "text": null,
          "unified": "1F4E6"
      },
      {
          "au": "EB71",
          "docomo": "E6D3",
          "google": "FEB92",
          "image": "1f4e7.png",
          "name": "E-MAIL SYMBOL",
          "sheet_x": 15,
          "sheet_y": 21,
          "short_name": "e-mail",
          "short_names": [
              "e-mail"
          ],
          "softbank": "E103",
          "text": null,
          "unified": "1F4E7"
      },
      {
          "au": "E591",
          "docomo": "E6CF",
          "google": "FE52A",
          "image": "1f4e8.png",
          "name": "INCOMING ENVELOPE",
          "sheet_x": 15,
          "sheet_y": 22,
          "short_name": "incoming_envelope",
          "short_names": [
              "incoming_envelope"
          ],
          "softbank": "E103",
          "text": null,
          "unified": "1F4E8"
      },
      {
          "au": "EB62",
          "docomo": "E6CF",
          "google": "FE52B",
          "image": "1f4e9.png",
          "name": "ENVELOPE WITH DOWNWARDS ARROW ABOVE",
          "sheet_x": 15,
          "sheet_y": 23,
          "short_name": "envelope_with_arrow",
          "short_names": [
              "envelope_with_arrow"
          ],
          "softbank": "E103",
          "text": null,
          "unified": "1F4E9"
      },
      {
          "au": "E51B",
          "docomo": "E665",
          "google": "FE52C",
          "image": "1f4ea.png",
          "name": "CLOSED MAILBOX WITH LOWERED FLAG",
          "sheet_x": 15,
          "sheet_y": 24,
          "short_name": "mailbox_closed",
          "short_names": [
              "mailbox_closed"
          ],
          "softbank": "E101",
          "text": null,
          "unified": "1F4EA"
      },
      {
          "au": "EB0A",
          "docomo": "E665",
          "google": "FE52D",
          "image": "1f4eb.png",
          "name": "CLOSED MAILBOX WITH RAISED FLAG",
          "sheet_x": 15,
          "sheet_y": 25,
          "short_name": "mailbox",
          "short_names": [
              "mailbox"
          ],
          "softbank": "E101",
          "text": null,
          "unified": "1F4EB"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4ec.png",
          "name": "OPEN MAILBOX WITH RAISED FLAG",
          "sheet_x": 15,
          "sheet_y": 26,
          "short_name": "mailbox_with_mail",
          "short_names": [
              "mailbox_with_mail"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4EC"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4ed.png",
          "name": "OPEN MAILBOX WITH LOWERED FLAG",
          "sheet_x": 15,
          "sheet_y": 27,
          "short_name": "mailbox_with_no_mail",
          "short_names": [
              "mailbox_with_no_mail"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4ED"
      },
      {
          "au": "E51B",
          "docomo": "E665",
          "google": "FE52E",
          "image": "1f4ee.png",
          "name": "POSTBOX",
          "sheet_x": 15,
          "sheet_y": 28,
          "short_name": "postbox",
          "short_names": [
              "postbox"
          ],
          "softbank": "E102",
          "text": null,
          "unified": "1F4EE"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4ef.png",
          "name": "POSTAL HORN",
          "sheet_x": 15,
          "sheet_y": 29,
          "short_name": "postal_horn",
          "short_names": [
              "postal_horn"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4EF"
      },
      {
          "au": "E58B",
          "docomo": "",
          "google": "FE822",
          "image": "1f4f0.png",
          "name": "NEWSPAPER",
          "sheet_x": 16,
          "sheet_y": 0,
          "short_name": "newspaper",
          "short_names": [
              "newspaper"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4F0"
      },
      {
          "au": "E588",
          "docomo": "E688",
          "google": "FE525",
          "image": "1f4f1.png",
          "name": "MOBILE PHONE",
          "sheet_x": 16,
          "sheet_y": 1,
          "short_name": "iphone",
          "short_names": [
              "iphone"
          ],
          "softbank": "E00A",
          "text": null,
          "unified": "1F4F1"
      },
      {
          "au": "EB08",
          "docomo": "E6CE",
          "google": "FE526",
          "image": "1f4f2.png",
          "name": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT",
          "sheet_x": 16,
          "sheet_y": 2,
          "short_name": "calling",
          "short_names": [
              "calling"
          ],
          "softbank": "E104",
          "text": null,
          "unified": "1F4F2"
      },
      {
          "au": "EA90",
          "docomo": "",
          "google": "FE839",
          "image": "1f4f3.png",
          "name": "VIBRATION MODE",
          "sheet_x": 16,
          "sheet_y": 3,
          "short_name": "vibration_mode",
          "short_names": [
              "vibration_mode"
          ],
          "softbank": "E250",
          "text": null,
          "unified": "1F4F3"
      },
      {
          "au": "EA91",
          "docomo": "",
          "google": "FE83A",
          "image": "1f4f4.png",
          "name": "MOBILE PHONE OFF",
          "sheet_x": 16,
          "sheet_y": 4,
          "short_name": "mobile_phone_off",
          "short_names": [
              "mobile_phone_off"
          ],
          "softbank": "E251",
          "text": null,
          "unified": "1F4F4"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f4f5.png",
          "name": "NO MOBILE PHONES",
          "sheet_x": 16,
          "sheet_y": 5,
          "short_name": "no_mobile_phones",
          "short_names": [
              "no_mobile_phones"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F4F5"
      },
      {
          "au": "EA84",
          "docomo": "",
          "google": "FE838",
          "image": "1f4f6.png",
          "name": "ANTENNA WITH BARS",
          "sheet_x": 16,
          "sheet_y": 6,
          "short_name": "signal_strength",
          "short_names": [
              "signal_strength"
          ],
          "softbank": "E20B",
          "text": null,
          "unified": "1F4F6"
      },
      {
          "au": "E515",
          "docomo": "E681",
          "google": "FE4EF",
          "image": "1f4f7.png",
          "name": "CAMERA",
          "sheet_x": 16,
          "sheet_y": 7,
          "short_name": "camera",
          "short_names": [
              "camera"
          ],
          "softbank": "E008",
          "text": null,
          "unified": "1F4F7"
      },
      {
          "au": "E57E",
          "docomo": "E677",
          "google": "FE4F9",
          "image": "1f4f9.png",
          "name": "VIDEO CAMERA",
          "sheet_x": 16,
          "sheet_y": 8,
          "short_name": "video_camera",
          "short_names": [
              "video_camera"
          ],
          "softbank": "E03D",
          "text": null,
          "unified": "1F4F9"
      },
      {
          "au": "E502",
          "docomo": "E68A",
          "google": "FE81C",
          "image": "1f4fa.png",
          "name": "TELEVISION",
          "sheet_x": 16,
          "sheet_y": 9,
          "short_name": "tv",
          "short_names": [
              "tv"
          ],
          "softbank": "E12A",
          "text": null,
          "unified": "1F4FA"
      },
      {
          "au": "E5B9",
          "docomo": "",
          "google": "FE81F",
          "image": "1f4fb.png",
          "name": "RADIO",
          "sheet_x": 16,
          "sheet_y": 10,
          "short_name": "radio",
          "short_names": [
              "radio"
          ],
          "softbank": "E128",
          "text": null,
          "unified": "1F4FB"
      },
      {
          "au": "E580",
          "docomo": "",
          "google": "FE820",
          "image": "1f4fc.png",
          "name": "VIDEOCASSETTE",
          "sheet_x": 16,
          "sheet_y": 11,
          "short_name": "vhs",
          "short_names": [
              "vhs"
          ],
          "softbank": "E129",
          "text": null,
          "unified": "1F4FC"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f500.png",
          "name": "TWISTED RIGHTWARDS ARROWS",
          "sheet_x": 16,
          "sheet_y": 12,
          "short_name": "twisted_rightwards_arrows",
          "short_names": [
              "twisted_rightwards_arrows"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F500"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f501.png",
          "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS",
          "sheet_x": 16,
          "sheet_y": 13,
          "short_name": "repeat",
          "short_names": [
              "repeat"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F501"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f502.png",
          "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY",
          "sheet_x": 16,
          "sheet_y": 14,
          "short_name": "repeat_one",
          "short_names": [
              "repeat_one"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F502"
      },
      {
          "au": "EB0D",
          "docomo": "E735",
          "google": "FEB91",
          "image": "1f503.png",
          "name": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
          "sheet_x": 16,
          "sheet_y": 15,
          "short_name": "arrows_clockwise",
          "short_names": [
              "arrows_clockwise"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F503"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f504.png",
          "name": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
          "sheet_x": 16,
          "sheet_y": 16,
          "short_name": "arrows_counterclockwise",
          "short_names": [
              "arrows_counterclockwise"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F504"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f505.png",
          "name": "LOW BRIGHTNESS SYMBOL",
          "sheet_x": 16,
          "sheet_y": 17,
          "short_name": "low_brightness",
          "short_names": [
              "low_brightness"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F505"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f506.png",
          "name": "HIGH BRIGHTNESS SYMBOL",
          "sheet_x": 16,
          "sheet_y": 18,
          "short_name": "high_brightness",
          "short_names": [
              "high_brightness"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F506"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f507.png",
          "name": "SPEAKER WITH CANCELLATION STROKE",
          "sheet_x": 16,
          "sheet_y": 19,
          "short_name": "mute",
          "short_names": [
              "mute"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F507"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f509.png",
          "name": "SPEAKER WITH ONE SOUND WAVE",
          "sheet_x": 16,
          "sheet_y": 20,
          "short_name": "sound",
          "short_names": [
              "sound"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F509"
      },
      {
          "au": "E511",
          "docomo": "",
          "google": "FE821",
          "image": "1f50a.png",
          "name": "SPEAKER WITH THREE SOUND WAVES",
          "sheet_x": 16,
          "sheet_y": 21,
          "short_name": "speaker",
          "short_names": [
              "speaker"
          ],
          "softbank": "E141",
          "text": null,
          "unified": "1F50A"
      },
      {
          "au": "E584",
          "docomo": "",
          "google": "FE4FC",
          "image": "1f50b.png",
          "name": "BATTERY",
          "sheet_x": 16,
          "sheet_y": 22,
          "short_name": "battery",
          "short_names": [
              "battery"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F50B"
      },
      {
          "au": "E589",
          "docomo": "",
          "google": "FE4FE",
          "image": "1f50c.png",
          "name": "ELECTRIC PLUG",
          "sheet_x": 16,
          "sheet_y": 23,
          "short_name": "electric_plug",
          "short_names": [
              "electric_plug"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F50C"
      },
      {
          "au": "E518",
          "docomo": "E6DC",
          "google": "FEB85",
          "image": "1f50d.png",
          "name": "LEFT-POINTING MAGNIFYING GLASS",
          "sheet_x": 16,
          "sheet_y": 24,
          "short_name": "mag",
          "short_names": [
              "mag"
          ],
          "softbank": "E114",
          "text": null,
          "unified": "1F50D"
      },
      {
          "au": "EB05",
          "docomo": "E6DC",
          "google": "FEB8D",
          "image": "1f50e.png",
          "name": "RIGHT-POINTING MAGNIFYING GLASS",
          "sheet_x": 16,
          "sheet_y": 25,
          "short_name": "mag_right",
          "short_names": [
              "mag_right"
          ],
          "softbank": "E114",
          "text": null,
          "unified": "1F50E"
      },
      {
          "au": "EB0C",
          "docomo": "E6D9",
          "google": "FEB90",
          "image": "1f50f.png",
          "name": "LOCK WITH INK PEN",
          "sheet_x": 16,
          "sheet_y": 26,
          "short_name": "lock_with_ink_pen",
          "short_names": [
              "lock_with_ink_pen"
          ],
          "softbank": "E144",
          "text": null,
          "unified": "1F50F"
      },
      {
          "au": "EAFC",
          "docomo": "E6D9",
          "google": "FEB8A",
          "image": "1f510.png",
          "name": "CLOSED LOCK WITH KEY",
          "sheet_x": 16,
          "sheet_y": 27,
          "short_name": "closed_lock_with_key",
          "short_names": [
              "closed_lock_with_key"
          ],
          "softbank": "E144",
          "text": null,
          "unified": "1F510"
      },
      {
          "au": "E519",
          "docomo": "E6D9",
          "google": "FEB82",
          "image": "1f511.png",
          "name": "KEY",
          "sheet_x": 16,
          "sheet_y": 28,
          "short_name": "key",
          "short_names": [
              "key"
          ],
          "softbank": "E03F",
          "text": null,
          "unified": "1F511"
      },
      {
          "au": "E51C",
          "docomo": "E6D9",
          "google": "FEB86",
          "image": "1f512.png",
          "name": "LOCK",
          "sheet_x": 16,
          "sheet_y": 29,
          "short_name": "lock",
          "short_names": [
              "lock"
          ],
          "softbank": "E144",
          "text": null,
          "unified": "1F512"
      },
      {
          "au": "E51C",
          "docomo": "E6D9",
          "google": "FEB87",
          "image": "1f513.png",
          "name": "OPEN LOCK",
          "sheet_x": 17,
          "sheet_y": 0,
          "short_name": "unlock",
          "short_names": [
              "unlock"
          ],
          "softbank": "E145",
          "text": null,
          "unified": "1F513"
      },
      {
          "au": "E512",
          "docomo": "E713",
          "google": "FE4F2",
          "image": "1f514.png",
          "name": "BELL",
          "sheet_x": 17,
          "sheet_y": 1,
          "short_name": "bell",
          "short_names": [
              "bell"
          ],
          "softbank": "E325",
          "text": null,
          "unified": "1F514"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f515.png",
          "name": "BELL WITH CANCELLATION STROKE",
          "sheet_x": 17,
          "sheet_y": 2,
          "short_name": "no_bell",
          "short_names": [
              "no_bell"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F515"
      },
      {
          "au": "EB07",
          "docomo": "",
          "google": "FEB8F",
          "image": "1f516.png",
          "name": "BOOKMARK",
          "sheet_x": 17,
          "sheet_y": 3,
          "short_name": "bookmark",
          "short_names": [
              "bookmark"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F516"
      },
      {
          "au": "E58A",
          "docomo": "",
          "google": "FEB4B",
          "image": "1f517.png",
          "name": "LINK SYMBOL",
          "sheet_x": 17,
          "sheet_y": 4,
          "short_name": "link",
          "short_names": [
              "link"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F517"
      },
      {
          "au": "EB04",
          "docomo": "",
          "google": "FEB8C",
          "image": "1f518.png",
          "name": "RADIO BUTTON",
          "sheet_x": 17,
          "sheet_y": 5,
          "short_name": "radio_button",
          "short_names": [
              "radio_button"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F518"
      },
      {
          "au": "EB06",
          "docomo": "",
          "google": "FEB8E",
          "image": "1f519.png",
          "name": "BACK WITH LEFTWARDS ARROW ABOVE",
          "sheet_x": 17,
          "sheet_y": 6,
          "short_name": "back",
          "short_names": [
              "back"
          ],
          "softbank": "E235",
          "text": null,
          "unified": "1F519"
      },
      {
          "au": "",
          "docomo": "E6B9",
          "google": "FE01A",
          "image": "1f51a.png",
          "name": "END WITH LEFTWARDS ARROW ABOVE",
          "sheet_x": 17,
          "sheet_y": 7,
          "short_name": "end",
          "short_names": [
              "end"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F51A"
      },
      {
          "au": "",
          "docomo": "E6B8",
          "google": "FE019",
          "image": "1f51b.png",
          "name": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE",
          "sheet_x": 17,
          "sheet_y": 8,
          "short_name": "on",
          "short_names": [
              "on"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F51B"
      },
      {
          "au": "",
          "docomo": "E6B7",
          "google": "FE018",
          "image": "1f51c.png",
          "name": "SOON WITH RIGHTWARDS ARROW ABOVE",
          "sheet_x": 17,
          "sheet_y": 9,
          "short_name": "soon",
          "short_names": [
              "soon"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F51C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB42",
          "image": "1f51d.png",
          "name": "TOP WITH UPWARDS ARROW ABOVE",
          "sheet_x": 17,
          "sheet_y": 10,
          "short_name": "top",
          "short_names": [
              "top"
          ],
          "softbank": "E24C",
          "text": null,
          "unified": "1F51D"
      },
      {
          "au": "EA83",
          "docomo": "",
          "google": "FEB25",
          "image": "1f51e.png",
          "name": "NO ONE UNDER EIGHTEEN SYMBOL",
          "sheet_x": 17,
          "sheet_y": 11,
          "short_name": "underage",
          "short_names": [
              "underage"
          ],
          "softbank": "E207",
          "text": null,
          "unified": "1F51E"
      },
      {
          "au": "E52B",
          "docomo": "",
          "google": "FE83B",
          "image": "1f51f.png",
          "name": "KEYCAP TEN",
          "sheet_x": 17,
          "sheet_y": 12,
          "short_name": "keycap_ten",
          "short_names": [
              "keycap_ten"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F51F"
      },
      {
          "au": "EAFD",
          "docomo": "",
          "google": "FEB7C",
          "image": "1f520.png",
          "name": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS",
          "sheet_x": 17,
          "sheet_y": 13,
          "short_name": "capital_abcd",
          "short_names": [
              "capital_abcd"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F520"
      },
      {
          "au": "EAFE",
          "docomo": "",
          "google": "FEB7D",
          "image": "1f521.png",
          "name": "INPUT SYMBOL FOR LATIN SMALL LETTERS",
          "sheet_x": 17,
          "sheet_y": 14,
          "short_name": "abcd",
          "short_names": [
              "abcd"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F521"
      },
      {
          "au": "EAFF",
          "docomo": "",
          "google": "FEB7E",
          "image": "1f522.png",
          "name": "INPUT SYMBOL FOR NUMBERS",
          "sheet_x": 17,
          "sheet_y": 15,
          "short_name": "1234",
          "short_names": [
              "1234"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F522"
      },
      {
          "au": "EB00",
          "docomo": "",
          "google": "FEB7F",
          "image": "1f523.png",
          "name": "INPUT SYMBOL FOR SYMBOLS",
          "sheet_x": 17,
          "sheet_y": 16,
          "short_name": "symbols",
          "short_names": [
              "symbols"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F523"
      },
      {
          "au": "EB55",
          "docomo": "",
          "google": "FEB80",
          "image": "1f524.png",
          "name": "INPUT SYMBOL FOR LATIN LETTERS",
          "sheet_x": 17,
          "sheet_y": 17,
          "short_name": "abc",
          "short_names": [
              "abc"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F524"
      },
      {
          "au": "E47B",
          "docomo": "",
          "google": "FE4F6",
          "image": "1f525.png",
          "name": "FIRE",
          "sheet_x": 17,
          "sheet_y": 18,
          "short_name": "fire",
          "short_names": [
              "fire"
          ],
          "softbank": "E11D",
          "text": null,
          "unified": "1F525"
      },
      {
          "au": "E583",
          "docomo": "E6FB",
          "google": "FE4FB",
          "image": "1f526.png",
          "name": "ELECTRIC TORCH",
          "sheet_x": 17,
          "sheet_y": 19,
          "short_name": "flashlight",
          "short_names": [
              "flashlight"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F526"
      },
      {
          "au": "E587",
          "docomo": "E718",
          "google": "FE4C9",
          "image": "1f527.png",
          "name": "WRENCH",
          "sheet_x": 17,
          "sheet_y": 20,
          "short_name": "wrench",
          "short_names": [
              "wrench"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F527"
      },
      {
          "au": "E5CB",
          "docomo": "",
          "google": "FE4CA",
          "image": "1f528.png",
          "name": "HAMMER",
          "sheet_x": 17,
          "sheet_y": 21,
          "short_name": "hammer",
          "short_names": [
              "hammer"
          ],
          "softbank": "E116",
          "text": null,
          "unified": "1F528"
      },
      {
          "au": "E581",
          "docomo": "",
          "google": "FE4CB",
          "image": "1f529.png",
          "name": "NUT AND BOLT",
          "sheet_x": 17,
          "sheet_y": 22,
          "short_name": "nut_and_bolt",
          "short_names": [
              "nut_and_bolt"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F529"
      },
      {
          "au": "E57F",
          "docomo": "",
          "google": "FE4FA",
          "image": "1f52a.png",
          "name": "HOCHO",
          "sheet_x": 17,
          "sheet_y": 23,
          "short_name": "hocho",
          "short_names": [
              "hocho"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F52A"
      },
      {
          "au": "E50A",
          "docomo": "",
          "google": "FE4F5",
          "image": "1f52b.png",
          "name": "PISTOL",
          "sheet_x": 17,
          "sheet_y": 24,
          "short_name": "gun",
          "short_names": [
              "gun"
          ],
          "softbank": "E113",
          "text": null,
          "unified": "1F52B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f52c.png",
          "name": "MICROSCOPE",
          "sheet_x": 17,
          "sheet_y": 25,
          "short_name": "microscope",
          "short_names": [
              "microscope"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F52C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f52d.png",
          "name": "TELESCOPE",
          "sheet_x": 17,
          "sheet_y": 26,
          "short_name": "telescope",
          "short_names": [
              "telescope"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F52D"
      },
      {
          "au": "EA8F",
          "docomo": "",
          "google": "FE4F7",
          "image": "1f52e.png",
          "name": "CRYSTAL BALL",
          "sheet_x": 17,
          "sheet_y": 27,
          "short_name": "crystal_ball",
          "short_names": [
              "crystal_ball"
          ],
          "softbank": "E23E",
          "text": null,
          "unified": "1F52E"
      },
      {
          "au": "EA8F",
          "docomo": "",
          "google": "FE4F8",
          "image": "1f52f.png",
          "name": "SIX POINTED STAR WITH MIDDLE DOT",
          "sheet_x": 17,
          "sheet_y": 28,
          "short_name": "six_pointed_star",
          "short_names": [
              "six_pointed_star"
          ],
          "softbank": "E23E",
          "text": null,
          "unified": "1F52F"
      },
      {
          "au": "E480",
          "docomo": "",
          "google": "FE044",
          "image": "1f530.png",
          "name": "JAPANESE SYMBOL FOR BEGINNER",
          "sheet_x": 17,
          "sheet_y": 29,
          "short_name": "beginner",
          "short_names": [
              "beginner"
          ],
          "softbank": "E209",
          "text": null,
          "unified": "1F530"
      },
      {
          "au": "E5C9",
          "docomo": "E71A",
          "google": "FE4D2",
          "image": "1f531.png",
          "name": "TRIDENT EMBLEM",
          "sheet_x": 18,
          "sheet_y": 0,
          "short_name": "trident",
          "short_names": [
              "trident"
          ],
          "softbank": "E031",
          "text": null,
          "unified": "1F531"
      },
      {
          "au": "E54B",
          "docomo": "E69C",
          "google": "FEB64",
          "image": "1f532.png",
          "name": "BLACK SQUARE BUTTON",
          "sheet_x": 18,
          "sheet_y": 1,
          "short_name": "black_square_button",
          "short_names": [
              "black_square_button"
          ],
          "softbank": "E21A",
          "text": null,
          "unified": "1F532"
      },
      {
          "au": "E54B",
          "docomo": "E69C",
          "google": "FEB67",
          "image": "1f533.png",
          "name": "WHITE SQUARE BUTTON",
          "sheet_x": 18,
          "sheet_y": 2,
          "short_name": "white_square_button",
          "short_names": [
              "white_square_button"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "1F533"
      },
      {
          "au": "E54A",
          "docomo": "E69C",
          "google": "FEB63",
          "image": "1f534.png",
          "name": "LARGE RED CIRCLE",
          "sheet_x": 18,
          "sheet_y": 3,
          "short_name": "red_circle",
          "short_names": [
              "red_circle"
          ],
          "softbank": "E219",
          "text": null,
          "unified": "1F534"
      },
      {
          "au": "E54B",
          "docomo": "E69C",
          "google": "FEB64",
          "image": "1f535.png",
          "name": "LARGE BLUE CIRCLE",
          "sheet_x": 18,
          "sheet_y": 4,
          "short_name": "large_blue_circle",
          "short_names": [
              "large_blue_circle"
          ],
          "softbank": "E21A",
          "text": null,
          "unified": "1F535"
      },
      {
          "au": "E546",
          "docomo": "",
          "google": "FEB73",
          "image": "1f536.png",
          "name": "LARGE ORANGE DIAMOND",
          "sheet_x": 18,
          "sheet_y": 5,
          "short_name": "large_orange_diamond",
          "short_names": [
              "large_orange_diamond"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "1F536"
      },
      {
          "au": "E547",
          "docomo": "",
          "google": "FEB74",
          "image": "1f537.png",
          "name": "LARGE BLUE DIAMOND",
          "sheet_x": 18,
          "sheet_y": 6,
          "short_name": "large_blue_diamond",
          "short_names": [
              "large_blue_diamond"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "1F537"
      },
      {
          "au": "E536",
          "docomo": "",
          "google": "FEB75",
          "image": "1f538.png",
          "name": "SMALL ORANGE DIAMOND",
          "sheet_x": 18,
          "sheet_y": 7,
          "short_name": "small_orange_diamond",
          "short_names": [
              "small_orange_diamond"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "1F538"
      },
      {
          "au": "E537",
          "docomo": "",
          "google": "FEB76",
          "image": "1f539.png",
          "name": "SMALL BLUE DIAMOND",
          "sheet_x": 18,
          "sheet_y": 8,
          "short_name": "small_blue_diamond",
          "short_names": [
              "small_blue_diamond"
          ],
          "softbank": "E21B",
          "text": null,
          "unified": "1F539"
      },
      {
          "au": "E55A",
          "docomo": "",
          "google": "FEB78",
          "image": "1f53a.png",
          "name": "UP-POINTING RED TRIANGLE",
          "sheet_x": 18,
          "sheet_y": 9,
          "short_name": "small_red_triangle",
          "short_names": [
              "small_red_triangle"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F53A"
      },
      {
          "au": "E55B",
          "docomo": "",
          "google": "FEB79",
          "image": "1f53b.png",
          "name": "DOWN-POINTING RED TRIANGLE",
          "sheet_x": 18,
          "sheet_y": 10,
          "short_name": "small_red_triangle_down",
          "short_names": [
              "small_red_triangle_down"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F53B"
      },
      {
          "au": "E543",
          "docomo": "",
          "google": "FEB01",
          "image": "1f53c.png",
          "name": "UP-POINTING SMALL RED TRIANGLE",
          "sheet_x": 18,
          "sheet_y": 11,
          "short_name": "arrow_up_small",
          "short_names": [
              "arrow_up_small"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F53C"
      },
      {
          "au": "E542",
          "docomo": "",
          "google": "FEB00",
          "image": "1f53d.png",
          "name": "DOWN-POINTING SMALL RED TRIANGLE",
          "sheet_x": 18,
          "sheet_y": 12,
          "short_name": "arrow_down_small",
          "short_names": [
              "arrow_down_small"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F53D"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE01E",
          "image": "1f550.png",
          "name": "CLOCK FACE ONE OCLOCK",
          "sheet_x": 18,
          "sheet_y": 13,
          "short_name": "clock1",
          "short_names": [
              "clock1"
          ],
          "softbank": "E024",
          "text": null,
          "unified": "1F550"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE01F",
          "image": "1f551.png",
          "name": "CLOCK FACE TWO OCLOCK",
          "sheet_x": 18,
          "sheet_y": 14,
          "short_name": "clock2",
          "short_names": [
              "clock2"
          ],
          "softbank": "E025",
          "text": null,
          "unified": "1F551"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE020",
          "image": "1f552.png",
          "name": "CLOCK FACE THREE OCLOCK",
          "sheet_x": 18,
          "sheet_y": 15,
          "short_name": "clock3",
          "short_names": [
              "clock3"
          ],
          "softbank": "E026",
          "text": null,
          "unified": "1F552"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE021",
          "image": "1f553.png",
          "name": "CLOCK FACE FOUR OCLOCK",
          "sheet_x": 18,
          "sheet_y": 16,
          "short_name": "clock4",
          "short_names": [
              "clock4"
          ],
          "softbank": "E027",
          "text": null,
          "unified": "1F553"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE022",
          "image": "1f554.png",
          "name": "CLOCK FACE FIVE OCLOCK",
          "sheet_x": 18,
          "sheet_y": 17,
          "short_name": "clock5",
          "short_names": [
              "clock5"
          ],
          "softbank": "E028",
          "text": null,
          "unified": "1F554"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE023",
          "image": "1f555.png",
          "name": "CLOCK FACE SIX OCLOCK",
          "sheet_x": 18,
          "sheet_y": 18,
          "short_name": "clock6",
          "short_names": [
              "clock6"
          ],
          "softbank": "E029",
          "text": null,
          "unified": "1F555"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE024",
          "image": "1f556.png",
          "name": "CLOCK FACE SEVEN OCLOCK",
          "sheet_x": 18,
          "sheet_y": 19,
          "short_name": "clock7",
          "short_names": [
              "clock7"
          ],
          "softbank": "E02A",
          "text": null,
          "unified": "1F556"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE025",
          "image": "1f557.png",
          "name": "CLOCK FACE EIGHT OCLOCK",
          "sheet_x": 18,
          "sheet_y": 20,
          "short_name": "clock8",
          "short_names": [
              "clock8"
          ],
          "softbank": "E02B",
          "text": null,
          "unified": "1F557"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE026",
          "image": "1f558.png",
          "name": "CLOCK FACE NINE OCLOCK",
          "sheet_x": 18,
          "sheet_y": 21,
          "short_name": "clock9",
          "short_names": [
              "clock9"
          ],
          "softbank": "E02C",
          "text": null,
          "unified": "1F558"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE027",
          "image": "1f559.png",
          "name": "CLOCK FACE TEN OCLOCK",
          "sheet_x": 18,
          "sheet_y": 22,
          "short_name": "clock10",
          "short_names": [
              "clock10"
          ],
          "softbank": "E02D",
          "text": null,
          "unified": "1F559"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE028",
          "image": "1f55a.png",
          "name": "CLOCK FACE ELEVEN OCLOCK",
          "sheet_x": 18,
          "sheet_y": 23,
          "short_name": "clock11",
          "short_names": [
              "clock11"
          ],
          "softbank": "E02E",
          "text": null,
          "unified": "1F55A"
      },
      {
          "au": "E594",
          "docomo": "E6BA",
          "google": "FE029",
          "image": "1f55b.png",
          "name": "CLOCK FACE TWELVE OCLOCK",
          "sheet_x": 18,
          "sheet_y": 24,
          "short_name": "clock12",
          "short_names": [
              "clock12"
          ],
          "softbank": "E02F",
          "text": null,
          "unified": "1F55B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f55c.png",
          "name": "CLOCK FACE ONE-THIRTY",
          "sheet_x": 18,
          "sheet_y": 25,
          "short_name": "clock130",
          "short_names": [
              "clock130"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F55C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f55d.png",
          "name": "CLOCK FACE TWO-THIRTY",
          "sheet_x": 18,
          "sheet_y": 26,
          "short_name": "clock230",
          "short_names": [
              "clock230"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F55D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f55e.png",
          "name": "CLOCK FACE THREE-THIRTY",
          "sheet_x": 18,
          "sheet_y": 27,
          "short_name": "clock330",
          "short_names": [
              "clock330"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F55E"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f55f.png",
          "name": "CLOCK FACE FOUR-THIRTY",
          "sheet_x": 18,
          "sheet_y": 28,
          "short_name": "clock430",
          "short_names": [
              "clock430"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F55F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f560.png",
          "name": "CLOCK FACE FIVE-THIRTY",
          "sheet_x": 18,
          "sheet_y": 29,
          "short_name": "clock530",
          "short_names": [
              "clock530"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F560"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f561.png",
          "name": "CLOCK FACE SIX-THIRTY",
          "sheet_x": 19,
          "sheet_y": 0,
          "short_name": "clock630",
          "short_names": [
              "clock630"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F561"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f562.png",
          "name": "CLOCK FACE SEVEN-THIRTY",
          "sheet_x": 19,
          "sheet_y": 1,
          "short_name": "clock730",
          "short_names": [
              "clock730"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F562"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f563.png",
          "name": "CLOCK FACE EIGHT-THIRTY",
          "sheet_x": 19,
          "sheet_y": 2,
          "short_name": "clock830",
          "short_names": [
              "clock830"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F563"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f564.png",
          "name": "CLOCK FACE NINE-THIRTY",
          "sheet_x": 19,
          "sheet_y": 3,
          "short_name": "clock930",
          "short_names": [
              "clock930"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F564"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f565.png",
          "name": "CLOCK FACE TEN-THIRTY",
          "sheet_x": 19,
          "sheet_y": 4,
          "short_name": "clock1030",
          "short_names": [
              "clock1030"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F565"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f566.png",
          "name": "CLOCK FACE ELEVEN-THIRTY",
          "sheet_x": 19,
          "sheet_y": 5,
          "short_name": "clock1130",
          "short_names": [
              "clock1130"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F566"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f567.png",
          "name": "CLOCK FACE TWELVE-THIRTY",
          "sheet_x": 19,
          "sheet_y": 6,
          "short_name": "clock1230",
          "short_names": [
              "clock1230"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F567"
      },
      {
          "au": "E5BD",
          "docomo": "E740",
          "google": "FE4C3",
          "image": "1f5fb.png",
          "name": "MOUNT FUJI",
          "sheet_x": 19,
          "sheet_y": 7,
          "short_name": "mount_fuji",
          "short_names": [
              "mount_fuji"
          ],
          "softbank": "E03B",
          "text": null,
          "unified": "1F5FB"
      },
      {
          "au": "E4C0",
          "docomo": "",
          "google": "FE4C4",
          "image": "1f5fc.png",
          "name": "TOKYO TOWER",
          "sheet_x": 19,
          "sheet_y": 8,
          "short_name": "tokyo_tower",
          "short_names": [
              "tokyo_tower"
          ],
          "softbank": "E509",
          "text": null,
          "unified": "1F5FC"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FE4C6",
          "image": "1f5fd.png",
          "name": "STATUE OF LIBERTY",
          "sheet_x": 19,
          "sheet_y": 9,
          "short_name": "statue_of_liberty",
          "short_names": [
              "statue_of_liberty"
          ],
          "softbank": "E51D",
          "text": null,
          "unified": "1F5FD"
      },
      {
          "au": "E572",
          "docomo": "",
          "google": "FE4C7",
          "image": "1f5fe.png",
          "name": "SILHOUETTE OF JAPAN",
          "sheet_x": 19,
          "sheet_y": 10,
          "short_name": "japan",
          "short_names": [
              "japan"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F5FE"
      },
      {
          "au": "EB6C",
          "docomo": "",
          "google": "FE4C8",
          "image": "1f5ff.png",
          "name": "MOYAI",
          "sheet_x": 19,
          "sheet_y": 11,
          "short_name": "moyai",
          "short_names": [
              "moyai"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F5FF"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f600.png",
          "name": "GRINNING FACE",
          "sheet_x": 19,
          "sheet_y": 12,
          "short_name": "grinning",
          "short_names": [
              "grinning"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F600"
      },
      {
          "au": "EB80",
          "docomo": "E753",
          "google": "FE333",
          "image": "1f601.png",
          "name": "GRINNING FACE WITH SMILING EYES",
          "sheet_x": 19,
          "sheet_y": 13,
          "short_name": "grin",
          "short_names": [
              "grin"
          ],
          "softbank": "E404",
          "text": null,
          "unified": "1F601"
      },
      {
          "au": "EB64",
          "docomo": "E72A",
          "google": "FE334",
          "image": "1f602.png",
          "name": "FACE WITH TEARS OF JOY",
          "sheet_x": 19,
          "sheet_y": 14,
          "short_name": "joy",
          "short_names": [
              "joy"
          ],
          "softbank": "E412",
          "text": null,
          "unified": "1F602"
      },
      {
          "au": "E471",
          "docomo": "E6F0",
          "google": "FE330",
          "image": "1f603.png",
          "name": "SMILING FACE WITH OPEN MOUTH",
          "sheet_x": 19,
          "sheet_y": 15,
          "short_name": "smiley",
          "short_names": [
              "smiley"
          ],
          "softbank": "E057",
          "text": ":)",
          "unified": "1F603"
      },
      {
          "au": "E471",
          "docomo": "E6F0",
          "google": "FE338",
          "image": "1f604.png",
          "name": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
          "sheet_x": 19,
          "sheet_y": 16,
          "short_name": "smile",
          "short_names": [
              "smile"
          ],
          "softbank": "E415",
          "text": ":)",
          "unified": "1F604"
      },
      {
          "au": "E471-E5B1",
          "docomo": "E722",
          "google": "FE331",
          "image": "1f605.png",
          "name": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
          "sheet_x": 19,
          "sheet_y": 17,
          "short_name": "sweat_smile",
          "short_names": [
              "sweat_smile"
          ],
          "softbank": "E415-E331",
          "text": null,
          "unified": "1F605"
      },
      {
          "au": "EAC5",
          "docomo": "E72A",
          "google": "FE332",
          "image": "1f606.png",
          "name": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
          "sheet_x": 19,
          "sheet_y": 18,
          "short_name": "laughing",
          "short_names": [
              "laughing",
              "satisfied"
          ],
          "softbank": "E40A",
          "text": null,
          "unified": "1F606"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f607.png",
          "name": "SMILING FACE WITH HALO",
          "sheet_x": 19,
          "sheet_y": 19,
          "short_name": "innocent",
          "short_names": [
              "innocent"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F607"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f608.png",
          "name": "SMILING FACE WITH HORNS",
          "sheet_x": 19,
          "sheet_y": 20,
          "short_name": "smiling_imp",
          "short_names": [
              "smiling_imp"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F608"
      },
      {
          "au": "E5C3",
          "docomo": "E729",
          "google": "FE347",
          "image": "1f609.png",
          "name": "WINKING FACE",
          "sheet_x": 19,
          "sheet_y": 21,
          "short_name": "wink",
          "short_names": [
              "wink"
          ],
          "softbank": "E405",
          "text": ";)",
          "unified": "1F609"
      },
      {
          "au": "EACD",
          "docomo": "E6F0",
          "google": "FE335",
          "image": "1f60a.png",
          "name": "SMILING FACE WITH SMILING EYES",
          "sheet_x": 19,
          "sheet_y": 22,
          "short_name": "blush",
          "short_names": [
              "blush"
          ],
          "softbank": "E056",
          "text": null,
          "unified": "1F60A"
      },
      {
          "au": "EACD",
          "docomo": "E752",
          "google": "FE32B",
          "image": "1f60b.png",
          "name": "FACE SAVOURING DELICIOUS FOOD",
          "sheet_x": 19,
          "sheet_y": 23,
          "short_name": "yum",
          "short_names": [
              "yum"
          ],
          "softbank": "E056",
          "text": null,
          "unified": "1F60B"
      },
      {
          "au": "EAC5",
          "docomo": "E721",
          "google": "FE33E",
          "image": "1f60c.png",
          "name": "RELIEVED FACE",
          "sheet_x": 19,
          "sheet_y": 24,
          "short_name": "relieved",
          "short_names": [
              "relieved"
          ],
          "softbank": "E40A",
          "text": null,
          "unified": "1F60C"
      },
      {
          "au": "E5C4",
          "docomo": "E726",
          "google": "FE327",
          "image": "1f60d.png",
          "name": "SMILING FACE WITH HEART-SHAPED EYES",
          "sheet_x": 19,
          "sheet_y": 25,
          "short_name": "heart_eyes",
          "short_names": [
              "heart_eyes"
          ],
          "softbank": "E106",
          "text": null,
          "unified": "1F60D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f60e.png",
          "name": "SMILING FACE WITH SUNGLASSES",
          "sheet_x": 19,
          "sheet_y": 26,
          "short_name": "sunglasses",
          "short_names": [
              "sunglasses"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F60E"
      },
      {
          "au": "EABF",
          "docomo": "E72C",
          "google": "FE343",
          "image": "1f60f.png",
          "name": "SMIRKING FACE",
          "sheet_x": 19,
          "sheet_y": 27,
          "short_name": "smirk",
          "short_names": [
              "smirk"
          ],
          "softbank": "E402",
          "text": null,
          "unified": "1F60F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f610.png",
          "name": "NEUTRAL FACE",
          "sheet_x": 19,
          "sheet_y": 28,
          "short_name": "neutral_face",
          "short_names": [
              "neutral_face"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F610"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f611.png",
          "name": "EXPRESSIONLESS FACE",
          "sheet_x": 19,
          "sheet_y": 29,
          "short_name": "expressionless",
          "short_names": [
              "expressionless"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F611"
      },
      {
          "au": "EAC9",
          "docomo": "E725",
          "google": "FE326",
          "image": "1f612.png",
          "name": "UNAMUSED FACE",
          "sheet_x": 20,
          "sheet_y": 0,
          "short_name": "unamused",
          "short_names": [
              "unamused"
          ],
          "softbank": "E40E",
          "text": null,
          "unified": "1F612"
      },
      {
          "au": "E5C6",
          "docomo": "E723",
          "google": "FE344",
          "image": "1f613.png",
          "name": "FACE WITH COLD SWEAT",
          "sheet_x": 20,
          "sheet_y": 1,
          "short_name": "sweat",
          "short_names": [
              "sweat"
          ],
          "softbank": "E108",
          "text": null,
          "unified": "1F613"
      },
      {
          "au": "EAC0",
          "docomo": "E720",
          "google": "FE340",
          "image": "1f614.png",
          "name": "PENSIVE FACE",
          "sheet_x": 20,
          "sheet_y": 2,
          "short_name": "pensive",
          "short_names": [
              "pensive"
          ],
          "softbank": "E403",
          "text": null,
          "unified": "1F614"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f615.png",
          "name": "CONFUSED FACE",
          "sheet_x": 20,
          "sheet_y": 3,
          "short_name": "confused",
          "short_names": [
              "confused"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F615"
      },
      {
          "au": "EAC3",
          "docomo": "E6F3",
          "google": "FE33F",
          "image": "1f616.png",
          "name": "CONFOUNDED FACE",
          "sheet_x": 20,
          "sheet_y": 4,
          "short_name": "confounded",
          "short_names": [
              "confounded"
          ],
          "softbank": "E407",
          "text": null,
          "unified": "1F616"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f617.png",
          "name": "KISSING FACE",
          "sheet_x": 20,
          "sheet_y": 5,
          "short_name": "kissing",
          "short_names": [
              "kissing"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F617"
      },
      {
          "au": "EACF",
          "docomo": "E726",
          "google": "FE32C",
          "image": "1f618.png",
          "name": "FACE THROWING A KISS",
          "sheet_x": 20,
          "sheet_y": 6,
          "short_name": "kissing_heart",
          "short_names": [
              "kissing_heart"
          ],
          "softbank": "E418",
          "text": null,
          "unified": "1F618"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f619.png",
          "name": "KISSING FACE WITH SMILING EYES",
          "sheet_x": 20,
          "sheet_y": 7,
          "short_name": "kissing_smiling_eyes",
          "short_names": [
              "kissing_smiling_eyes"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F619"
      },
      {
          "au": "EACE",
          "docomo": "E726",
          "google": "FE32D",
          "image": "1f61a.png",
          "name": "KISSING FACE WITH CLOSED EYES",
          "sheet_x": 20,
          "sheet_y": 8,
          "short_name": "kissing_closed_eyes",
          "short_names": [
              "kissing_closed_eyes"
          ],
          "softbank": "E417",
          "text": null,
          "unified": "1F61A"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f61b.png",
          "name": "FACE WITH STUCK-OUT TONGUE",
          "sheet_x": 20,
          "sheet_y": 9,
          "short_name": "stuck_out_tongue",
          "short_names": [
              "stuck_out_tongue"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F61B"
      },
      {
          "au": "E4E7",
          "docomo": "E728",
          "google": "FE329",
          "image": "1f61c.png",
          "name": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
          "sheet_x": 20,
          "sheet_y": 10,
          "short_name": "stuck_out_tongue_winking_eye",
          "short_names": [
              "stuck_out_tongue_winking_eye"
          ],
          "softbank": "E105",
          "text": ";p",
          "unified": "1F61C"
      },
      {
          "au": "E4E7",
          "docomo": "E728",
          "google": "FE32A",
          "image": "1f61d.png",
          "name": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
          "sheet_x": 20,
          "sheet_y": 11,
          "short_name": "stuck_out_tongue_closed_eyes",
          "short_names": [
              "stuck_out_tongue_closed_eyes"
          ],
          "softbank": "E409",
          "text": null,
          "unified": "1F61D"
      },
      {
          "au": "EAC0",
          "docomo": "E6F2",
          "google": "FE323",
          "image": "1f61e.png",
          "name": "DISAPPOINTED FACE",
          "sheet_x": 20,
          "sheet_y": 12,
          "short_name": "disappointed",
          "short_names": [
              "disappointed"
          ],
          "softbank": "E058",
          "text": ":(",
          "unified": "1F61E"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f61f.png",
          "name": "WORRIED FACE",
          "sheet_x": 20,
          "sheet_y": 13,
          "short_name": "worried",
          "short_names": [
              "worried"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F61F"
      },
      {
          "au": "E472",
          "docomo": "E6F1",
          "google": "FE320",
          "image": "1f620.png",
          "name": "ANGRY FACE",
          "sheet_x": 20,
          "sheet_y": 14,
          "short_name": "angry",
          "short_names": [
              "angry"
          ],
          "softbank": "E059",
          "text": null,
          "unified": "1F620"
      },
      {
          "au": "EB5D",
          "docomo": "E724",
          "google": "FE33D",
          "image": "1f621.png",
          "name": "POUTING FACE",
          "sheet_x": 20,
          "sheet_y": 15,
          "short_name": "rage",
          "short_names": [
              "rage"
          ],
          "softbank": "E416",
          "text": null,
          "unified": "1F621"
      },
      {
          "au": "EB69",
          "docomo": "E72E",
          "google": "FE339",
          "image": "1f622.png",
          "name": "CRYING FACE",
          "sheet_x": 20,
          "sheet_y": 16,
          "short_name": "cry",
          "short_names": [
              "cry"
          ],
          "softbank": "E413",
          "text": ":'(",
          "unified": "1F622"
      },
      {
          "au": "EAC2",
          "docomo": "E72B",
          "google": "FE33C",
          "image": "1f623.png",
          "name": "PERSEVERING FACE",
          "sheet_x": 20,
          "sheet_y": 17,
          "short_name": "persevere",
          "short_names": [
              "persevere"
          ],
          "softbank": "E406",
          "text": null,
          "unified": "1F623"
      },
      {
          "au": "EAC1",
          "docomo": "E753",
          "google": "FE328",
          "image": "1f624.png",
          "name": "FACE WITH LOOK OF TRIUMPH",
          "sheet_x": 20,
          "sheet_y": 18,
          "short_name": "triumph",
          "short_names": [
              "triumph"
          ],
          "softbank": "E404",
          "text": null,
          "unified": "1F624"
      },
      {
          "au": "E5C6",
          "docomo": "E723",
          "google": "FE345",
          "image": "1f625.png",
          "name": "DISAPPOINTED BUT RELIEVED FACE",
          "sheet_x": 20,
          "sheet_y": 19,
          "short_name": "disappointed_relieved",
          "short_names": [
              "disappointed_relieved"
          ],
          "softbank": "E401",
          "text": null,
          "unified": "1F625"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f626.png",
          "name": "FROWNING FACE WITH OPEN MOUTH",
          "sheet_x": 20,
          "sheet_y": 20,
          "short_name": "frowning",
          "short_names": [
              "frowning"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F626"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f627.png",
          "name": "ANGUISHED FACE",
          "sheet_x": 20,
          "sheet_y": 21,
          "short_name": "anguished",
          "short_names": [
              "anguished"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F627"
      },
      {
          "au": "EAC6",
          "docomo": "E757",
          "google": "FE33B",
          "image": "1f628.png",
          "name": "FEARFUL FACE",
          "sheet_x": 20,
          "sheet_y": 22,
          "short_name": "fearful",
          "short_names": [
              "fearful"
          ],
          "softbank": "E40B",
          "text": null,
          "unified": "1F628"
      },
      {
          "au": "EB67",
          "docomo": "E6F3",
          "google": "FE321",
          "image": "1f629.png",
          "name": "WEARY FACE",
          "sheet_x": 20,
          "sheet_y": 23,
          "short_name": "weary",
          "short_names": [
              "weary"
          ],
          "softbank": "E403",
          "text": null,
          "unified": "1F629"
      },
      {
          "au": "EAC4",
          "docomo": "E701",
          "google": "FE342",
          "image": "1f62a.png",
          "name": "SLEEPY FACE",
          "sheet_x": 20,
          "sheet_y": 24,
          "short_name": "sleepy",
          "short_names": [
              "sleepy"
          ],
          "softbank": "E408",
          "text": null,
          "unified": "1F62A"
      },
      {
          "au": "E474",
          "docomo": "E72B",
          "google": "FE346",
          "image": "1f62b.png",
          "name": "TIRED FACE",
          "sheet_x": 20,
          "sheet_y": 25,
          "short_name": "tired_face",
          "short_names": [
              "tired_face"
          ],
          "softbank": "E406",
          "text": null,
          "unified": "1F62B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f62c.png",
          "name": "GRIMACING FACE",
          "sheet_x": 20,
          "sheet_y": 26,
          "short_name": "grimacing",
          "short_names": [
              "grimacing"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F62C"
      },
      {
          "au": "E473",
          "docomo": "E72D",
          "google": "FE33A",
          "image": "1f62d.png",
          "name": "LOUDLY CRYING FACE",
          "sheet_x": 20,
          "sheet_y": 27,
          "short_name": "sob",
          "short_names": [
              "sob"
          ],
          "softbank": "E411",
          "text": ":'(",
          "unified": "1F62D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f62e.png",
          "name": "FACE WITH OPEN MOUTH",
          "sheet_x": 20,
          "sheet_y": 28,
          "short_name": "open_mouth",
          "short_names": [
              "open_mouth"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F62E"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f62f.png",
          "name": "HUSHED FACE",
          "sheet_x": 20,
          "sheet_y": 29,
          "short_name": "hushed",
          "short_names": [
              "hushed"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F62F"
      },
      {
          "au": "EACB",
          "docomo": "E723",
          "google": "FE325",
          "image": "1f630.png",
          "name": "FACE WITH OPEN MOUTH AND COLD SWEAT",
          "sheet_x": 21,
          "sheet_y": 0,
          "short_name": "cold_sweat",
          "short_names": [
              "cold_sweat"
          ],
          "softbank": "E40F",
          "text": null,
          "unified": "1F630"
      },
      {
          "au": "E5C5",
          "docomo": "E757",
          "google": "FE341",
          "image": "1f631.png",
          "name": "FACE SCREAMING IN FEAR",
          "sheet_x": 21,
          "sheet_y": 1,
          "short_name": "scream",
          "short_names": [
              "scream"
          ],
          "softbank": "E107",
          "text": null,
          "unified": "1F631"
      },
      {
          "au": "EACA",
          "docomo": "E6F4",
          "google": "FE322",
          "image": "1f632.png",
          "name": "ASTONISHED FACE",
          "sheet_x": 21,
          "sheet_y": 2,
          "short_name": "astonished",
          "short_names": [
              "astonished"
          ],
          "softbank": "E410",
          "text": null,
          "unified": "1F632"
      },
      {
          "au": "EAC8",
          "docomo": "E72A",
          "google": "FE32F",
          "image": "1f633.png",
          "name": "FLUSHED FACE",
          "sheet_x": 21,
          "sheet_y": 3,
          "short_name": "flushed",
          "short_names": [
              "flushed"
          ],
          "softbank": "E40D",
          "text": null,
          "unified": "1F633"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f634.png",
          "name": "SLEEPING FACE",
          "sheet_x": 21,
          "sheet_y": 4,
          "short_name": "sleeping",
          "short_names": [
              "sleeping"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F634"
      },
      {
          "au": "E5AE",
          "docomo": "E6F4",
          "google": "FE324",
          "image": "1f635.png",
          "name": "DIZZY FACE",
          "sheet_x": 21,
          "sheet_y": 5,
          "short_name": "dizzy_face",
          "short_names": [
              "dizzy_face"
          ],
          "softbank": "E406",
          "text": null,
          "unified": "1F635"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f636.png",
          "name": "FACE WITHOUT MOUTH",
          "sheet_x": 21,
          "sheet_y": 6,
          "short_name": "no_mouth",
          "short_names": [
              "no_mouth"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F636"
      },
      {
          "au": "EAC7",
          "docomo": "",
          "google": "FE32E",
          "image": "1f637.png",
          "name": "FACE WITH MEDICAL MASK",
          "sheet_x": 21,
          "sheet_y": 7,
          "short_name": "mask",
          "short_names": [
              "mask"
          ],
          "softbank": "E40C",
          "text": null,
          "unified": "1F637"
      },
      {
          "au": "EB7F",
          "docomo": "E753",
          "google": "FE349",
          "image": "1f638.png",
          "name": "GRINNING CAT FACE WITH SMILING EYES",
          "sheet_x": 21,
          "sheet_y": 8,
          "short_name": "smile_cat",
          "short_names": [
              "smile_cat"
          ],
          "softbank": "E404",
          "text": null,
          "unified": "1F638"
      },
      {
          "au": "EB63",
          "docomo": "E72A",
          "google": "FE34A",
          "image": "1f639.png",
          "name": "CAT FACE WITH TEARS OF JOY",
          "sheet_x": 21,
          "sheet_y": 9,
          "short_name": "joy_cat",
          "short_names": [
              "joy_cat"
          ],
          "softbank": "E412",
          "text": null,
          "unified": "1F639"
      },
      {
          "au": "EB61",
          "docomo": "E6F0",
          "google": "FE348",
          "image": "1f63a.png",
          "name": "SMILING CAT FACE WITH OPEN MOUTH",
          "sheet_x": 21,
          "sheet_y": 10,
          "short_name": "smiley_cat",
          "short_names": [
              "smiley_cat"
          ],
          "softbank": "E057",
          "text": null,
          "unified": "1F63A"
      },
      {
          "au": "EB65",
          "docomo": "E726",
          "google": "FE34C",
          "image": "1f63b.png",
          "name": "SMILING CAT FACE WITH HEART-SHAPED EYES",
          "sheet_x": 21,
          "sheet_y": 11,
          "short_name": "heart_eyes_cat",
          "short_names": [
              "heart_eyes_cat"
          ],
          "softbank": "E106",
          "text": null,
          "unified": "1F63B"
      },
      {
          "au": "EB6A",
          "docomo": "E753",
          "google": "FE34F",
          "image": "1f63c.png",
          "name": "CAT FACE WITH WRY SMILE",
          "sheet_x": 21,
          "sheet_y": 12,
          "short_name": "smirk_cat",
          "short_names": [
              "smirk_cat"
          ],
          "softbank": "E404",
          "text": null,
          "unified": "1F63C"
      },
      {
          "au": "EB60",
          "docomo": "E726",
          "google": "FE34B",
          "image": "1f63d.png",
          "name": "KISSING CAT FACE WITH CLOSED EYES",
          "sheet_x": 21,
          "sheet_y": 13,
          "short_name": "kissing_cat",
          "short_names": [
              "kissing_cat"
          ],
          "softbank": "E418",
          "text": null,
          "unified": "1F63D"
      },
      {
          "au": "EB5E",
          "docomo": "E724",
          "google": "FE34E",
          "image": "1f63e.png",
          "name": "POUTING CAT FACE",
          "sheet_x": 21,
          "sheet_y": 14,
          "short_name": "pouting_cat",
          "short_names": [
              "pouting_cat"
          ],
          "softbank": "E416",
          "text": null,
          "unified": "1F63E"
      },
      {
          "au": "EB68",
          "docomo": "E72E",
          "google": "FE34D",
          "image": "1f63f.png",
          "name": "CRYING CAT FACE",
          "sheet_x": 21,
          "sheet_y": 15,
          "short_name": "crying_cat_face",
          "short_names": [
              "crying_cat_face"
          ],
          "softbank": "E413",
          "text": null,
          "unified": "1F63F"
      },
      {
          "au": "EB66",
          "docomo": "E6F3",
          "google": "FE350",
          "image": "1f640.png",
          "name": "WEARY CAT FACE",
          "sheet_x": 21,
          "sheet_y": 16,
          "short_name": "scream_cat",
          "short_names": [
              "scream_cat"
          ],
          "softbank": "E403",
          "text": null,
          "unified": "1F640"
      },
      {
          "au": "EAD7",
          "docomo": "E72F",
          "google": "FE351",
          "image": "1f645.png",
          "name": "FACE WITH NO GOOD GESTURE",
          "sheet_x": 21,
          "sheet_y": 17,
          "short_name": "no_good",
          "short_names": [
              "no_good"
          ],
          "softbank": "E423",
          "text": null,
          "unified": "1F645"
      },
      {
          "au": "EAD8",
          "docomo": "E70B",
          "google": "FE352",
          "image": "1f646.png",
          "name": "FACE WITH OK GESTURE",
          "sheet_x": 21,
          "sheet_y": 18,
          "short_name": "ok_woman",
          "short_names": [
              "ok_woman"
          ],
          "softbank": "E424",
          "text": null,
          "unified": "1F646"
      },
      {
          "au": "EAD9",
          "docomo": "",
          "google": "FE353",
          "image": "1f647.png",
          "name": "PERSON BOWING DEEPLY",
          "sheet_x": 21,
          "sheet_y": 19,
          "short_name": "bow",
          "short_names": [
              "bow"
          ],
          "softbank": "E426",
          "text": null,
          "unified": "1F647"
      },
      {
          "au": "EB50",
          "docomo": "",
          "google": "FE354",
          "image": "1f648.png",
          "name": "SEE-NO-EVIL MONKEY",
          "sheet_x": 21,
          "sheet_y": 20,
          "short_name": "see_no_evil",
          "short_names": [
              "see_no_evil"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F648"
      },
      {
          "au": "EB52",
          "docomo": "",
          "google": "FE356",
          "image": "1f649.png",
          "name": "HEAR-NO-EVIL MONKEY",
          "sheet_x": 21,
          "sheet_y": 21,
          "short_name": "hear_no_evil",
          "short_names": [
              "hear_no_evil"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F649"
      },
      {
          "au": "EB51",
          "docomo": "",
          "google": "FE355",
          "image": "1f64a.png",
          "name": "SPEAK-NO-EVIL MONKEY",
          "sheet_x": 21,
          "sheet_y": 22,
          "short_name": "speak_no_evil",
          "short_names": [
              "speak_no_evil"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F64A"
      },
      {
          "au": "EB85",
          "docomo": "",
          "google": "FE357",
          "image": "1f64b.png",
          "name": "HAPPY PERSON RAISING ONE HAND",
          "sheet_x": 21,
          "sheet_y": 23,
          "short_name": "raising_hand",
          "short_names": [
              "raising_hand"
          ],
          "softbank": "E012",
          "text": null,
          "unified": "1F64B"
      },
      {
          "au": "EB86",
          "docomo": "",
          "google": "FE358",
          "image": "1f64c.png",
          "name": "PERSON RAISING BOTH HANDS IN CELEBRATION",
          "sheet_x": 21,
          "sheet_y": 24,
          "short_name": "raised_hands",
          "short_names": [
              "raised_hands"
          ],
          "softbank": "E427",
          "text": null,
          "unified": "1F64C"
      },
      {
          "au": "EB87",
          "docomo": "E6F3",
          "google": "FE359",
          "image": "1f64d.png",
          "name": "PERSON FROWNING",
          "sheet_x": 21,
          "sheet_y": 25,
          "short_name": "person_frowning",
          "short_names": [
              "person_frowning"
          ],
          "softbank": "E403",
          "text": null,
          "unified": "1F64D"
      },
      {
          "au": "EB88",
          "docomo": "E6F1",
          "google": "FE35A",
          "image": "1f64e.png",
          "name": "PERSON WITH POUTING FACE",
          "sheet_x": 21,
          "sheet_y": 26,
          "short_name": "person_with_pouting_face",
          "short_names": [
              "person_with_pouting_face"
          ],
          "softbank": "E416",
          "text": null,
          "unified": "1F64E"
      },
      {
          "au": "EAD2",
          "docomo": "",
          "google": "FE35B",
          "image": "1f64f.png",
          "name": "PERSON WITH FOLDED HANDS",
          "sheet_x": 21,
          "sheet_y": 27,
          "short_name": "pray",
          "short_names": [
              "pray"
          ],
          "softbank": "E41D",
          "text": null,
          "unified": "1F64F"
      },
      {
          "au": "E5C8",
          "docomo": "",
          "google": "FE7ED",
          "image": "1f680.png",
          "name": "ROCKET",
          "sheet_x": 21,
          "sheet_y": 28,
          "short_name": "rocket",
          "short_names": [
              "rocket"
          ],
          "softbank": "E10D",
          "text": null,
          "unified": "1F680"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f681.png",
          "name": "HELICOPTER",
          "sheet_x": 21,
          "sheet_y": 29,
          "short_name": "helicopter",
          "short_names": [
              "helicopter"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F681"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f682.png",
          "name": "STEAM LOCOMOTIVE",
          "sheet_x": 22,
          "sheet_y": 0,
          "short_name": "steam_locomotive",
          "short_names": [
              "steam_locomotive"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F682"
      },
      {
          "au": "E4B5",
          "docomo": "E65B",
          "google": "FE7DF",
          "image": "1f683.png",
          "name": "RAILWAY CAR",
          "sheet_x": 22,
          "sheet_y": 1,
          "short_name": "railway_car",
          "short_names": [
              "railway_car",
              "train"
          ],
          "softbank": "E01E",
          "text": null,
          "unified": "1F683"
      },
      {
          "au": "E4B0",
          "docomo": "E65D",
          "google": "FE7E2",
          "image": "1f684.png",
          "name": "HIGH-SPEED TRAIN",
          "sheet_x": 22,
          "sheet_y": 2,
          "short_name": "bullettrain_side",
          "short_names": [
              "bullettrain_side"
          ],
          "softbank": "E435",
          "text": null,
          "unified": "1F684"
      },
      {
          "au": "E4B0",
          "docomo": "E65D",
          "google": "FE7E3",
          "image": "1f685.png",
          "name": "HIGH-SPEED TRAIN WITH BULLET NOSE",
          "sheet_x": 22,
          "sheet_y": 3,
          "short_name": "bullettrain_front",
          "short_names": [
              "bullettrain_front"
          ],
          "softbank": "E01F",
          "text": null,
          "unified": "1F685"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f686.png",
          "name": "TRAIN",
          "sheet_x": 22,
          "sheet_y": 4,
          "short_name": "train2",
          "short_names": [
              "train2"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F686"
      },
      {
          "au": "E5BC",
          "docomo": "E65C",
          "google": "FE7E0",
          "image": "1f687.png",
          "name": "METRO",
          "sheet_x": 22,
          "sheet_y": 5,
          "short_name": "metro",
          "short_names": [
              "metro"
          ],
          "softbank": "E434",
          "text": null,
          "unified": "1F687"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f688.png",
          "name": "LIGHT RAIL",
          "sheet_x": 22,
          "sheet_y": 6,
          "short_name": "light_rail",
          "short_names": [
              "light_rail"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F688"
      },
      {
          "au": "EB6D",
          "docomo": "",
          "google": "FE7EC",
          "image": "1f689.png",
          "name": "STATION",
          "sheet_x": 22,
          "sheet_y": 7,
          "short_name": "station",
          "short_names": [
              "station"
          ],
          "softbank": "E039",
          "text": null,
          "unified": "1F689"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f68a.png",
          "name": "TRAM",
          "sheet_x": 22,
          "sheet_y": 8,
          "short_name": "tram",
          "short_names": [
              "tram"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F68A"
      },
      {
          "au": "E4AF",
          "docomo": "E660",
          "google": "FE7E6",
          "image": "1f68c.png",
          "name": "BUS",
          "sheet_x": 22,
          "sheet_y": 9,
          "short_name": "bus",
          "short_names": [
              "bus"
          ],
          "softbank": "E159",
          "text": null,
          "unified": "1F68C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f68d.png",
          "name": "ONCOMING BUS",
          "sheet_x": 22,
          "sheet_y": 10,
          "short_name": "oncoming_bus",
          "short_names": [
              "oncoming_bus"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F68D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f68e.png",
          "name": "TROLLEYBUS",
          "sheet_x": 22,
          "sheet_y": 11,
          "short_name": "trolleybus",
          "short_names": [
              "trolleybus"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F68E"
      },
      {
          "au": "E4A7",
          "docomo": "",
          "google": "FE7E7",
          "image": "1f68f.png",
          "name": "BUS STOP",
          "sheet_x": 22,
          "sheet_y": 12,
          "short_name": "busstop",
          "short_names": [
              "busstop"
          ],
          "softbank": "E150",
          "text": null,
          "unified": "1F68F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f690.png",
          "name": "MINIBUS",
          "sheet_x": 22,
          "sheet_y": 13,
          "short_name": "minibus",
          "short_names": [
              "minibus"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F690"
      },
      {
          "au": "EAE0",
          "docomo": "",
          "google": "FE7F3",
          "image": "1f691.png",
          "name": "AMBULANCE",
          "sheet_x": 22,
          "sheet_y": 14,
          "short_name": "ambulance",
          "short_names": [
              "ambulance"
          ],
          "softbank": "E431",
          "text": null,
          "unified": "1F691"
      },
      {
          "au": "EADF",
          "docomo": "",
          "google": "FE7F2",
          "image": "1f692.png",
          "name": "FIRE ENGINE",
          "sheet_x": 22,
          "sheet_y": 15,
          "short_name": "fire_engine",
          "short_names": [
              "fire_engine"
          ],
          "softbank": "E430",
          "text": null,
          "unified": "1F692"
      },
      {
          "au": "EAE1",
          "docomo": "",
          "google": "FE7F4",
          "image": "1f693.png",
          "name": "POLICE CAR",
          "sheet_x": 22,
          "sheet_y": 16,
          "short_name": "police_car",
          "short_names": [
              "police_car"
          ],
          "softbank": "E432",
          "text": null,
          "unified": "1F693"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f694.png",
          "name": "ONCOMING POLICE CAR",
          "sheet_x": 22,
          "sheet_y": 17,
          "short_name": "oncoming_police_car",
          "short_names": [
              "oncoming_police_car"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F694"
      },
      {
          "au": "E4B1",
          "docomo": "E65E",
          "google": "FE7EF",
          "image": "1f695.png",
          "name": "TAXI",
          "sheet_x": 22,
          "sheet_y": 18,
          "short_name": "taxi",
          "short_names": [
              "taxi"
          ],
          "softbank": "E15A",
          "text": null,
          "unified": "1F695"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f696.png",
          "name": "ONCOMING TAXI",
          "sheet_x": 22,
          "sheet_y": 19,
          "short_name": "oncoming_taxi",
          "short_names": [
              "oncoming_taxi"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F696"
      },
      {
          "au": "E4B1",
          "docomo": "E65E",
          "google": "FE7E4",
          "image": "1f697.png",
          "name": "AUTOMOBILE",
          "sheet_x": 22,
          "sheet_y": 20,
          "short_name": "car",
          "short_names": [
              "car",
              "red_car"
          ],
          "softbank": "E01B",
          "text": null,
          "unified": "1F697"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f698.png",
          "name": "ONCOMING AUTOMOBILE",
          "sheet_x": 22,
          "sheet_y": 21,
          "short_name": "oncoming_automobile",
          "short_names": [
              "oncoming_automobile"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F698"
      },
      {
          "au": "E4B1",
          "docomo": "E65F",
          "google": "FE7E5",
          "image": "1f699.png",
          "name": "RECREATIONAL VEHICLE",
          "sheet_x": 22,
          "sheet_y": 22,
          "short_name": "blue_car",
          "short_names": [
              "blue_car"
          ],
          "softbank": "E42E",
          "text": null,
          "unified": "1F699"
      },
      {
          "au": "E4B2",
          "docomo": "",
          "google": "FE7F1",
          "image": "1f69a.png",
          "name": "DELIVERY TRUCK",
          "sheet_x": 22,
          "sheet_y": 23,
          "short_name": "truck",
          "short_names": [
              "truck"
          ],
          "softbank": "E42F",
          "text": null,
          "unified": "1F69A"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f69b.png",
          "name": "ARTICULATED LORRY",
          "sheet_x": 22,
          "sheet_y": 24,
          "short_name": "articulated_lorry",
          "short_names": [
              "articulated_lorry"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F69B"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f69c.png",
          "name": "TRACTOR",
          "sheet_x": 22,
          "sheet_y": 25,
          "short_name": "tractor",
          "short_names": [
              "tractor"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F69C"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f69d.png",
          "name": "MONORAIL",
          "sheet_x": 22,
          "sheet_y": 26,
          "short_name": "monorail",
          "short_names": [
              "monorail"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F69D"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f69e.png",
          "name": "MOUNTAIN RAILWAY",
          "sheet_x": 22,
          "sheet_y": 27,
          "short_name": "mountain_railway",
          "short_names": [
              "mountain_railway"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F69E"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f69f.png",
          "name": "SUSPENSION RAILWAY",
          "sheet_x": 22,
          "sheet_y": 28,
          "short_name": "suspension_railway",
          "short_names": [
              "suspension_railway"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F69F"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6a0.png",
          "name": "MOUNTAIN CABLEWAY",
          "sheet_x": 22,
          "sheet_y": 29,
          "short_name": "mountain_cableway",
          "short_names": [
              "mountain_cableway"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6A0"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6a1.png",
          "name": "AERIAL TRAMWAY",
          "sheet_x": 23,
          "sheet_y": 0,
          "short_name": "aerial_tramway",
          "short_names": [
              "aerial_tramway"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6A1"
      },
      {
          "au": "EA82",
          "docomo": "E661",
          "google": "FE7E8",
          "image": "1f6a2.png",
          "name": "SHIP",
          "sheet_x": 23,
          "sheet_y": 1,
          "short_name": "ship",
          "short_names": [
              "ship"
          ],
          "softbank": "E202",
          "text": null,
          "unified": "1F6A2"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6a3.png",
          "name": "ROWBOAT",
          "sheet_x": 23,
          "sheet_y": 2,
          "short_name": "rowboat",
          "short_names": [
              "rowboat"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6A3"
      },
      {
          "au": "E4B4",
          "docomo": "E6A3",
          "google": "FE7EE",
          "image": "1f6a4.png",
          "name": "SPEEDBOAT",
          "sheet_x": 23,
          "sheet_y": 3,
          "short_name": "speedboat",
          "short_names": [
              "speedboat"
          ],
          "softbank": "E135",
          "text": null,
          "unified": "1F6A4"
      },
      {
          "au": "E46A",
          "docomo": "E66D",
          "google": "FE7F7",
          "image": "1f6a5.png",
          "name": "HORIZONTAL TRAFFIC LIGHT",
          "sheet_x": 23,
          "sheet_y": 4,
          "short_name": "traffic_light",
          "short_names": [
              "traffic_light"
          ],
          "softbank": "E14E",
          "text": null,
          "unified": "1F6A5"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6a6.png",
          "name": "VERTICAL TRAFFIC LIGHT",
          "sheet_x": 23,
          "sheet_y": 5,
          "short_name": "vertical_traffic_light",
          "short_names": [
              "vertical_traffic_light"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6A6"
      },
      {
          "au": "E5D7",
          "docomo": "",
          "google": "FE7F8",
          "image": "1f6a7.png",
          "name": "CONSTRUCTION SIGN",
          "sheet_x": 23,
          "sheet_y": 6,
          "short_name": "construction",
          "short_names": [
              "construction"
          ],
          "softbank": "E137",
          "text": null,
          "unified": "1F6A7"
      },
      {
          "au": "EB73",
          "docomo": "",
          "google": "FE7F9",
          "image": "1f6a8.png",
          "name": "POLICE CARS REVOLVING LIGHT",
          "sheet_x": 23,
          "sheet_y": 7,
          "short_name": "rotating_light",
          "short_names": [
              "rotating_light"
          ],
          "softbank": "E432",
          "text": null,
          "unified": "1F6A8"
      },
      {
          "au": "EB2C",
          "docomo": "E6DE",
          "google": "FEB22",
          "image": "1f6a9.png",
          "name": "TRIANGULAR FLAG ON POST",
          "sheet_x": 23,
          "sheet_y": 8,
          "short_name": "triangular_flag_on_post",
          "short_names": [
              "triangular_flag_on_post"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6A9"
      },
      {
          "au": "",
          "docomo": "E714",
          "google": "FE4F3",
          "image": "1f6aa.png",
          "name": "DOOR",
          "sheet_x": 23,
          "sheet_y": 9,
          "short_name": "door",
          "short_names": [
              "door"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6AA"
      },
      {
          "au": "E541",
          "docomo": "E738",
          "google": "FEB48",
          "image": "1f6ab.png",
          "name": "NO ENTRY SIGN",
          "sheet_x": 23,
          "sheet_y": 10,
          "short_name": "no_entry_sign",
          "short_names": [
              "no_entry_sign"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6AB"
      },
      {
          "au": "E47D",
          "docomo": "E67F",
          "google": "FEB1E",
          "image": "1f6ac.png",
          "name": "SMOKING SYMBOL",
          "sheet_x": 23,
          "sheet_y": 11,
          "short_name": "smoking",
          "short_names": [
              "smoking"
          ],
          "softbank": "E30E",
          "text": null,
          "unified": "1F6AC"
      },
      {
          "au": "E47E",
          "docomo": "E680",
          "google": "FEB1F",
          "image": "1f6ad.png",
          "name": "NO SMOKING SYMBOL",
          "sheet_x": 23,
          "sheet_y": 12,
          "short_name": "no_smoking",
          "short_names": [
              "no_smoking"
          ],
          "softbank": "E208",
          "text": null,
          "unified": "1F6AD"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6ae.png",
          "name": "PUT LITTER IN ITS PLACE SYMBOL",
          "sheet_x": 23,
          "sheet_y": 13,
          "short_name": "put_litter_in_its_place",
          "short_names": [
              "put_litter_in_its_place"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6AE"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6af.png",
          "name": "DO NOT LITTER SYMBOL",
          "sheet_x": 23,
          "sheet_y": 14,
          "short_name": "do_not_litter",
          "short_names": [
              "do_not_litter"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6AF"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b0.png",
          "name": "POTABLE WATER SYMBOL",
          "sheet_x": 23,
          "sheet_y": 15,
          "short_name": "potable_water",
          "short_names": [
              "potable_water"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B0"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b1.png",
          "name": "NON-POTABLE WATER SYMBOL",
          "sheet_x": 23,
          "sheet_y": 16,
          "short_name": "non-potable_water",
          "short_names": [
              "non-potable_water"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B1"
      },
      {
          "au": "E4AE",
          "docomo": "E71D",
          "google": "FE7EB",
          "image": "1f6b2.png",
          "name": "BICYCLE",
          "sheet_x": 23,
          "sheet_y": 17,
          "short_name": "bike",
          "short_names": [
              "bike"
          ],
          "softbank": "E136",
          "text": null,
          "unified": "1F6B2"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b3.png",
          "name": "NO BICYCLES",
          "sheet_x": 23,
          "sheet_y": 18,
          "short_name": "no_bicycles",
          "short_names": [
              "no_bicycles"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B3"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b4.png",
          "name": "BICYCLIST",
          "sheet_x": 23,
          "sheet_y": 19,
          "short_name": "bicyclist",
          "short_names": [
              "bicyclist"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B4"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b5.png",
          "name": "MOUNTAIN BICYCLIST",
          "sheet_x": 23,
          "sheet_y": 20,
          "short_name": "mountain_bicyclist",
          "short_names": [
              "mountain_bicyclist"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B5"
      },
      {
          "au": "EB72",
          "docomo": "E733",
          "google": "FE7F0",
          "image": "1f6b6.png",
          "name": "PEDESTRIAN",
          "sheet_x": 23,
          "sheet_y": 21,
          "short_name": "walking",
          "short_names": [
              "walking"
          ],
          "softbank": "E201",
          "text": null,
          "unified": "1F6B6"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b7.png",
          "name": "NO PEDESTRIANS",
          "sheet_x": 23,
          "sheet_y": 22,
          "short_name": "no_pedestrians",
          "short_names": [
              "no_pedestrians"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B7"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6b8.png",
          "name": "CHILDREN CROSSING",
          "sheet_x": 23,
          "sheet_y": 23,
          "short_name": "children_crossing",
          "short_names": [
              "children_crossing"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6B8"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB33",
          "image": "1f6b9.png",
          "name": "MENS SYMBOL",
          "sheet_x": 23,
          "sheet_y": 24,
          "short_name": "mens",
          "short_names": [
              "mens"
          ],
          "softbank": "E138",
          "text": null,
          "unified": "1F6B9"
      },
      {
          "au": "",
          "docomo": "",
          "google": "FEB34",
          "image": "1f6ba.png",
          "name": "WOMENS SYMBOL",
          "sheet_x": 23,
          "sheet_y": 25,
          "short_name": "womens",
          "short_names": [
              "womens"
          ],
          "softbank": "E139",
          "text": null,
          "unified": "1F6BA"
      },
      {
          "au": "E4A5",
          "docomo": "E66E",
          "google": "FE506",
          "image": "1f6bb.png",
          "name": "RESTROOM",
          "sheet_x": 23,
          "sheet_y": 26,
          "short_name": "restroom",
          "short_names": [
              "restroom"
          ],
          "softbank": "E151",
          "text": null,
          "unified": "1F6BB"
      },
      {
          "au": "EB18",
          "docomo": "",
          "google": "FEB35",
          "image": "1f6bc.png",
          "name": "BABY SYMBOL",
          "sheet_x": 23,
          "sheet_y": 27,
          "short_name": "baby_symbol",
          "short_names": [
              "baby_symbol"
          ],
          "softbank": "E13A",
          "text": null,
          "unified": "1F6BC"
      },
      {
          "au": "E4A5",
          "docomo": "E66E",
          "google": "FE507",
          "image": "1f6bd.png",
          "name": "TOILET",
          "sheet_x": 23,
          "sheet_y": 28,
          "short_name": "toilet",
          "short_names": [
              "toilet"
          ],
          "softbank": "E140",
          "text": null,
          "unified": "1F6BD"
      },
      {
          "au": "E4A5",
          "docomo": "E66E",
          "google": "FE508",
          "image": "1f6be.png",
          "name": "WATER CLOSET",
          "sheet_x": 23,
          "sheet_y": 29,
          "short_name": "wc",
          "short_names": [
              "wc"
          ],
          "softbank": "E309",
          "text": null,
          "unified": "1F6BE"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6bf.png",
          "name": "SHOWER",
          "sheet_x": 24,
          "sheet_y": 0,
          "short_name": "shower",
          "short_names": [
              "shower"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6BF"
      },
      {
          "au": "E5D8",
          "docomo": "E6F7",
          "google": "FE505",
          "image": "1f6c0.png",
          "name": "BATH",
          "sheet_x": 24,
          "sheet_y": 1,
          "short_name": "bath",
          "short_names": [
              "bath"
          ],
          "softbank": "E13F",
          "text": null,
          "unified": "1F6C0"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6c1.png",
          "name": "BATHTUB",
          "sheet_x": 24,
          "sheet_y": 2,
          "short_name": "bathtub",
          "short_names": [
              "bathtub"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6C1"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6c2.png",
          "name": "PASSPORT CONTROL",
          "sheet_x": 24,
          "sheet_y": 3,
          "short_name": "passport_control",
          "short_names": [
              "passport_control"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6C2"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6c3.png",
          "name": "CUSTOMS",
          "sheet_x": 24,
          "sheet_y": 4,
          "short_name": "customs",
          "short_names": [
              "customs"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6C3"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6c4.png",
          "name": "BAGGAGE CLAIM",
          "sheet_x": 24,
          "sheet_y": 5,
          "short_name": "baggage_claim",
          "short_names": [
              "baggage_claim"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6C4"
      },
      {
          "au": "",
          "docomo": "",
          "google": "",
          "image": "1f6c5.png",
          "name": "LEFT LUGGAGE",
          "sheet_x": 24,
          "sheet_y": 6,
          "short_name": "left_luggage",
          "short_names": [
              "left_luggage"
          ],
          "softbank": "",
          "text": null,
          "unified": "1F6C5"
      },
      {
          "au": "EB84",
          "docomo": "E6E0",
          "google": "FE82C",
          "image": "0023.png",
          "name": "HASH KEY",
          "sheet_x": 0,
          "sheet_y": 0,
          "short_name": "hash",
          "short_names": [
              "hash"
          ],
          "softbank": "E210",
          "text": null,
          "unified": "0023-20E3"
      },
      {
          "au": "E5AC",
          "docomo": "E6EB",
          "google": "FE837",
          "image": "0030.png",
          "name": "KEYCAP 0",
          "sheet_x": 0,
          "sheet_y": 1,
          "short_name": "zero",
          "short_names": [
              "zero"
          ],
          "softbank": "E225",
          "text": null,
          "unified": "0030-20E3"
      },
      {
          "au": "E522",
          "docomo": "E6E2",
          "google": "FE82E",
          "image": "0031.png",
          "name": "KEYCAP 1",
          "sheet_x": 0,
          "sheet_y": 2,
          "short_name": "one",
          "short_names": [
              "one"
          ],
          "softbank": "E21C",
          "text": null,
          "unified": "0031-20E3"
      },
      {
          "au": "E523",
          "docomo": "E6E3",
          "google": "FE82F",
          "image": "0032.png",
          "name": "KEYCAP 2",
          "sheet_x": 0,
          "sheet_y": 3,
          "short_name": "two",
          "short_names": [
              "two"
          ],
          "softbank": "E21D",
          "text": null,
          "unified": "0032-20E3"
      },
      {
          "au": "E524",
          "docomo": "E6E4",
          "google": "FE830",
          "image": "0033.png",
          "name": "KEYCAP 3",
          "sheet_x": 0,
          "sheet_y": 4,
          "short_name": "three",
          "short_names": [
              "three"
          ],
          "softbank": "E21E",
          "text": null,
          "unified": "0033-20E3"
      },
      {
          "au": "E525",
          "docomo": "E6E5",
          "google": "FE831",
          "image": "0034.png",
          "name": "KEYCAP 4",
          "sheet_x": 0,
          "sheet_y": 5,
          "short_name": "four",
          "short_names": [
              "four"
          ],
          "softbank": "E21F",
          "text": null,
          "unified": "0034-20E3"
      },
      {
          "au": "E526",
          "docomo": "E6E6",
          "google": "FE832",
          "image": "0035.png",
          "name": "KEYCAP 5",
          "sheet_x": 0,
          "sheet_y": 6,
          "short_name": "five",
          "short_names": [
              "five"
          ],
          "softbank": "E220",
          "text": null,
          "unified": "0035-20E3"
      },
      {
          "au": "E527",
          "docomo": "E6E7",
          "google": "FE833",
          "image": "0036.png",
          "name": "KEYCAP 6",
          "sheet_x": 0,
          "sheet_y": 7,
          "short_name": "six",
          "short_names": [
              "six"
          ],
          "softbank": "E221",
          "text": null,
          "unified": "0036-20E3"
      },
      {
          "au": "E528",
          "docomo": "E6E8",
          "google": "FE834",
          "image": "0037.png",
          "name": "KEYCAP 7",
          "sheet_x": 0,
          "sheet_y": 8,
          "short_name": "seven",
          "short_names": [
              "seven"
          ],
          "softbank": "E222",
          "text": null,
          "unified": "0037-20E3"
      },
      {
          "au": "E529",
          "docomo": "E6E9",
          "google": "FE835",
          "image": "0038.png",
          "name": "KEYCAP 8",
          "sheet_x": 0,
          "sheet_y": 9,
          "short_name": "eight",
          "short_names": [
              "eight"
          ],
          "softbank": "E223",
          "text": null,
          "unified": "0038-20E3"
      },
      {
          "au": "E52A",
          "docomo": "E6EA",
          "google": "FE836",
          "image": "0039.png",
          "name": "KEYCAP 9",
          "sheet_x": 0,
          "sheet_y": 10,
          "short_name": "nine",
          "short_names": [
              "nine"
          ],
          "softbank": "E224",
          "text": null,
          "unified": "0039-20E3"
      },
      {
          "au": "EB11",
          "docomo": "",
          "google": "FE4ED",
          "image": "1f1e8-1f1f3.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS CN",
          "sheet_x": 1,
          "sheet_y": 0,
          "short_name": "cn",
          "short_names": [
              "cn"
          ],
          "softbank": "E513",
          "text": null,
          "unified": "1F1E8-1F1F3"
      },
      {
          "au": "EB0E",
          "docomo": "",
          "google": "FE4E8",
          "image": "1f1e9-1f1ea.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS DE",
          "sheet_x": 1,
          "sheet_y": 1,
          "short_name": "de",
          "short_names": [
              "de"
          ],
          "softbank": "E50E",
          "text": null,
          "unified": "1F1E9-1F1EA"
      },
      {
          "au": "E5D5",
          "docomo": "",
          "google": "FE4EB",
          "image": "1f1ea-1f1f8.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS ES",
          "sheet_x": 1,
          "sheet_y": 2,
          "short_name": "es",
          "short_names": [
              "es"
          ],
          "softbank": "E511",
          "text": null,
          "unified": "1F1EA-1F1F8"
      },
      {
          "au": "EAFA",
          "docomo": "",
          "google": "FE4E7",
          "image": "1f1eb-1f1f7.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS FR",
          "sheet_x": 1,
          "sheet_y": 3,
          "short_name": "fr",
          "short_names": [
              "fr"
          ],
          "softbank": "E50D",
          "text": null,
          "unified": "1F1EB-1F1F7"
      },
      {
          "au": "EB10",
          "docomo": "",
          "google": "FE4EA",
          "image": "1f1ec-1f1e7.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS GB",
          "sheet_x": 1,
          "sheet_y": 4,
          "short_name": "gb",
          "short_names": [
              "gb",
              "uk"
          ],
          "softbank": "E510",
          "text": null,
          "unified": "1F1EC-1F1E7"
      },
      {
          "au": "EB0F",
          "docomo": "",
          "google": "FE4E9",
          "image": "1f1ee-1f1f9.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS IT",
          "sheet_x": 1,
          "sheet_y": 5,
          "short_name": "it",
          "short_names": [
              "it"
          ],
          "softbank": "E50F",
          "text": null,
          "unified": "1F1EE-1F1F9"
      },
      {
          "au": "E4CC",
          "docomo": "",
          "google": "FE4E5",
          "image": "1f1ef-1f1f5.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS JP",
          "sheet_x": 1,
          "sheet_y": 6,
          "short_name": "jp",
          "short_names": [
              "jp"
          ],
          "softbank": "E50B",
          "text": null,
          "unified": "1F1EF-1F1F5"
      },
      {
          "au": "EB12",
          "docomo": "",
          "google": "FE4EE",
          "image": "1f1f0-1f1f7.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS KR",
          "sheet_x": 1,
          "sheet_y": 7,
          "short_name": "kr",
          "short_names": [
              "kr"
          ],
          "softbank": "E514",
          "text": null,
          "unified": "1F1F0-1F1F7"
      },
      {
          "au": "E5D6",
          "docomo": "",
          "google": "FE4EC",
          "image": "1f1f7-1f1fa.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS RU",
          "sheet_x": 1,
          "sheet_y": 8,
          "short_name": "ru",
          "short_names": [
              "ru"
          ],
          "softbank": "E512",
          "text": null,
          "unified": "1F1F7-1F1FA"
      },
      {
          "au": "E573",
          "docomo": "",
          "google": "FE4E6",
          "image": "1f1fa-1f1f8.png",
          "name": "REGIONAL INDICATOR SYMBOL LETTERS US",
          "sheet_x": 1,
          "sheet_y": 9,
          "short_name": "us",
          "short_names": [
              "us"
          ],
          "softbank": "E50C",
          "text": null,
          "unified": "1F1FA-1F1F8"
      }
  ];
  var emojiCount = emojiData.length;
  
  var getRandomInt = function(minIncl,maxIncl) {
    return Math.floor(Math.random() * ((maxIncl + 1) - minIncl)) + minIncl;
  };
  
  return {
    getRandomEmoji: function() {
      var emojiObj = emojiData[getRandomInt(0,emojiCount-1)];
      return {
        "name": _.str.dasherize(emojiObj.name.toLowerCase()),
        "shortName": _.str.dasherize(emojiObj.short_name.toLowerCase()),
        "code": ":"+emojiObj.short_name+":",
        "sheet_x": emojiObj.sheet_x,
        "sheet_y": emojiObj.sheet_y,
        "hangouts_img": "u"+emojiObj.image
      };
    }
  };
});