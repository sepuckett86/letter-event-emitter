const LetterEmitter = require('./LetterEmitter');

describe('Letter Emitter', () => {
  it('does something', () => {
    const letterEmitter = new LetterEmitter();
    letterEmitter.on('event', data => {
      expect(data).toExist();
    });
  });
});

