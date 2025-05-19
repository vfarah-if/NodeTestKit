import { add } from './add';

describe('add should', () => {
  test('sum two numbers', () => {
    const actual = add(1, 2);

    expect(actual).toBe(3);
  });
});
