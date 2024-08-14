
export function extractDelimiter(input: string): { delimiter: RegExp, numbersSection: string } {
    if (input.startsWith("//")) {
        const delimiterEndIndex = input.indexOf("\n");
        const customDelimiter = input.substring(2, delimiterEndIndex);
        const numbersSection = input.substring(delimiterEndIndex + 1);
        return { delimiter: new RegExp(customDelimiter), numbersSection };
    }

    return { delimiter: /,|\n/, numbersSection: input };
}

export function splitNumbers(numbers: string, delimiter: RegExp): number[] {
    const numList: number[] = [];
    let currentNumber = '';

    for (let i = 0; i < numbers.length; i++) {
        const char = numbers[i];

        // If the current character matches the delimiter, process the accumulated number
        if (char.match(delimiter)) {
            if (currentNumber.trim() !== '') {
                const num = parseInt(currentNumber.trim(), 10);
                if (!isNaN(num)) {
                    numList.push(num);
                }
            }
            currentNumber = '';
        } else {
            // Accumulate characters to form the current number
            currentNumber += char;
        }
    }

    // Handle the last number if there's any left after the loop
    if (currentNumber.trim() !== '') {
        const num = parseInt(currentNumber.trim(), 10);
        if (!isNaN(num)) {
            numList.push(num);
        }
    }

    return numList;
}

export function validateNoNegatives(numbers: number[]): void {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}

export function sumNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}
