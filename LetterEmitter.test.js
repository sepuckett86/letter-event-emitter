const LetterEmitter = require('./LetterEmitter');

describe('Letter Emitter', () => {
  it('emits an event for each letter in a string upon call of read method', done => {
    const letterEmitter = new LetterEmitter();
    const str = 'hello there';
    letterEmitter.on('item', letter => {
      expect(str).toContain(letter);
    });
    letterEmitter.on('end', done);
    letterEmitter.read(str);
  });
});

