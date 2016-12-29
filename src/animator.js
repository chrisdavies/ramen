'use strict';

// Creates a runAnimation function
export default function animator(el, definition) {
  const scale = definition.scale;
  const width = definition.width;

  let currentAnimation;
  let frame = 0;

  function nextFrame(animation) {
    el.style.backgroundPositionX = -((frame + animation.offsetX) * width) + 'px';
    frame = (frame + 1) % animation.numFrames;
  }

  return function (animation) {
    if (currentAnimation === animation) {
      return nextFrame(animation);
    }

    currentAnimation = animation;

    el.style.backgroundPositionY = -animation.offsetY + 'px';
    el.style.transform = 'scale(' + (animation.flip ? -scale : scale) + ',' + scale + ')';

    nextFrame(animation);
  };
}
