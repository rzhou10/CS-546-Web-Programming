function isString(text) {
    if (typeof text != "string") {
      throw "\"" + text + "\"" + "is not a string";
    }
}

function createMetrics(text){
    isString(text);

    let fileContentString = text.replace(/[^A-Za-z\s]/g,'').toLowerCase();
    fileContentString = fileContentString.replace(/\n/g, ' ');
    fileContentString = fileContentString.replace(/\s\s+/g, ' ').trim();
    let wordArr = fileContentString.split(" ");

    let map = {};

    for (let i = 0; i < wordArr.length; i++){
        if (!map.hasOwnProperty(wordArr[i])) {
			map[wordArr[i]] = 1;
		}
        else{
            map[wordArr[i]]++;
        }
    }

    let metrics = {
        totalLetters: wordArr.join('').length, //the string was already filtered out of non letters
        totalNonLetters: text.length - wordArr.join('').length, //subtract the inital length (which contains non letters, and subtract it from totalLetters)
        totalVowels: fileContentString.split('').filter(x => "aeiou".indexOf(x) >= 0).length, //filters all vowels
        totalConsonants: fileContentString.split('').filter(x => "bcdfghjklmnpqrstvxzwy".indexOf(x) >= 0).length, //filters all consonants
        totalWords: wordArr.length, //length of list
        uniqueWords: new Set(wordArr).size, //Set filters all dupliates
        longWords: (wordArr.filter(a => a.length >= 6)).length, //filters list of words with length greater than 6
        averageWordLength: (wordArr.join('').length) / (wordArr.length), //total length divided by length of list
        wordOccurrences: map //maps each occurence of each word from the arr
    }

    return metrics;
}

module.exports = {
    description: "Get statistics of each word in a string.",
    createMetrics
}