const validBracketComplements: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
};

const isValid = function (str: string): boolean {
    let openingBrackets = [];

    for (let i = 0; i < str.length; i++) {
        if (isClosingBracket(str[i])) {
            // If curr elem is closing bracket, check whether previous opening bracket is valid complement
            const complement = openingBrackets.pop();
            if (validBracketComplements[str[i]] !== complement) {
                return false;
            }
        } else {
            openingBrackets.push(str[i]);
        }
    }
    return true;
};

const isClosingBracket = function (char: string): boolean {
    return validBracketComplements.hasOwnProperty(char);
};

console.log(isValid("([])"));
