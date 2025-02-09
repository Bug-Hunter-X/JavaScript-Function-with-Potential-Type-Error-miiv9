# JavaScript Function with Potential Type Error

This repository demonstrates a common JavaScript error: type errors caused by unexpected input types. The `foo` function adds two numbers, but it doesn't explicitly check the input types. If either `a` or `b` is not a number, a `TypeError` will be thrown.

## Bug
The bug lies in the `foo` function. The function adds two numbers but doesn't handle cases where the input may not be a number.

## Solution
The solution involves adding input validation to check if the inputs are numbers before performing the addition.  If not, a more appropriate return value (e.g., null, NaN, or an error message) is used instead of causing a runtime error.