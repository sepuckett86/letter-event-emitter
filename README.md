# letter-event-emitter

## Letter EventEmitter class

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/07_events/exercise-3)

* Create a `LetterEmitter` class in `LetterEmitter.js`
  * `LetterEmitter` should `extends` `EventEmitter`
* Write a `read(str)` method that takes a string
  * read should `split` the string into letters
  * `forEach` letter it should emit an event
    * the event should include the data `{ letter: 'b', offset: 20 }`
  * once it is done it should emit an "end" event
  * **START WITH TESTS**
* TEST
  * create a new `LetterEmitter` `beforeEach` test
  * `it` splits a string and emits an event for each letter
    * use `on` to subscribe to letter events
    * count the number of times the `on` callback is called
      * BONUS/HINT: use `jest.fn()`
    * use `once` to subscribe to the end event
      * what's the difference between `on` and `once`?
      * `once` the end event fires call `done`
    * invoke the `letterEmitter.read` method
* BONUS
  * take an array of letters in the `LetterEmitter` constructor
  * fire a unique event every time a letter in the array passed to the constructor is seen
    * e.g.
```js
  const letterEmitter = new LetterEmitter(['a', 'b']);
  letterEmitter.on('a', () => console.log('a found'));
  letterEmitter.on('b', () => console.log('b found'));
  letterEmitter.on('letter', () => console.log('maybe a. maybe b. maybe something else'));
```