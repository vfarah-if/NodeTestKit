describe('add should', () => {
  test('sum two numbers', () => {
    const actual = add(1, 2);

    expect(actual).toBe(3);
  });
});

function add(arg0: number, arg1: number): number {
  return arg0 + arg1;
}
