var validBracketComplements = {
    ")": "(",
    "]": "[",
    "}": "{"
};
var isValid = function (str) {
    var openingBrackets = [];
    for (var i = 0; i < str.length; i++) {
        if (isClosingBracket(str[i])) {
            // If curr elem is closing bracket, check whether previous opening bracket is valid complement
            console.log(openingBrackets);
            var complement = openingBrackets.pop();
            console.log(complement);
            if (validBracketComplements[str[i]] !== complement) {
                console.log(i);
                return false;
            }
        }
        else {
            console.log("got here!");
            openingBrackets.push(str[i]);
        }
    }
    return true;
};
var isClosingBracket = function (char) {
    return validBracketComplements.hasOwnProperty(char);
};
console.log(isValid("([])"));
