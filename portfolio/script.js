document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('.scene');
  const layers = document.querySelectorAll('.layer');

  // Add subtle 3D movement based on mouse position
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    // Apply rotation to scene
    scene.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;

    // Apply depth parallax to layers
    layers.forEach((layer, index) => {
      const depth = [0, -200, -400, -600, -800][index] || 0;
      const moveX = x * (depth * 0.1);
      const moveY = y * (depth * 0.1);
      layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
    });
  });

  // Reset on mouse leave
  document.addEventListener('mouseleave', () => {
    scene.style.transform = 'rotateX(0) rotateY(0)';
    layers.forEach(layer => {
      layer.style.transform = '';
    });
  });

  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});