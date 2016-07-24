string.toUpperCase();

string.charAt(0).toUpperCase() + string.slice(1);


  var rev = '';
  for (var i = string.length - 1; i >= 0; i--)
    rev += string[i];
  return rev;


var pal = "No Mel Gibson is a casinos big lemon";

function Checkpal(pal) {
    pal = pal.replace(/\s/g, '');
    pal = pal.toLowerCase();
    if (pal == pal.split('').reverse().join('')){
        return alert("it's a palindrome!!");
    }else{
        return alert("it's not a palindrome!!");
    }
}

Checkpal(pal);

var par = "";
var parLength = par.length;


var str = "The Caeser cipher is one of the earliest known cipher";

function getFrequency2(str) {
  var cleanString = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
      words = cleanString.split(' '),
      frequencies = {},
      word, frequency, i;

  for( i=0; i<words.length; i++ ) {
    word = words[i];
    frequencies[word] = frequencies[word] || 0;
    frequencies[word]++;
  }
  
  words = Object.keys( frequencies );

  return words.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0).toString();
}
