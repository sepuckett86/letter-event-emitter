const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  constructor(arr) {
    super();
    this.arr = arr;
  }

  read(str) {
    str.split('').forEach((letter, offset) => {
      this.emit('item', {
        letter,
        offset
      });
      if(this.arr) {
        if(this.arr.includes(letter)) {
          this.emit(letter, letter + ' found');
        }
      }
    });
    this.emit('end');
  }
}

module.exports = LetterEmitter;
