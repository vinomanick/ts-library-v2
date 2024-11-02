import { add, sub } from './main';
import { describe, expect, test } from 'vitest';

describe('Utility | Main', () => {
  test('add - should add the given two numbers', async () => {
    expect(add(4, 2)).toEqual(6);
  });

  test('sub - should subtract the given two numbers', async () => {
    expect(sub(4, 2)).toEqual(2);
  });
});
