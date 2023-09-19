/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return numbers;
    } else if (numbers.length == 1) {
        const numbers2 = [...numbers, numbers[0]];
        return numbers2;
    } else {
        const firLas = numbers.filter(
            (number: number): boolean =>
                number === numbers[0] || number === numbers[numbers.length - 1]
        );
        return firLas;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripnums = numbers.map((number1: number): number => 3 * number1);
    return tripnums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const s2i = numbers.map((number1: string): number => Number(number1));
    const s2iF = s2i.map((number2: number): number =>
        Number.isNaN(number2) ? (number2 = 0) : number2
    );
    return s2iF;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const broke_ahhh = amounts.map((string: string): string =>
        string.includes("$") ? (string = string.slice(1)) : string
    );
    const dConvert = stringsToIntegers(broke_ahhh);
    return dConvert;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const screamShout = messages.map((string1: string): string =>
        string1.charAt(string1.length - 1) === "!"
            ? string1.toUpperCase()
            : string1
    );
    const noQ = screamShout.filter(
        (string2: string): boolean => !string2.includes("?")
    );
    return noQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const compactW = words.filter(
        (string3: string): boolean => string3.length < 4
    );
    return compactW.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const r = "red";
    const b = "blue";
    const g = "green";
    if (colors.length == 0) {
        return true;
    } else {
        const rgb = colors.every(
            (string4: string): boolean =>
                string4 == r || string4 == b || string4 == g
        );
        return rgb;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (sum1: number, nextAdd: number) => sum1 + nextAdd,
        0
    );
    const addition = addends.join("+");
    return sum + "=" + addition;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNeg = values.findIndex((neg: number) => neg < 0);
    const begR = [...values];

    if (firstNeg !== -1) {
        const sum = values
            .slice(0, firstNeg)
            .reduce((tot: number, nextAdd: number) => tot + nextAdd, 0);
        begR.splice(firstNeg + 1, 0, sum);
        //console.log(begR);
        return begR;
    } else {
        const negStop = values.reduce(
            (sum2: number, nextAdd1: number) => sum2 + nextAdd1,
            0
        );
        return [...values, negStop];
    }
}
