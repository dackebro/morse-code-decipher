var fs = require('fs');
var dictionary = fs.readFileSync('ord.stava').toString().split("\n");
var letters = [
  {"code": ".-", "char":   "a"}, //A
  {"code": "-...", "char": "b"}, //B
  {"code": "-.-.", "char": "c"}, //C
  {"code": "-..", "char":  "d"}, //D
  {"code": ".", "char":    "e"}, //E
  {"code": "..-.", "char": "f"}, //F
  {"code": "--.", "char":  "g"}, //G
  {"code": "....", "char": "h"}, //H
  {"code": "..", "char":   "i"}, //I
  {"code": ".---", "char": "j"}, //J
  {"code": "-.-", "char":  "k"}, //K
  {"code": ".-..", "char": "l"}, //L
  {"code": "--", "char":   "m"}, //M
  {"code": "-.", "char":   "n"}, //N
  {"code": "---", "char":  "o"}, //O
  {"code": ".--.", "char": "p"}, //P
  {"code": "--.-", "char": "q"}, //Q
  {"code": ".-.", "char":  "r"}, //R
  {"code": "...", "char":  "s"}, //S
  {"code": "-", "char":    "t"}, //T
  {"code": "..-", "char":  "u"}, //U
  {"code": "...-", "char": "v"}, //V
  {"code": ".--", "char":  "w"}, //W
  {"code": "-..-", "char": "x"}, //X
  {"code": "-.--", "char": "y"}, //Y
  {"code": "--..", "char": "z"} //Z
];

function morse(remainder, word) {
  if (remainder.length == 0) {
    console.log(word);
  }

  var start = false;
  try {
    dictionary.forEach((dict) => {
      if (dict.startsWith(word) || word == "") {
        start = true;
        throw BreakException;
      }
    });
  } catch (e) {}
  if (!start) {
    return;     // Can't be this word
  }

  letters.forEach((item) => {
    if (remainder.startsWith(item.code)) {
      morse(remainder.replace(item.code, ""), word + item.char);
    }
  });
}

var encoded = ".-....--.-....-..-....-..--.-...";

morse(encoded, "");
