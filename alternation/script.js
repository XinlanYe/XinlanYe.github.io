/*!
 * Emoji Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- https://codepen.io/tholman/full/rxJpdQ
 * -- change_cursor()
 */

(function emojiCursor() {

  var possibleEmoji = ["👀", "👁", "😡","🥺","🙂","😅","😮"]
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = {x: width/2, y: width/2};
  var particles = [];

  function init() {
    bindEvents();
    loop();
	  change_cursor();
    console.log("hi");
  }

  function change_cursor() {
    document.documentElement.style.cursor = "url('data:image/png;base64,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'), auto";
    	}

  // Bind events that are needed
  function bindEvents() {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchstart', onTouchMove);

    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  function onTouchMove(e) {
    if( e.touches.length > 0 ) {
      for( var i = 0; i < e.touches.length; i++ ) {
        addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
      }
    }
  }

  function onMouseMove(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
  }

  function addParticle(x, y, character) {
    var particle = new Particle();
    particle.init(x, y, character);
    particles.push(particle);
  }

  function updateParticles() {

    // Updated
    for( var i = 0; i < particles.length; i++ ) {
      particles[i].update();
    }

    // Remove dead particles
    for( var i = particles.length -1; i >= 0; i-- ) {
      if( particles[i].lifeSpan < 0 ) {
        particles[i].die();
        particles.splice(i, 1);
      }
    }

  }

  function loop() {
    requestAnimationFrame(loop);
    updateParticles();
  }

  /**
   * Particles
   */

  function Particle() {

    this.lifeSpan = 120; //ms
    this.initialStyles ={
      "position": "absolute",
      "display": "block",
      "pointerEvents": "none",
      "z-index": "10000000",
      "fontSize": "46px",
      "will-change": "transform"
    };

    // Init, and set properties
    this.init = function(x, y, character) {

      this.velocity = {
        x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 1
      };

      this.position = {x: x - 10, y: y - 20};

      this.element = document.createElement('span');
      this.element.innerHTML = character;
      applyProperties(this.element, this.initialStyles);
      this.update();

      document.body.appendChild(this.element);
    };

    this.update = function() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.lifeSpan--;

      this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
    }

    this.die = function() {
      this.element.parentNode.removeChild(this.element);
    }

  }

  /**
   * Utils
   */

  // Applies css `properties` to an element.
  function applyProperties( target, properties ) {
    for( var key in properties ) {
      target.style[ key ] = properties[ key ];
    }
  }

  init();
})();
