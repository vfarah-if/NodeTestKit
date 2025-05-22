## 🧪 Add Kata

This kata provides a simple implementation and test suite for a `sum` function that calculates the total of any number of numeric arguments.

### 🔍 Functionality

The `add` function supports:

- Summing two positive numbers
- Handling negative numbers and zero
- Summing floating-point numbers
- Summing multiple values via variadic arguments

### ✅ Test Coverage

The test suite verifies:

- Basic pairwise sums (e.g. `add(1, 2) === 3`)
- Edge cases with negative values and zero
- Decimal handling (e.g. `add(1.5, 2.5) === 4`)
- Multiple input values using `test.each`

### 🧠 Purpose

This kata is ideal for:

- Practising fundamentals of test-driven development (TDD)
- Understanding how to use `test.each` in Jest
- Demonstrating clean and expressive test cases

### 📦 Example Usage

```ts
add(1, 2, 3, 4); // ➞ 10
add(-1, 1); // ➞ 0
add(); // ➞ 0
```

## Summary

This branch will contain step by step example of how I would have done the sum kata, just as an example in the simplest and quickest form, see commit history for more.
