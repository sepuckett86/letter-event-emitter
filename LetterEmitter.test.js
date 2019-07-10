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
      expect(str).toContain(data.letter);
      expect(data.offset).toBeLessThan(str.length);
      expect(data.offset).toBeGreaterThanOrEqual(0);
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
      expect(mockCallback).toHaveBeenCalledTimes(str.length);
      done();
    });
    letterEmitter.read(str);
  });

  it('accepts array in instantiation and emits unique action when letters in array match', done => {
    const str = 'hello there';
    const arr = ['h', 'l'];
    const newLetterEmitter = new LetterEmitter(arr);
    const mockCallback = jest.fn();
    arr.forEach(letter => {
      newLetterEmitter.on(letter, (data) => {
        expect(data).toContain(`${letter} found`);
        mockCallback();
      });
    });

    newLetterEmitter.once('end', () => {
      expect(mockCallback).toHaveBeenCalledTimes(4);
      done();
    });

    newLetterEmitter.read(str);
  });
});

