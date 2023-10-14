class ErrorRepository {
  constructor() {
    this.repo = new Map([
      [100, 'error 100'],
      [200, 'error 200'],
      [300, 'error 300'],
      [400, 'error 400'],
      [500, 'error 500'],
    ]);
  }

  translate(code) {
    if (!(this.repo.has(code))) return 'Unknown error';
    const error = this.repo.get(code);
    return error;
  }
}

export default ErrorRepository;
