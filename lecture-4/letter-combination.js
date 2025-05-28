// Measure 1

/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations1 = function (digits) {
    let two = ['a', 'b', 'c'];
    let three = ['d', 'e', 'f'];
    let four = ['g', 'h', 'i'];
    let five = ['j', 'k', 'l'];
    let six = ['m', 'n', 'o'];
    let seven = ['p', 'q', 'r', 's'];
    let eight = ['t', 'u', 'v'];
    let nine = ['w', 'x', 'y', 'z'];

    let str = [];
    if (digits === '2') {
        str = str.concat(two);
    }
    else if (digits === '3') {
        str = str.concat(three);
    }
    else if (digits === '4') {
        str = str.concat(four);
    }
    else if (digits === '5') {
        str = str.concat(five);
    }
    else if (digits === '6') {
        str = str.concat(six);
    }
    else if (digits === '7') {
        str = str.concat(seven);
    }
    else if (digits === '8') {
        str = str.concat(eight);
    }
    else if (digits === '9') {
        str = str.concat(nine);
    }
    if (digits[0] === '2') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '2') {
                for (let n = 0; n < two.length; n++) {
                    str.push(two[m] + two[n]);
                }
            }
            if (digits[1] === '3') {
                for (let n = 0; n < three.length; n++) {
                    str.push(two[m] + three[n]);
                }
            }
            if (digits[1] === '4') {
                for (let n = 0; n < four.length; n++) {
                    str.push(two[m] + four[n]);
                }
            }
            if (digits[1] === '5') {
                for (let n = 0; n < five.length; n++) {
                    str.push(two[m] + five[n]);
                }
            }
            if (digits[1] === '6') {
                for (let n = 0; n < six.length; n++) {
                    str.push(two[m] + six[n]);
                }
            }
            if (digits[1] === '7') {
                for (let n = 0; n < seven.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + eight[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }


        }
    }
    else if (digits[0] === '3') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '3') {
                for (let n = 0; n < three.length; n++) {
                    str.push(two[m] + three[n]);
                }
            }
            if (digits[1] === '4') {
                for (let n = 0; n < four.length; n++) {
                    str.push(two[m] + four[n]);
                }
            }
            if (digits[1] === '5') {
                for (let n = 0; n < five.length; n++) {
                    str.push(two[m] + five[n]);
                }
            }
            if (digits[1] === '6') {
                for (let n = 0; n < six.length; n++) {
                    str.push(two[m] + six[n]);
                }
            }
            if (digits[1] === '7') {
                for (let n = 0; n < seven.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    else if (digits[0] === '4') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '4') {
                for (let n = 0; n < four.length; n++) {
                    str.push(two[m] + four[n]);
                }
            }
            if (digits[1] === '5') {
                for (let n = 0; n < five.length; n++) {
                    str.push(two[m] + five[n]);
                }
            }
            if (digits[1] === '6') {
                for (let n = 0; n < six.length; n++) {
                    str.push(two[m] + six[n]);
                }
            }
            if (digits[1] === '7') {
                for (let n = 0; n < seven.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + eight[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    else if (digits[0] === '5') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '5') {
                for (let n = 0; n < five.length; n++) {
                    str.push(two[m] + five[n]);
                }
            }
            if (digits[1] === '6') {
                for (let n = 0; n < six.length; n++) {
                    str.push(two[m] + six[n]);
                }
            }
            if (digits[1] === '7') {
                for (let n = 0; n < seven.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + eight[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    else if (digits[0] === '6') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '6') {
                for (let n = 0; n < six.length; n++) {
                    str.push(two[m] + six[n]);
                }
            }
            if (digits[1] === '7') {
                for (let n = 0; n < seven.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + eight[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    else if (digits[0] === '7') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '7') {
                for (let n = 0; n < seven.length; n++) {
                    str.push(two[m] + seven[n]);
                }
            }
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + eight[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    else if (digits[0] === '8') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '8') {
                for (let n = 0; n < eight.length; n++) {
                    str.push(two[m] + eight[n]);
                }
            }
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    else if (digits[0] === '9') {
        for (let m = 0; m < two.length; m++) {
            if (digits[1] === '9') {
                for (let n = 0; n < nine.length; n++) {
                    str.push(two[m] + nine[n]);
                }
            }
        }
    }
    console.log(str);
    return str;
};

// Measure 2:
/*
Input: "23"
Process:    k = 0: letters[0] = 'a'. tempResult.push("e" + 'a') -> tempResult = ["a"]
            k = 1: letters[1] = 'b'. tempResult.push("e" + 'b') -> tempResult = ["a", "b"]
            k = 2: letters[2] = 'c'. tempResult.push("e" + 'c') -> tempResult = ["a", "b", "c"] 
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits || digits.length === 0) {
        return [];
    }
    const phoneMap = [
        "abc", "def", "ghi",
        "jkl", "mno", "pqrs",
        "tuv", "wxyz"
    ];
    let result = [""];
    for (let i = 0; i < digits.length; i++) {
        const currentDigit = digits[i];
        const letters = phoneMap[parseInt(currentDigit) - 2];
        const tempResult = [];
        for (let j = 0; j < result.length; j++) {
            const existingCombination = result[j];
            for (let k = 0; k < letters.length; k++) {
                tempResult.push(existingCombination + letters[k]);
            }
        }
        result = tempResult;
    }
    console.log(result);
    return result;
};


letterCombinations("23");