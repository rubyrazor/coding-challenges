// Input: String which represents Roman numeral
// Questions:
//  1. Empty string? => 1 <= string.length <= 15
//  2. String is valid Roman numeral? => yes, in the range [1, 3999]
//  3. Contaminated? Which characters does string contain? => string only contains the characters which are part of Roman numerals

// Output: Integer
// Questions:
//  1. Max. one solution? => yes, numbers are unequivocal
//  2. Min. one solution? => yes, see 2. above.
// => There is always a return value & return value is always an integer

// Function: Translation
//  1. Break input into sub-units => each character of input string is a sub-unit
//  2. Translate sub-units into sub-integers => need dictionary
//  3. Determine whether sub-unit is added or subtracted from sum => determined by rules that govern Roman numeral notation
//  4. Determine output => sum of sub-integers

// Rules that govern Roman numeral notation
//  1. Addition: All sub-units are added to build to final sum
//  2. Exception (to 1): 6 instances where subtraction is used instead => Ordered largest to smallest from left to right; if a sub-unit does not follow that rule, it is subtracted from sum

// #1 Solution: Exceptions hard coded

const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const romanToInt = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                if (dict[s[i + 1]] > 1) {
                    sum -= 1;
                } else {
                    sum += 1;
                }
                break;
            case "V":
                sum += 5;
                break;
            case "X":
                if (dict[s[i + 1]] > 10) {
                    sum -= 10;
                } else {
                    sum += 10;
                }
                break;
            case "L":
                sum += 50;
                break;
            case "C":
                if (dict[s[i + 1]] > 100) {
                    sum -= 100;
                } else {
                    sum += 100;
                }
                break;
            case "D":
                sum += 500;
                break;
            case "M":
                sum += 1000;
        }
    }
    return sum;
};

// #2 Solution: Utilise pattern behind the exceptions

const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

// A)
const romanToInt = function (s) {
    let int = 0;

    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] > dict[s[i + 1]] || i === s.length - 1) {
            int += dict[s[i]];
        } else {
            int -= dict[s[i]];
        }
    }

    return int;
};

// B)
const romanToInt = function (s) {
    let int = 0;

    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] > dict[s[i + 1]]) {
            int += dict[s[i + 1]] - dict[s[i]];
            i++;
        } else {
            int -= dict[s[i]];
        }
    }

    return int;
};
