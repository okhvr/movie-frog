import help from './help';

test('join words with "and"', () => {
    expect(help(1, 2)).toBe('1 and 2');
});
