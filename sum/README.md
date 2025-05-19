## 🧪 Sum Kata

This kata provides a simple implementation and test suite for a `sum` function that calculates the total of any number of numeric arguments.

### 🔍 Functionality

The `sum` function supports:

- Summing two positive numbers
- Handling negative numbers and zero
- Summing floating-point numbers
- Summing multiple values via variadic arguments

### ✅ Test Coverage

The test suite verifies:

- Basic pairwise sums (e.g. `sum(1, 2) === 3`)
- Edge cases with negative values and zero
- Decimal handling (e.g. `sum(1.5, 2.5) === 4`)
- Multiple input values using `test.each`

### 🧠 Purpose

This kata is ideal for:

- Practising fundamentals of test-driven development (TDD)
- Understanding how to use `test.each` in Jest
- Demonstrating clean and expressive test cases

### 📦 Example Usage

```ts
sum(1, 2, 3, 4); // ➞ 10
sum(-1, 1); // ➞ 0
sum(); // ➞ 0
```
