function checkForPalindrome(text){
    if (typeof text != "string") {
        throw "Please enter valid text";
    }
    if (text.length == 0){
        throw "please enter a valid string";
    }

    text = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversed = text.split("").reverse().join("");

    return text == reversed;
}

module.exports = {
    checkForPalindrome
}