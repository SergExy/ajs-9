import ErrorRepository from '../ErrorRepository';

test('test error code', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(200)).toBe('error 200');
});

test('test error code not found', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(250)).toBe('Unknown error');
});
