var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/; //this means to make the word this case insensitive

regex.test(string1);
regex.test(string2);
regex.test(string3);
regex.test(string4);

regex = /this/i;

regex = /^this/i; // match against the beginning of the string

regex = /this$/i; // match against the ending of the string

regex = /ever.$/i; // see if this word appears at the end of the string

regex = /ever\.$/i; // see if the punctuation mark . appears at the end of the string

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
