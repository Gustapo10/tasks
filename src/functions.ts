/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const Celsius: GLfloat = (temperature - 32) * (5 / 9);
    return Celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let x, y, z: GLfloat;
    if (first > 0) {
        x = first;
    } else {
        x = 0;
    }
    if (second > 0) {
        y = second;
    } else {
        y = 0;
    }
    if (third > 0) {
        z = third;
    } else {
        z = 0;
    }
    const add: GLfloat = x + y + z;
    return add;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const yell: string = message.toUpperCase() + "!";
    return yell;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return Boolean(message.charAt(message.length - 1) === "?");
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() === "yes") {
        return true;
    }
    if (word.toLowerCase() === "no") {
        return false;
    } else {
        return null;
    }
}
