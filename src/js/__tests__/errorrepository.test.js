import ErrorRepository, { ERROR_SEARCH_KEY } from '../app';

test('Наличие ошибки', () => {
  const errorsOfInput = new ErrorRepository();
  const received = errorsOfInput.translate(100);
  const expected = 'Code - 100: Continue.';
  expect(received).toEqual(expected);
});

test('Наличие ошибки', () => {
  const errorsOfInput = new ErrorRepository();
  const received = errorsOfInput.translate(99);
  const expected = ERROR_SEARCH_KEY;
  expect(received).toEqual(expected);
});
