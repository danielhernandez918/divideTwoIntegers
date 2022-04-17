// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

dividend1 = 10, divisor1 = 3
dividend2 = 7, divisor2 = -3
dividend3 = -2147483648, divisor3 = -1
var divide = function(dividend, divisor) {
    // if (dividend > 2**31) {
    //     let number = (2**31)-1;
    //     console.log("hi")
    //     return number
    // }
    let number = dividend/divisor;
    if (number >= 2**31) {
        number = (2**31)-1;
        return number
    }
    else if (number <= -(2**31)) {
        number = -(2**31);
        return number
    }
    if (number < 0) {
        number=Math.ceil(number);
    }
    else {
        number=Math.floor(number);
    }
    return number
};
console.log(divide(dividend1, divisor1));
console.log(divide(dividend2, divisor2));
console.log(divide(dividend3, divisor3));