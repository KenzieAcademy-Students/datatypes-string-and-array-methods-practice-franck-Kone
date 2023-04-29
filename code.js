let gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
let bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: Create a function that renders any result to the DOM, then call this function outside each kata! That way you only have to write code to render to the DOM once :)
// Ex: A function called displayHelper will display results to the DOM and takes 2 parameters: 
// 1. A number or string representing the current kata
// 2. The function call for the current kata
// displayHelper(1, kata1())

// Write a function that returns an array with the cities in "gotCitiesCSV".
const kata1 = function () {
  // Your Code Here

  return; // Return your result.
}
// Remember to execute your function AND render to the DOM!

// Write a function that returns an array of words from the sentence in "bestThing".
const kata2 = function () {
  // Your Code Here
}

// Write a function that returns a string separated by semi-colons instead of commas from "gotCitiesCSV".
const kata3 = function () {
  // Your Code Here
}

// Write a function that returns a CSV (comma-separated) string from the "lotrCitiesArray".
const kata4 = function () {
  // Your Code Here
}

// Write a function that returns an array with the first 5 cities in "lotrCitiesArray".
const kata5 = function () {
  // Your Code Here
}

// Write a function that returns an array with the last 5 cities in "lotrCitiesArray".
const kata6 = function () {
  // Your Code Here
}

// Write a function that returns an array with the 3rd to 5th city in "lotrCitiesArray".
const kata7 = function () {
  // Your Code Here
}

// Write a function that uses "splice" to remove "Rohan" from "lotrCitiesArray" and returns the modified "lotrCitiesArray".
const kata8 = function () {
  // Your Code Here
}

// Write a function that uses "splice" to remove all cities after "Dead Marshes" in "lotrCitiesArray" and returns the modified "lotrCitiesArray".
const kata9 = function () {
  // Your Code Here
}

// Write a function that uses "splice" to add "Rohan" back to "lotrCitiesArray" right after "Gondor" and returns the modified "lotrCitiesArray".
const kata10 = function () {
  // Your Code Here
}

// Write a function that uses "splice" to rename "Dead Marshes" to "Deadest Marshes" in "lotrCitiesArray" and returns the modified "lotrCitiesArray".
const kata11 = function () {
  // Your Code Here
}

// Write a function that uses "slice" to return a string with the first 14 characters from "bestThing".
const kata12 = function () {
  // Your Code Here
}

// Write a function that uses "slice" to return a string with the last 12 characters from "bestThing".
const kata13 = function () {
  // Your Code Here
}

// Write a function that uses "slice" to return a string with the characters between the 23rd and 38th position of "bestThing" (i.e., "boolean is even").
const kata14 = function () {
  // Your Code Here
}

// Write a function that does the exact same thing as #13 but use the "substring" method instead of "slice".
const kata15 = function () {
  // Your Code Here
}

// Write a function that does the exact same thing as #14 but use the "substring" method instead of "slice".
const kata16 = function () {
  // Your Code Here
}

// Write a function that uses "pop" to remove the last city from "lotrCitiesArray" and returns the modified array.
const kata17 = function () {
  // Your Code Here
}

// Write a function that uses "push" to add back the city from "lotrCitiesArray" that was removed in #17 to the back of the array and returns the modified array.
const kata18 = function () {
  // Your Code Here
}

// Write a function that uses "shift" to remove the first city from "lotrCitiesArray" and returns the modified array.
const kata19 = function () {
  // Your Code Here
}

// Write a function that uses "unshift" to add back the city from "lotrCitiesArray" that was removed in #19 to the front of the array and returns the modified array.
const kata20 = function () {
  // Your Code Here
}

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of "only" in "bestThing".
const kata21 = function () {
  // Your Code Here
}

// Write a function that finds and returns the index of the last word in "bestThing".
const kata22 = function () {
  // Your Code Here
}

// Write a function that finds and returns an array of all cities from "gotCitiesCSV" that use double vowels ("aa", "ee", etc.).
const kata23 = function () {
  // Your Code Here
}

// Write a function that finds and returns an array with all cities from "lotrCitiesArray" that end with "or".
const kata24 = function () {
  // Your Code Here
}

// Write a function that finds and returns an array with all the words in "bestThing" that start with a "b".
const kata25 = function () {
  // Your Code Here
}

// Write a function that returns "Yes" or "No" if "lotrCitiesArray" includes "Mirkwood".
const kata26 = function () {
  // Your Code Here
}

// Write a function that returns "Yes" or "No" if "lotrCitiesArray" includes "Hollywood".
const kata27 = function () {
  // Your Code Here
}

// Write a function that returns the index of "Mirkwood" in "lotrCitiesArray".
const kata28 = function () {
  // Your Code Here
}

// Write a function that finds and returns the first city as a string in "lotrCitiesArray" that has more than one word.
const kata29 = function () {
  // Your Code Here
}

// Write a function that reverses the order of "lotrCitiesArray" and returns the modified array.
const kata30 = function () {
  // Your Code Here
}

// Write a function that sorts "lotrCitiesArray" alphabetically and returns the modified array.
const kata31 = function () {
  // Your Code Here
}

// Write a function that sorts "lotrCitiesArray" by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
const kata32 = function () {
  // Your Code Here
}

/* 
Leave the following code unmodified
*/

const modifyLotrCitiesArray = function (value) {
  lotrCitiesArray = value
  return lotrCitiesArray
}