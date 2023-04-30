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
let title = document.createElement('h3')
title.innerText = "Kata 1"
document.body.append(title)
const kata1 = function () {
  // Your Code Here
  
  return (gotCitiesCSV.split(",")); // Return your result.
}
// Remember to execute your function AND render to the DOM!
let divCities = document.createElement('div')
divCities.innerText = `${JSON.stringify(kata1())}`
document.body.append(divCities)

// Write a function that returns an array of words from the sentence in "bestThing".
const kata2 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 2"
  divCities.innerText = `${JSON.stringify(bestThing.split(" "))}`
  document.body.append(title, divCities)
  return bestThing.split(" ")
}

// Write a function that returns a string separated by semi-colons instead of commas from "gotCitiesCSV".
const kata3 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 3"
  divCities.innerText = `${(gotCitiesCSV.split(",").join("; "))}`
  document.body.append(title, divCities)
  return gotCitiesCSV.split(",").join("; ")
}

// Write a function that returns a CSV (comma-separated) string from the "lotrCitiesArray".
const kata4 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 4"
  divCities.innerText = `${(lotrCitiesArray.join(", "))}`
  document.body.append(title, divCities)
  return (lotrCitiesArray.join(", "))
}

// Write a function that returns an array with the first 5 cities in "lotrCitiesArray".
const kata5 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText= "Kata 5"
  divCities.innerText = `${ JSON.stringify(lotrCitiesArray.join(" ").substr(0, 38).split(" "))}`
  document.body.append(title, divCities)
  return lotrCitiesArray.join(" ").substr(0, 38).split(" ")
}

// Write a function that returns an array with the last 5 cities in "lotrCitiesArray".
const kata6 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 6"
  divCities.innerText = `${JSON.stringify(lotrCitiesArray.join(",").substr(-42).split(","))}`
  document.body.append(title, divCities)
  return lotrCitiesArray.join(",").substr(-42).split(",")
}

// Write a function that returns an array with the 3rd to 5th city in "lotrCitiesArray".
const kata7 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 7"
  divCities.innerText = `${JSON.stringify(lotrCitiesArray.join(",").substring(14, 38).split(","))}`
  document.body.append(title, divCities)
  return lotrCitiesArray.join(",").substring(14, 38).split(",")
}

// Write a function that uses "splice" to remove "Rohan" from "lotrCitiesArray" and returns the modified "lotrCitiesArray".
const kata8 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 8"
  lotrCitiesArray.splice(2, 1)
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// Write a function that uses "splice" to remove all cities after "Dead Marshes" in "lotrCitiesArray" and returns the modified "lotrCitiesArray".
const kata9 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText= "Kata 9"
  lotrCitiesArray.splice(-2, lotrCitiesArray.length)
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// Write a function that uses "splice" to add "Rohan" back to "lotrCitiesArray" right after "Gondor" and returns the modified "lotrCitiesArray".
const kata10 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 10"
  lotrCitiesArray.splice(2, 0, "Rohan")
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// Write a function that uses "splice" to rename "Dead Marshes" to "Deadest Marshes" in "lotrCitiesArray" and returns the modified "lotrCitiesArray".
const kata11 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 11"
  lotrCitiesArray.splice(-1, 1, "Deadest Marshes")
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// Write a function that uses "slice" to return a string with the first 14 characters from "bestThing".
const kata12 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 12"
  divCities.innerText = `${JSON.stringify(bestThing.slice(0, 14))}`
  document.body.append(title, divCities)

  return bestThing.slice(0, 14)
}

// Write a function that uses "slice" to return a string with the last 12 characters from "bestThing".
const kata13 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 13"
  divCities.innerText = `${(bestThing.slice(-12, bestThing.length))}`
  document.body.append(title, divCities)

  return bestThing.slice(-12, bestThing.length)

}

// Write a function that uses "slice" to return a string with the characters between the 23rd and 38th position of "bestThing" (i.e., "boolean is even").
const kata14 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 14"
  divCities.innerText = `${(bestThing.slice(23, 38))}`
  document.body.append(title, divCities)

  return bestThing.slice(23, 38)
}

// Write a function that does the exact same thing as #13 but use the "substring" method instead of "slice".
const kata15 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 15"
  divCities.innerText = `${(bestThing.substring(69))}`
  document.body.append(title, divCities)

  return bestThing.substring(69)
}

// Write a function that does the exact same thing as #14 but use the "substring" method instead of "slice".
const kata16 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 16"
  divCities.innerText = `${(bestThing.substring(23, 38))}`
  document.body.append(title, divCities)

  return bestThing.substring(23, 38)

}

// Write a function that uses "pop" to remove the last city from "lotrCitiesArray" and returns the modified array.
const kata17 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 17"
  lotrCitiesArray.pop()
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// Write a function that uses "push" to add back the city from "lotrCitiesArray" that was removed in #17 to the back of the array and returns the modified array.
const kata18 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 18"
  lotrCitiesArray.push("Deadest Marshes")
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// Write a function that uses "shift" to remove the first city from "lotrCitiesArray" and returns the modified array.
const kata19 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 19"
  lotrCitiesArray.shift()
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray

}

// Write a function that uses "unshift" to add back the city from "lotrCitiesArray" that was removed in #19 to the front of the array and returns the modified array.
const kata20 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 20"
  lotrCitiesArray.unshift("Mordor")
  divCities.innerText = `${JSON.stringify(lotrCitiesArray)}`
  document.body.append(title, divCities)

  return lotrCitiesArray
}

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of "only" in "bestThing".
const kata21 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 21"
 
  divCities.innerText = `"only" has the index number ${bestThing.indexOf('only')} in bestThing`
  document.body.append(title, divCities)

  return bestThing.indexOf('only')

}

// Write a function that finds and returns the index of the last word in "bestThing".
const kata22 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 22"

  divCities.innerText = `The index of the last word in bestThing is ${bestThing.indexOf('bit')}`
  document.body.append(title, divCities)

  return bestThing.indexOf('bit')
}

// Write a function that finds and returns an array of all cities from "gotCitiesCSV" that use double vowels ("aa", "ee", etc.).
const kata23 = function () {
  // Your Code Here
  let title = document.createElement('h3'), divCities = document.createElement('div')
  title.innerText = "Kata 23"
  let citiesArray = gotCitiesCSV.split(',')
  let newArray = []
  for (let city = 0; city < citiesArray.length; city++){
    if(citiesArray[city].match(/aa|ee|ii|uu|yy|oo/g)){
        newArray.push(citiesArray[city])
    }
  }
  divCities.innerText = JSON.stringify(newArray)
  document.body.append(title, divCities)
  return newArray;
}

// Write a function that finds and returns an array with all cities from "lotrCitiesArray" that end with "or".
const kata24 = function () {
  // Your Code Here
  let titleKata24 = document.createElement('h3'), result24 = document.createElement('div')
  titleKata24.innerText = "Kata 24"
  let findCity = []

  for(let item = 0; item < lotrCitiesArray.length; item++){
    if(lotrCitiesArray[item].slice(-2) === 'or'){
      findCity.push(lotrCitiesArray[item])
    }
  }
  result24.innerText = `${JSON.stringify(findCity)}`
  document.body.append(titleKata24,result24)
  return findCity
}

// Remember to execute your function AND render to the DOM!

// Write a function that finds and returns an array with all the words in "bestThing" that start with a "b".
const kata25 = function () {
  // Your Code Here
  let titleKata25 = document.createElement('h3'), result25 = document.createElement('div')
  titleKata25.innerText = "Kata 25"
  let findCity = []
  let bestThingArray = bestThing.split(' ')

  for (let item = 0; item < bestThingArray.length; item++) {
    if (bestThingArray[item].slice(0, 1) === 'b') {
      findCity.push(bestThingArray[item])
    }
  }
  result25.innerText = `${JSON.stringify(findCity)}`
  document.body.append(titleKata25, result25)
  return findCity
}

// Write a function that returns "Yes" or "No" if "lotrCitiesArray" includes "Mirkwood".
const kata26 = function () {
  // Your Code Here
  let titleKata26 = document.createElement('h3'), result26 = document.createElement('div')
  titleKata26.innerText = "Kata 26"
  document.body.append(titleKata26, result26)

  for(let cityName = 0; cityName < lotrCitiesArray.length; cityName++){
    if(lotrCitiesArray[cityName].includes('Mirkwood')){
      result26.innerText = 'Yes'
      return 'Yes'
    }
  }
  result26.innerText = 'No'
  return 'No'
}

// Write a function that returns "Yes" or "No" if "lotrCitiesArray" includes "Hollywood".
const kata27 = function () {
  // Your Code Here
  let titleKata27 = document.createElement('h3'), result27 = document.createElement('div')
  titleKata27.innerText = "Kata 27"
  document.body.append(titleKata27, result27)

  for (let cityName = 0; cityName < lotrCitiesArray.length; cityName++) {
    if (lotrCitiesArray[cityName].includes('Hollywood')) {
      result27.innerText = 'Yes'
      return 'Yes'
    }
  }
  result27.innerText = 'No'
  return 'No'
}

// Write a function that returns the index of "Mirkwood" in "lotrCitiesArray".
const kata28 = function () {
  // Your Code Here
  let titleKata28 = document.createElement('h3'), result28 = document.createElement('div')
  titleKata28.innerText = "Kata 28"
  result28.innerText = `The index of Mirkwood in LotrCitiesArray is ${lotrCitiesArray.indexOf('Mirkwood')}`
  document.body.append(titleKata28, result28)

  return lotrCitiesArray.indexOf('Mirkwood')
}

// Write a function that finds and returns the first city as a string in "lotrCitiesArray" that has more than one word.
const kata29 = function () {
  // Your Code Here
  let titleKata29 = document.createElement('h3'), result29 = document.createElement('div')
  titleKata29.innerText = "Kata 29"
  document.body.append(titleKata29, result29)

  for (let cityName of lotrCitiesArray){
    if(cityName.includes(" ")){
      result29.innerText = `The first city in LotrCitiesArray that has more than one word is ${cityName}`
      return cityName
    }
  }
}

// Write a function that reverses the order of "lotrCitiesArray" and returns the modified array.
const kata30 = function () {
  // Your Code Here
  let titleKata30 = document.createElement('h3'), result30 = document.createElement('div'), lotrCitiesArrayReversed
  titleKata30.innerText = "Kata 30"
  lotrCitiesArrayReversed = lotrCitiesArray.reverse()
  result30.innerText = `The reversed LotrCitiesArray  will be ${JSON.stringify(lotrCitiesArrayReversed)}`

  document.body.append(titleKata30, result30)
  return lotrCitiesArrayReversed
}

// Write a function that sorts "lotrCitiesArray" alphabetically and returns the modified array.
const kata31 = function () {
  // Your Code Here
  let titleKata31 = document.createElement('h3'), result31 = document.createElement('div'), lotrCitiesArraySorted
  titleKata31.innerText = "Kata 31"
  lotrCitiesArraySorted = lotrCitiesArray.sort()
  result31.innerText = `The sorted LotrCitiesArray  will be ${JSON.stringify(lotrCitiesArraySorted)}`

  document.body.append(titleKata31, result31)
  return lotrCitiesArraySorted
}

// Write a function that sorts "lotrCitiesArray" by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
const kata32 = function () {
  // Your Code Here
  let titleKata32 = document.createElement('h3'), result32 = document.createElement('div'), citiesSortedByLength
  titleKata32.innerText = "Kata 32"
  citiesSortedByLength = lotrCitiesArray.sort((a, b) => a.length - b.length)
  result32.innerText = `The sorted LotrCitiesArray considering length will be ${JSON.stringify(citiesSortedByLength)}`

  document.body.append(titleKata32, result32)
  return citiesSortedByLength
}

/* 
Leave the following code unmodified
*/

const modifyLotrCitiesArray = function (value) {
  lotrCitiesArray = value
  return lotrCitiesArray
}