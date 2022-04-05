// Background: Checking for balanced parentheses is one of the most important tasks of a compiler!
/*
// #1 SOLUTION (Only supported in ES5 and higher: uses a string in a 'for...of' statement)

(function () {
    // Valid bracket complements
    const map: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    // Stack serving as memory for opening brackets
    const stack: string[] = [];

    const isValid = function (str: string): boolean {
        for (const char of str) {
            // Three conditions can hold: Char is an opening bracket (1.)...
            if (map[char]) {
                stack.push(char);
            //... or char is a closing bracket, that either is NOT a valid complement for the last opening bracket in the stack (1.2) and the entire input thus invalid...
            } else if (char !== map[stack[stack.length-1]]){
                return false;
            //... or it is a valid complement for the last opening bracket in the stack and, thus, the opening bracket can be eliminated from the stack (1.3)...
            } else {
                stack.pop();
            }
            //... and we can check the next character of the input string
        }
        // Returns true if the stack is empty, that is, every bracket has a valid complement and, hence, the entire input string is valid; else it returns false.
        return stack.length === 0;
    };
    console.log(isValid('([]){}'));
})();
*/

// #2 SOLUTION
(function() {
    
const pairs: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
};

const isValid = function (str: string): boolean {
    const stack: string[] = [];

    for (let i = 0; i < str.length; i++) {
        if (isClosingBracket(str[i])) {
            const complement: string = stack.pop();
            // If curr elem is closing bracket, check whether previous opening bracket is valid complement
            if (pairs[str[i]] !== complement) {
                return false;
            }
        } else {
            stack.push(str[i]);
        }
    }
    return stack.length === 0;
};

const isClosingBracket = function (char: string): boolean {
    return pairs.hasOwnProperty(char);
};

console.log(isValid('([])('));

})();

