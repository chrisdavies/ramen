'use strict';

// Runs the main game loop at the specified frames per second
export default function gameLoop(fps, fn) {
  const fpms = 1000 / fps;

  function loop() {
    const now = Date.now();

    fn();
    setTimeout(loop, Math.max(5, fpms - (Date.now() - now)));
  }

  loop();
}
