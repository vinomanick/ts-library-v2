import { beforeEach, afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => {
  console.log('Inside global beforeAll');
  // Add your global beforeAll logics
});

beforeEach(() => {
  console.log('Inside global beforeEach');
  // Add your globalbeforeEach logics
});

afterAll(() => {
  console.log('Inside global afterAll');

  // Add your global afterAll logics
});

afterEach(() => {
  console.log('Inside global afterEach');

  // Add your global afterEach logics
});
