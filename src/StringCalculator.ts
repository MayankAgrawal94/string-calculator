import { 
    extractDelimiter, 
    splitNumbers, 
    validateNoNegatives, 
    sumNumbers 
} from './helpers/stringCalculator.helper';

export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        const { delimiter, numbersSection } = extractDelimiter(numbers);
        const numList = splitNumbers(numbersSection, delimiter);
        validateNoNegatives(numList);

        return sumNumbers(numList);
    }
}
