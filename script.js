document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('[data-typing-text]');
  const typeSpeed = 60; // ms per character
  const deleteSpeed = 30;
  const pauseAfterType = 1400;
  const pauseAfterDelete = 500;

  targets.forEach((el) => {
    const text = (el.getAttribute('data-typing-text') || el.textContent || '').trim();
    let idx = 0;
    let direction = 'type';

    const step = () => {
      if (direction === 'type') {
        el.textContent = text.slice(0, idx);
        el.classList.add('typing-active');
        if (idx < text.length) {
          idx += 1;
          window.requestAnimationFrame(() => setTimeout(step, typeSpeed));
        } else {
          el.classList.remove('typing-active');
          setTimeout(() => {
            direction = 'delete';
            window.requestAnimationFrame(() => setTimeout(step, deleteSpeed));
          }, pauseAfterType);
        }
      } else {
        el.textContent = text.slice(0, idx);
        if (idx > 0) {
          idx -= 1;
          window.requestAnimationFrame(() => setTimeout(step, deleteSpeed));
        } else {
          setTimeout(() => {
            direction = 'type';
            window.requestAnimationFrame(() => setTimeout(step, typeSpeed));
          }, pauseAfterDelete);
        }
      }
    };

    step();
  });
});

// p5.js particle network
const particleConfig = {
  count: 90,
  maxSpeed: 1.5,
  linkDistance: 140,
  particleSize: 3,
};

let particles = [];

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('bg-canvas');
  canvas.addClass('p5Canvas');
  for (let i = 0; i < particleConfig.count; i += 1) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-particleConfig.maxSpeed, particleConfig.maxSpeed),
      vy: random(-particleConfig.maxSpeed, particleConfig.maxSpeed),
    });
  }
  strokeWeight(1);
  noFill();
}

function draw() {
  clear();
  // particle movement
  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    // bounce from edges
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    // draw particle
    stroke(255, 230, 180, 180);
    fill(255, 230, 180, 180);
    circle(p.x, p.y, particleConfig.particleSize);
  }

  // draw links
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const p1 = particles[i];
      const p2 = particles[j];
      const d = dist(p1.x, p1.y, p2.x, p2.y);
      if (d < particleConfig.linkDistance) {
        const alpha = map(d, 0, particleConfig.linkDistance, 200, 0);
        stroke(255, 255, 255, alpha);
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
