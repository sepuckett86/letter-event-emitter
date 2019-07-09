const LetterEmitter = require('./LetterEmitter');

describe('Letter Emitter', () => {
  let letterEmitter;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('emits data in format { letter: "b", offset: 20 }', done => {
    const str = 'hello there';
    letterEmitter.on('item', data => {
      expect(data).toEqual(expect.objectContaining({
        letter: expect.any(String),
        offset: expect.any(Number),
      }));
    });
    letterEmitter.once('end', done);
    letterEmitter.read(str);
  });

  it('emits the correct number of times (for each letter)', done => {
    const str = 'hello there';
    const mockCallback = jest.fn();
    letterEmitter.on('item', () => {
      mockCallback();
    });
    letterEmitter.once('end', () => {
      expect(mockCallback.mock.calls.length).toBe(str.length);
      done();
    });
    letterEmitter.read(str);
  });

  it('accepts array in instantiation and emits aert action when letters in array match', done => {
    const str = 'hello there';
    const newLetterEmitter = new LetterEmitter(['h', 'l']);
    newLetterEmitter.on('alert', (data) => {
      expect(data).toContain('found');
    });
    newLetterEmitter.once('end', done);
    newLetterEmitter.read(str);
  });
});

