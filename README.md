# String Calculator TDD Kata

## Overview

This project is a simple implementation of the **String Calculator** kata using **Test-Driven Development (TDD)**. The purpose of this exercise is to demonstrate software craftsmanship by writing clean, well-tested code using TDD principles.

## Features

- Perform calculations (addition, multiplication) on numbers provided in a string format.
- Support for custom delimiters (commas, new lines, *, +, etc.).
- Automatically detect and apply operations based on the delimiter.
- Handle negative numbers by throwing an exception listing all negatives.
- Support for an unknown amount of numbers.
- Modular and extendable design for easy addition of new features.

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MayankAgrawal94/string-calculator.git
   cd string-calculator
   ```

1. **Install dependencies:**

    ```bash
    npm install
    ```

1. **Build the project:**

    ```bash
    npm run build
    ```

1. **Run the tests:**

    ```bash
    npm test
    ```

## Usage

To use the `StringCalculator` class in your project, you can import it as follows:

```typescript
import { StringCalculator } from './src/StringCalculator';

const calculator = new StringCalculator();
const result = calculator.add('1,2,3');
console.log(result); // Outputs: 6
```

## Project Structure

- **`src/StringCalculator.ts`**: Contains the implementation of the String Calculator.
- **`src/helpers/stringCalculator.helper.ts`**: Contains helper functions used by the `StringCalculator` class to handle tasks such as parsing delimiters, splitting numbers, validating inputs, and summing values.
- **`test/StringCalculator.test.ts`**: Contains the unit tests for the String Calculator.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Node.js project configuration file.

## Directory Structure

```bash
/string-calculator
│
├── src
│   ├── enums
│   │   └── operation.enum.ts
│   ├── helpers
│   │   └── stringCalculator.helper.ts
│   └── StringCalculator.ts
│
├── test
│   └── StringCalculator.test.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## TDD Approach

This project was developed following the Test-Driven Development (TDD) approach:

1. **Red**: Write a test that fails.
2. **Green**: Write the minimum amount of code required to pass the test.
3. **Refactor**: Refactor the code while ensuring that all tests still pass.

## Example Test Cases

- **Empty string**: `""` should return `0`.
- **Single number**: `"1"` should return `1`.
- **Two numbers**: `"1,2"` should return `3`.
- **Multiple numbers**: `"1,2,3,4"` should return `10`.
- **New lines between numbers**: `"1\n2,3"` should return `6`.
- **Custom delimiter**: `"//;\n1;2"` should return `3`.
- **Negative numbers**: `"1,-2,3,-4"` should throw an error with message `"Negative numbers not allowed: -2, -4"`.
- **Multiply numbers**: `"//\*\n1*2*4"` should return `8`.

## Future Enhancements

- Add support for subtraction and division operations.
- Allow multiple custom delimiters in a single input string.
- Implement support for operations within parentheses.
- Improve error handling and edge case management.
- Add support for decimal (floating-point) numbers.
- Include advanced mathematical functions (e.g., exponentiation).
- Develop an interactive command-line interface (CLI).
- Create a web-based interface for direct user interaction.