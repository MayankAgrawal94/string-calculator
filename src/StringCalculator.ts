export class StringCalculator {
    private static readonly DEFAULT_DELIMITERS = /,|\n/;

    add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        const { delimiter, numbersSection } = this.extractDelimiter(numbers);
        const numList = this.splitNumbers(numbersSection, delimiter);
        this.validateNoNegatives(numList);

        return this.sumNumbers(numList);
    }

    private extractDelimiter(input: string): { delimiter: RegExp, numbersSection: string } {
        if (input.startsWith("//")) {
            const delimiterEndIndex = input.indexOf("\n");
            const customDelimiter = input.substring(2, delimiterEndIndex);
            const numbersSection = input.substring(delimiterEndIndex + 1);
            return { delimiter: new RegExp(customDelimiter), numbersSection };
        }

        return { delimiter: StringCalculator.DEFAULT_DELIMITERS, numbersSection: input };
    }

    private splitNumbers(numbers: string, delimiter: RegExp): number[] {
        const numList: number[] = [];  // Array to store parsed numbers
        let currentNumber = '';        // String to accumulate characters for the current number
    
        // Loop through each character in the input string
        for (let i = 0; i < numbers.length; i++) {
            const char = numbers[i];
    
            // If the current character matches the delimiter, process the accumulated number
            if (char.match(delimiter)) {
                if (currentNumber.trim() !== '') {
                    const num = parseInt(currentNumber.trim(), 10);
                    if (!isNaN(num)) {
                        numList.push(num);  // Add the valid number to the list
                    }
                }
                currentNumber = '';  // Reset currentNumber for the next number
            } else {
                // Accumulate characters to form the current number
                currentNumber += char;
            }
        }
    
        // After the loop, handle the last number if there's any left
        if (currentNumber.trim() !== '') {
            const num = parseInt(currentNumber.trim(), 10);
            if (!isNaN(num)) {
                numList.push(num);  // Add the valid number to the list
            }
        }
    
        return numList;  // Return the final list of numbers
    }
    

    private validateNoNegatives(numbers: number[]): void {
        const negatives = numbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }
    }

    private sumNumbers(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}
