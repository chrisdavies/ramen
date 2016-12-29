'use strict';

import sprite from './sprite';
import gameLoop from './game-loop';
import keys from './keys';

const ramen = sprite({
  top: 100,
  left: 100,
  height: 30,
  width: 30,
  url: 'img/sprite.png',
  scale: 3,
  speed: 10,
  animations: {
    up: {
      offsetX: 3,
      offsetY: 779,
      numFrames: 10,
    },

    down: {
      offsetX: 3,
      offsetY: 0,
      numFrames: 10,
    },

    left: {
      offsetX: 3,
      offsetY: 1530,
      numFrames: 10,
    },

    right: {
      offsetX: 3,
      offsetY: 1530,
      numFrames: 10,
      flip: true,
    },
  },
});

document.body.appendChild(ramen.el);

gameLoop(30, function () {
  ramen.animate(keys);
});

// Add live-reload to make development a bit easier...
if (location.hostname === 'localhost') {
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':8080/livereload.js?snipver=2"></' + 'script>');
}