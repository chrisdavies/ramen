'use strict';

import animator from './animator';

// Creates a state manager for an animated sprite
export default function sprite(definition) {
  const pos = {
    top: definition.top,
    left: definition.left,
  };

  const animations = definition.animations;

  const el = createSpriteEl(definition);

  const runAnimation = animator(el, definition);

  function move(keys) {
    if (keys.down) {
      el.style.top = (pos.top = pos.top + definition.speed) + 'px';
    } else if (keys.up) {
      el.style.top = (pos.top = pos.top - definition.speed) + 'px';
    }

    if (keys.right) {
      el.style.left = (pos.left = pos.left + definition.speed) + 'px';
    } else if (keys.left) {
      el.style.left = (pos.left = pos.left - definition.speed) + 'px';
    }
  }

  function animate(keys) {
    if (keys.down) {
      runAnimation(animations.down);
    } else if (keys.up) {
      runAnimation(animations.up);
    } else if (keys.right) {
      runAnimation(animations.right);
    } else if (keys.left) {
      runAnimation(animations.left);
    }
  }

  return {
    el: el,

    animate(keys) {
      move(keys);
      animate(keys);
    }
  };
}

function createSpriteEl(definition) {
  const el = document.createElement('div');

  el.className = 'ramen';
  el.style.background = 'url(' + definition.url + ')';
  el.style.transform = 'scale(' + definition.scale + ')';
  el.style.width = definition.width + 'px';
  el.style.height = definition.height + 'px';
  el.style.top = definition.top + 'px';
  el.style.left = definition.left + 'px';

  return el;
}
