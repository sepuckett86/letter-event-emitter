const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    str.split('').forEach((letter, offset) => {
      this.emit('item', {
        letter,
        offset
      });
    });
    this.emit('end');
  }
}

module.exports = LetterEmitter;
