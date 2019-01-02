const printElements = function printElements(key, value){
    console.log("\"" + value + "\"" + ":" + key);
}

function deepEquality(obj1, obj2){
    if (typeof obj1 != 'object' || typeof obj2 != 'object'){
        throw "One of the objects passed through is not an object";
    }

    let arr1 = Object.getOwnPropertyNames(obj1);
    let arr2 = Object.getOwnPropertyNames(obj2);

    if (arr1.length != arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        if (obj1[arr1[i]] != obj2[arr2[i]]){
            return false;
        }
    }

    return true;
}

function uniqueElements(arr){
    if (!Array.isArray(arr)){
        throw arr + " is not an array";
    }
    let set = new Set();

    for (let i = 0; i < arr.length; i++){
        set.add(arr[i]);
    }

    return set.size;
}

function countOfEachCharacterInString(str){
    if (typeof str != "string"){
        return "str must be a string";
    }
    let map = new Map();

    for (let i = 0; i < str.length; i++){
        if (map.has(str.charAt(i))){
            map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
        }
        else{
            map.set(str.charAt(i), 1);
        }
    }

    map.forEach(printElements);
}

module.exports = {
    description: "Checks for object equality, unique elements in an array, and count of characters in a string",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString 
}