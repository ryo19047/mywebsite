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
