for (let i = 0; i < 10; i += 1) {
  // i=0 is the initialization of the variable; i < 10 is the condition, determines when the loop will stop; i += 1 is to increment the variable, stopping at 10
  console.log(i);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, undefined (loop stops at 10, is not shown in console)

// very common use case: looping over an array.
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog",
];
for (i = 0; i < pageNames.length; i += 1) {
  if (document.title === pageNames[i]) {
    console.log("We ARE here: " + pageNames[i]);
  } else {
    console.log("We are not here: " + pageNames[i]);
  }
}

// don't repeat yourself:
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog",
];
for (i = 0; i < pageNames.length; i += 1) {
  var currentPageTitle = pageNames[i];

  if (document.title === currentPageTitle) {
    console.log("We ARE here: " + currentPageTitle);
  } else {
    console.log("We are not here: " + currentPageTitle);
  }
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
