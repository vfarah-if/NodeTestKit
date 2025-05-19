import add from './add';

describe('add should', () => {
  test.skip('sum two numbers', () => {
    const actual = add(1, 2);

    expect(actual).toBe(3);
  });

  test.skip('sum three numbers', () => {
    const actual = add(1, 2, 3);

    expect(actual).toBe(6);
  });

  test.each([
    { values: [1, 2], expected: 3 },
    { values: [1, 2, 3], expected: 6 },
  ])('sum $values to equal $expected', ({ values, expected }) => {
    const actual = add(...values);
    expect(actual).toBe(expected);
  });
});
