'use strict';

const keys = {
  get up() {
    return keys[38];
  },
  get down() {
    return keys[40];
  },
  get left() {
    return keys[37];
  },
  get right() {
    return keys[39];
  }
}

document.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true;
});

document.addEventListener('keyup', function (e) {
  keys[e.keyCode] = false;
});

export default keys;
