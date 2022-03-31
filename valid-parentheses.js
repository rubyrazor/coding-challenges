// Input: String
// Questions:
// 1. Empty string? -> no
// 2. Only valid characters (paretheses only)? -> yes

// Output: Boolean
// Questions:
// 1. How many solutions? => always exactly one.

// Algorithm:
// 1. Determine sub-unit => each index contains one parentheses
// 2. Check whether sub-unit is valid according to rules
// 3. If all sub-units are valid, return true; else, return false

var isValid = function(str) {

    // Counter for thre different types of opening and closing brackets
    let counterRoundedOpening = 0;
    let counterRoundedClosing = 0;
    let counterCurlyOpening = 0;
    let counterCurlyClosing = 0;
    let counterSquareOpening = 0;
    let counterSquareClosing = 0;

    // Memory for brackets interated over before current bracket
    let previousBrackets = {};

    // Looping through input string
    for (let i = 0; i < str.length; i++) {
        
        
    }
};

