const questionOne = function questionOne(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i] * arr[i];
    }

    return sum;
}

const questionTwo = function questionTwo(num) { 
    if (num <= 1){
        return num;
    }
    return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    let count = 0;
    
    for (var i = 0; i < text.length; i++){
        if ("aeiouAEIOU".indexOf(text.charAt(i)) >= 0){
            count++;
        }
    }

    return count;
}

const questionFour = function questionFour(num) {
    if (num < 0){
        return NaN;
    }
    else if (num >= 0 && num < 3){
        return num;
    }
    return num * questionFour(num - 1);
}

module.exports = {
    firstName: "Renjie", 
    lastName: "Zhou", 
    studentId: "10396229",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};