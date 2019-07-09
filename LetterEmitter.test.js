const LetterEmitter = require('./LetterEmitter');

describe('Letter Emitter', () => {
  it('emits an event for each letter with data in format { letter: "b", offset: 20 }', done => {
    const letterEmitter = new LetterEmitter();
    const str = 'hello there';
    letterEmitter.on('item', data => {
      expect(data).toEqual(expect.objectContaining({
        letter: expect.any(String),
        offset: expect.any(Number),
      }));
    });
    letterEmitter.on('end', done);
    letterEmitter.read(str);
  });
});

