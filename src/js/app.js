const ERROR_SEARCH_KEY = 'Unknown error';

class ErrorRepository {
  constructor() {
    this.errorRepository = new Map();
    this.errorRepository.set(100, 'Code - 100: Continue.');
    this.errorRepository.set(101, 'Code - 101: Switching Protocols.');
    this.errorRepository.set(105, 'Code - 105: Name Not Resolved.');
  }

  translate(code) {
    if (this.errorRepository.has(code)) {
      return this.errorRepository.get(code);
    }
    return ERROR_SEARCH_KEY;
  }
}

export default ErrorRepository;
export { ERROR_SEARCH_KEY };
