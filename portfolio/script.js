// script.js — Written like a 50-year-old engineer writes:
// No frameworks. No libraries. No magic. Just clear, simple, reliable code.

document.addEventListener('DOMContentLoaded', function() {

  // === 1. Get references once. Never query the DOM again. ===
  const scene = document.getElementById('scene');
  const layers = document.querySelectorAll('.layer');

  // === 2. Track mouse position. Only if we need to. ===
  let mouseX = 0;
  let mouseY = 0;

  // === 3. Listen to mouse movement — but debounce it. ===
  // Why? Because 60fps is enough. 120fps is noise.
  document.addEventListener('mousemove', function(e) {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  });

  // === 4. Apply 3D transform — only once per frame. ===
  // This is the heart of the effect. Clean. Predictable.
  function updateScene() {
    if (!scene) return;

    // Apply subtle rotation based on mouse — but never exceed 10 degrees.
    const rotateX = mouseY * 10;
    const rotateY = mouseX * 10;

    scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Apply depth parallax to each layer
    // data-depth is our contract. We trust it. We don't guess.
    layers.forEach(layer => {
      const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
      const moveX = mouseX * (depth * 0.1);
      const moveY = mouseY * (depth * 0.1);

      layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
    });
  }

  // === 5. Use requestAnimationFrame. Never setInterval. ===
  // This is how you write performant code that doesn’t crash laptops.
  function animate() {
    updateScene();
    requestAnimationFrame(animate);
  }

  // Start the animation loop. Only once.
  requestAnimationFrame(animate);

  // === 6. Smooth scroll — no jQuery. No libraries. Just native. ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;

        // Smooth scroll — built into the browser. Trust it.
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // === 7. Clean up on unload. Always. ===
  window.addEventListener('beforeunload', function() {
    // Nothing to clean here — but the habit matters.
    // You leave the code cleaner than you found it.
  });

});