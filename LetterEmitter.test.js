const LetterEmitter = require('./LetterEmitter');

describe('Letter Emitter', () => {
  it('emits an event for each letter in a string upon call of read method', () => {
    const letterEmitter = new LetterEmitter();
    const str = 'hello there';
    letterEmitter.on('event', letter => {
      expect(str).toContain(letter);
    });
    letterEmitter.read(str);
  });
});

