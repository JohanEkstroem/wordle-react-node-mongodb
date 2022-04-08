import compareStrings from './compare.js';

test('compare two matching chars', () => {
  const result = compareStrings('a', 'a');
  expect(result).toEqual([{ letter: 'A', result: 'correct' }]);
});

test('compare two mismatching chars', () => {
  const result = compareStrings('a', 'b');
  expect(result).toEqual([{ letter: 'A', result: 'incorrect' }]);
});

test('compare 3 chars and expect result.length to be 3', () => {
  const result = compareStrings('foo', 'bar');
  expect(result.length).toBe(3);
});

test('compare input and gameString, expect chars to incorrect, misplaced or correct', () => {
  const input = 'hallå'.toUpperCase();
  const gameString = 'cykla'.toUpperCase();
  const output = compareStrings(input, gameString);
  const result = [
    {
      letter: 'H',
      result: 'incorrect',
    },
    {
      letter: 'A',
      result: 'misplaced',
    },
    {
      letter: 'L',
      result: 'incorrect',
    },
    {
      letter: 'L',
      result: 'correct',
    },
    {
      letter: 'Å',
      result: 'incorrect',
    },
  ];
  expect(output).toEqual(result);
});
