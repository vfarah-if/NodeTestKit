import add from './add';

describe('add should', () => {
  test.each([
    { values: [1, 2], expected: 3 },
    { values: [1, 2, 3], expected: 6 },
    { values: [-1, -2], expected: -3 },
    { values: [0, 0], expected: 0 },
    { values: [1, 2, 3, 4, 5], expected: 15 },
    { values: [1.5, 2.5], expected: 4 },
  ])('sum $values to equal $expected', ({ values, expected }) => {
    const actual = add(...values);

    expect(actual).toBe(expected);
  });
});
