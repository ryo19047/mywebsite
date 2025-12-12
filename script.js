document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('[data-typing-text]');
  const speed = 40; // ms per character
  targets.forEach((el) => {
    const text = el.getAttribute('data-typing-text') || el.textContent || '';
    const trimmed = text.trim();
    el.textContent = '';
    let idx = 0;
    const tick = () => {
      if (idx <= trimmed.length) {
        el.textContent = trimmed.slice(0, idx);
        idx += 1;
        window.requestAnimationFrame(() => setTimeout(tick, speed));
      }
    };
    tick();
  });
});
