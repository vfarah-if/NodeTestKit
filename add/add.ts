export default (...values: Array<number>): number => {
  return values.reduce((a, b) => a + b);
};
