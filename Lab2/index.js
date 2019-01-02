const utilities = require("./utilities");
const geometry = require("./geometry");

const testStringArr = ["testing", "various", "words", "for", "function"];
const testIntArr = [[1, 4, 2, 4, 19, 9], [47, 1], [4, 83, 2, 83], [3, 6, 8, 2], [0, 25, 3, 0]];
let testObjArr = [[{a: 3, b: 3}, {a: 3, b: 3}], [{a: 2, b: 3}, {a: 3, b: 3}], [{test: "3", test1: "3"}, {test: "3", test1: "3"}], [{c: 34, d: 83}, {b: 34, k: 83}], [{other: 1.1 , k: 1.2}, {other: 1.1, k: 1.2, x: 1.3}]];

for (let i = 1; i <= 5; i++){
    console.log("Volume of rect. prism at " + i + ", " + (i + 1) + ", " + (i + 2) + ": " + geometry.volumeOfRectangularPrism(i, i + 1, i + 2));
}

for (let i = 1; i <= 5; i++){
    console.log("Surface area of rect. prism at " + i + ", " + (i + 1) + ", " + (i + 2) + ": " + geometry.surfaceAreaOfRectangularPrism(i, i + 1, i + 2));
}

for (let i = 1; i <= 5; i++){
    console.log("Volume of sphere at " + i + ": " + geometry.volumeOfSphere(i));
}

for (let i = 1; i <= 5; i++){
    console.log("Surface area of sphere at " + i + ": " + geometry.surfaceAreaOfSphere(i));
}

for (let i = 1; i <= 5; i++){
    console.log("Count of each character in " + testStringArr[i - 1] + ": " + utilities.countOfEachCharacterInString(testStringArr[i - 1]));
}

for (let i = 1; i <= 5; i++){
    console.log("Count of unique elements for [" + testIntArr[i - 1].join(', ') + "]: " + utilities.uniqueElements(testIntArr[i - 1]));
}

for (let i = 1; i <= 5; i++){
    console.log("Equality for each object [" + JSON.stringify((testObjArr[i - 1][0])) + ", " + JSON.stringify((testObjArr[i - 1][1])) + "]: " + utilities.deepEquality(testObjArr[i - 1][0], testObjArr[i - 1][1]));
}