// Unit Tests ------------------------------------------------------------------------
// Do not modify these tests.  They will automatically run in the console and test your code.


function kenzieAssert(paramObject) {
    let result = paramObject.actual;
    let answer = paramObject.expected;
    if (result === answer) {
        console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
    } else {
        console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
            test: paramObject.failureMessage,
            expected: answer,
            result: result,
        });
    }
}

let lotrCitiesArrayGlobal = modifyLotrCitiesArray([
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
]);

// Required Functions (1 - 20)

console.group("Unit Tests - Kata 1");
kenzieAssert({
    actual: JSON.stringify(kata1()),
    expected: `["King's Landing","Braavos","Volantis","Old Valyria","Free Cities","Qarth","Meereen"]`,
    testNumber: 1,
    testFunction: "kata1",
    failureMessage: `Kata 1 should return an array with the cities in "gotCitiesCSV"`,
});
console.groupEnd();

console.group("Unit Tests - Kata 2");
kenzieAssert({
    actual: JSON.stringify(kata2()),
    expected: `["The","best","thing","about","a","boolean","is","even","if","you","are","wrong","you","are","only","off","by","a","bit"]`,
    testNumber: 1,
    testFunction: "kata2",
    failureMessage: `Kata 2 should return an array of words from the sentence in "bestThing"`,
});
console.groupEnd();

console.group("Unit Tests - Kata 3");
kenzieAssert({
    actual: JSON.stringify(kata3()),
    expected: `"King's Landing; Braavos; Volantis; Old Valyria; Free Cities; Qarth; Meereen"`,
    testNumber: 1,
    testFunction: "kata3",
    failureMessage: `Kata 3 should return a string separated by semi-colons instead of commas from "gotCitiesCSV"`,
});
console.groupEnd();

console.group("Unit Tests - Kata 4");
let lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
];
kenzieAssert({
    actual: JSON.stringify(kata4()),
    expected: `"Mordor, Gondor, Rohan, Beleriand, Mirkwood, Dead Marshes, Rhun, Harad"`,
    testNumber: 1,
    testFunction: "kata4",
    failureMessage: `Kata 4 should return a CSV (comma-separated) string from the "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 5");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
];
kenzieAssert({
    actual: JSON.stringify(kata5()),
    expected: `["Mordor","Gondor","Rohan","Beleriand","Mirkwood"]`,
    testNumber: 1,
    testFunction: "kata5",
    failureMessage: `Kata 5 should return an array with the first 5 cities in "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 6");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
];
kenzieAssert({
    actual: JSON.stringify(kata6()),
    expected: `["Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"]`,
    testNumber: 1,
    testFunction: "kata6",
    failureMessage: `Kata 6 should return an array with the last 5 cities in "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 7");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
];
kenzieAssert({
    actual: JSON.stringify(kata7()),
    expected: `["Rohan","Beleriand","Mirkwood"]`,
    testNumber: 1,
    testFunction: "kata7",
    failureMessage: `Kata 7 should return an array with the 3rd to 5th city in "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 8");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
];
kenzieAssert({
    actual: JSON.stringify(kata8()),
    expected: `["Mordor","Gondor","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"]`,
    testNumber: 1,
    testFunction: "kata8",
    failureMessage: `Kata 8 should use "splice" to remove "Rohan" from "lotrCitiesArray" and return the modified "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 9");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
    "Rhun",
    "Harad",
];
kenzieAssert({
    actual: JSON.stringify(kata9()),
    expected: `["Mordor","Gondor","Beleriand","Mirkwood","Dead Marshes"]`,
    testNumber: 1,
    testFunction: "kata9",
    failureMessage: `Kata 9 should use "splice" to remove all cities after "Dead Marshes" in "lotrCitiesArray" and return the modified "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 10");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
];
kenzieAssert({
    actual: JSON.stringify(kata10()),
    expected: `["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes"]`,
    testNumber: 1,
    testFunction: "kata10",
    failureMessage: `Kata 10 should use "splice" to add "Rohan" back to "lotrCitiesArray" right after "Gondor" and return the modified "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 11");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Dead Marshes",
];
kenzieAssert({
    actual: JSON.stringify(kata11()),
    expected: `["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Deadest Marshes"]`,
    testNumber: 1,
    testFunction: "kata11",
    failureMessage: `Kata 11 should use "splice" to rename "Dead Marshes" to "Deadest Marshes" in "lotrCitiesArray" and return the modified "lotrCitiesArray"`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 12");
kenzieAssert({
    actual: JSON.stringify(kata12()),
    expected: `"The best thing"`,
    testNumber: 1,
    testFunction: "kata12",
    failureMessage: `Kata 12 should use "slice" to return a string with the first 14 characters from "bestThing"`,
});
console.groupEnd();

console.group("Unit Tests - Kata 13");
kenzieAssert({
    actual: JSON.stringify(kata13()),
    expected: `"off by a bit"`,
    testNumber: 1,
    testFunction: "kata13",
    failureMessage: `Kata 13 should use "slice" to return a string with the last 12 characters from "bestThing"`,
});
console.groupEnd();

console.group("Unit Tests - Kata 14");
kenzieAssert({
    actual: JSON.stringify(kata14()),
    expected: `"boolean is even"`,
    testNumber: 1,
    testFunction: "kata14",
    failureMessage: `Kata 14 should use "slice" to return a string with the characters between the 23rd and 38th position of "bestThing" (i.e., "boolean is even")`,
});
console.groupEnd();

console.group("Unit Tests - Kata 15");
kenzieAssert({
    actual: JSON.stringify(kata15()),
    expected: `"off by a bit"`,
    testNumber: 1,
    testFunction: "kata15",
    failureMessage: `Kata 15 should use "substring" to return a string with the last 12 characters from "bestThing"`,
});
console.groupEnd();

console.group("Unit Tests - Kata 16");
kenzieAssert({
    actual: JSON.stringify(kata16()),
    expected: `"boolean is even"`,
    testNumber: 1,
    testFunction: "kata16",
    failureMessage: `Kata 16 should use "substring" to return a string with the characters between the 23rd and 38th position of "bestThing" (i.e., "boolean is even")`,
});
console.groupEnd();

console.group("Unit Tests - Kata 17");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Deadest Marshes",
];
kenzieAssert({
    actual: JSON.stringify(kata17()),
    expected: `["Mordor","Gondor","Rohan","Beleriand","Mirkwood"]`,
    testNumber: 1,
    testFunction: "kata17",
    failureMessage: `Kata 17 should use "pop" to remove the last city from "lotrCitiesArray" and return the modified array`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 18");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
];
kenzieAssert({
    actual: JSON.stringify(kata18()),
    expected: `["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Deadest Marshes"]`,
    testNumber: 1,
    testFunction: "kata18",
    failureMessage: `Kata 18 should use "push" to add back the city from "lotrCitiesArray" that was removed in #17 to the back of the array and return the modified array`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 19");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Mordor",
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Deadest Marshes",
];
kenzieAssert({
    actual: JSON.stringify(kata19()),
    expected: `["Gondor","Rohan","Beleriand","Mirkwood","Deadest Marshes"]`,
    testNumber: 1,
    testFunction: "kata19",
    failureMessage: `Kata 19 should use "shift" to remove the first city from "lotrCitiesArray" and return the modified array`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

console.group("Unit Tests - Kata 20");
lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
lotrCitiesArrayGlobal = [
    "Gondor",
    "Rohan",
    "Beleriand",
    "Mirkwood",
    "Deadest Marshes",
];
kenzieAssert({
    actual: JSON.stringify(kata20()),
    expected: `["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Deadest Marshes"]`,
    testNumber: 1,
    testFunction: "kata20",
    failureMessage: `Kata 20 should use "unshift" to add back the city from "lotrCitiesArray" that was removed in #19 to the front of the array and return the modified array`,
});
lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
console.groupEnd();

// Optional Functions (21 - 32)
// JUST WRAP THE INITIAL IF STATEMENT AROUND THE FUNCTION CALL ITSEFL or w/e
console.group("Unit Tests - Kata 21");
{
    let actual = kata21();
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: 64,
            testNumber: 1,
            testFunction: "kata21",
            failureMessage: `Kata 21 should return the index of "only" in "bestThing"`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 22");
{
    let actual = kata22();
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: 78,
            testNumber: 1,
            testFunction: "kata22",
            failureMessage: `Kata 22 should return the index of the last word in "bestThing"`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 23");
{
    let actual = JSON.stringify(kata23());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `["Braavos","Free Cities","Meereen"]`,
            testNumber: 1,
            testFunction: "kata23",
            failureMessage: `Kata 23 should return an array of all cities from "gotCitiesCSV" that use double vowels ("aa", "ee", etc.)`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 24");
{
    let lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
    lotrCitiesArrayGlobal = [
        "Mordor",
        "Gondor",
        "Rohan",
        "Beleriand",
        "Mirkwood",
        "Deadest Marshes",
    ];
    let actual = JSON.stringify(kata24());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `["Mordor","Gondor"]`,
            testNumber: 1,
            testFunction: "kata24",
            failureMessage: `Kata 24 should return an array with all cities from "lotrCitiesArray" that end with "or"`,
        });
    }
    lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
}
console.groupEnd();

console.group("Unit Tests - Kata 25");
{
    let actual = JSON.stringify(kata25());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `["best","boolean","by","bit"]`,
            testNumber: 1,
            testFunction: "kata25",
            failureMessage: `Kata 25 should return an array with all the words in "bestThing" that start with a "b"`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 26");
{
    let actual = kata26();
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: "Yes" || "yes" || "YES",
            testNumber: 1,
            testFunction: "kata26",
            failureMessage: `Kata 26 should return "Yes" or "No" if "lotrCitiesArray" includes "Mirkwood"`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 27");
{
    let actual = kata27();
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: "No" || "no" || "NO",
            testNumber: 1,
            testFunction: "kata27",
            failureMessage: `Kata 27 should return "Yes" or "No" if "lotrCitiesArray" includes "Hollywood"`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 28");
{
    let lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
    lotrCitiesArrayGlobal = [
        "Mordor",
        "Gondor",
        "Rohan",
        "Beleriand",
        "Mirkwood",
        "Deadest Marshes",
    ];
    let actual = kata28();
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: 4,
            testNumber: 1,
            testFunction: "kata28",
            failureMessage: `Kata 28 should return the index of "Mirkwood" in "lotrCitiesArray"`,
        });
    }
    lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
}
console.groupEnd();

console.group("Unit Tests - Kata 29");
{
    let actual = JSON.stringify(kata29());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `"Deadest Marshes"`,
            testNumber: 1,
            testFunction: "kata29",
            failureMessage: `Kata 29 should return the first city as a string in "lotrCitiesArray" that has more than one word`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 30");
{
    let lotrCitiesArrayBackup = [...lotrCitiesArrayGlobal];
    lotrCitiesArrayGlobal = [
        "Mordor",
        "Gondor",
        "Rohan",
        "Beleriand",
        "Mirkwood",
        "Deadest Marshes",
    ];
    let actual = JSON.stringify(kata30());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `["Deadest Marshes","Mirkwood","Beleriand","Rohan","Gondor","Mordor"]`,
            testNumber: 1,
            testFunction: "kata30",
            failureMessage: `Kata 30 should reverse the order of "lotrCitiesArray" and return the modified array`,
        });
    }
    lotrCitiesArrayGlobal = lotrCitiesArrayBackup;
}
console.groupEnd();

console.group("Unit Tests - Kata 31");
{
    let actual = JSON.stringify(kata31());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `["Beleriand","Deadest Marshes","Gondor","Mirkwood","Mordor","Rohan"]`,
            testNumber: 1,
            testFunction: "kata31",
            failureMessage: `Kata 31 should sort "lotrCitiesArray" alphabetically and return the modified array`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - Kata 32");
{
    let actual = JSON.stringify(kata32());
    if (actual !== undefined) {
        kenzieAssert({
            actual: actual,
            expected: `["Rohan","Gondor","Mordor","Mirkwood","Beleriand","Deadest Marshes"]`,
            testNumber: 1,
            testFunction: "kata32",
            failureMessage: `Kata 32 should sort "lotrCitiesArray" by the number of characters in each city (i.e., shortest city names go first) and return the modified array`,
        });
    }
}
console.groupEnd();
