import ErrorRepository from './errorrespository';

/* eslint-disable */

const errors = new ErrorRepository();
errors.set(100, 'Code - 100: Continue.');
errors.set(101, 'Code - 101: Switching Protocols.');
errors.set(105, 'Code - 105: Name Not Resolved.');
console.log(errors.keys);

/* eslint-enable */
