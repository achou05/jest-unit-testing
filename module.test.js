import mut from './module.js'; // MUT = Module Under Test

test('sum adds numbers correctly', () => {
  const got = mut.sum(10, 5);
  const expected = 15;
  expect(got).toBe(expected);
});

test('div divides two positive numbers correctly', () => {
  const got = mut.div(10, 2);
  const expected = 5;
  expect(got).toBe(expected);
});

test('div handles division by zero', () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity); 
});

test('div handles negative numbers', () => {
  const got = mut.div(-6, 3);
  const expected = -2;
  expect(got).toBe(expected);
});

// ----- containsNumbers() -----
test('containsNumbers returns true if text contains a number', () => {
  const got = mut.containsNumbers('Hello123');
  expect(got).toBe(true);
});

test('containsNumbers returns false if text has no numbers', () => {
  const got = mut.containsNumbers('Hello');
  expect(got).toBe(false);
});

test('containsNumbers catches single digit', () => {
  const got = mut.containsNumbers('a1b');
  expect(got).toBe(true);
});

test('containsNumbers returns false for empty string', () => {
  const got = mut.containsNumbers('');
  expect(got).toBe(false);
});

