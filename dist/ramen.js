/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sprite = __webpack_require__(4);

var _sprite2 = _interopRequireDefault(_sprite);

var _gameLoop = __webpack_require__(2);

var _gameLoop2 = _interopRequireDefault(_gameLoop);

var _keys = __webpack_require__(3);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ramen = (0, _sprite2.default)({
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
      numFrames: 10
    },

    down: {
      offsetX: 3,
      offsetY: 0,
      numFrames: 10
    },

    left: {
      offsetX: 3,
      offsetY: 1530,
      numFrames: 10
    },

    right: {
      offsetX: 3,
      offsetY: 1530,
      numFrames: 10,
      flip: true
    }
  }
});

document.body.appendChild(ramen.el);

(0, _gameLoop2.default)(30, function () {
  ramen.animate(_keys2.default);
});

// Add live-reload to make development a bit easier...
if (location.hostname === 'localhost') {
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':8080/livereload.js?snipver=2"></' + 'script>');
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// Creates a runAnimation function

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animator;
function animator(el, definition) {
  var scale = definition.scale;
  var width = definition.width;

  var currentAnimation = void 0;
  var frame = 0;

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// Runs the main game loop at the specified frames per second

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gameLoop;
function gameLoop(fps, fn) {
  var fpms = 1000 / fps;

  function loop() {
    var now = Date.now();

    fn();
    setTimeout(loop, Math.max(5, fpms - (Date.now() - now)));
  }

  loop();
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = {
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
};

document.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true;
});

document.addEventListener('keyup', function (e) {
  keys[e.keyCode] = false;
});

exports.default = keys;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sprite;

var _animator = __webpack_require__(1);

var _animator2 = _interopRequireDefault(_animator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creates a state manager for an animated sprite
function sprite(definition) {
  var pos = {
    top: definition.top,
    left: definition.left
  };

  var animations = definition.animations;

  var el = createSpriteEl(definition);

  var runAnimation = (0, _animator2.default)(el, definition);

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

  function _animate(keys) {
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

    animate: function animate(keys) {
      move(keys);
      _animate(keys);
    }
  };
}

function createSpriteEl(definition) {
  var el = document.createElement('div');

  el.className = 'ramen';
  el.style.background = 'url(' + definition.url + ')';
  el.style.transform = 'scale(' + definition.scale + ')';
  el.style.width = definition.width + 'px';
  el.style.height = definition.height + 'px';
  el.style.top = definition.top + 'px';
  el.style.left = definition.left + 'px';

  return el;
}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);
//# sourceMappingURL=ramen.js.map