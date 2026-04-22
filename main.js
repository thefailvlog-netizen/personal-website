// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) links.classList.remove('open');
  });
}

// Mark active nav link based on current page
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Email obfuscation — address assembled at click time, never in HTML source
function initEmail() {
  const el = document.getElementById('email-link');
  if (!el) return;
  const u = 'mikepacione';
  const d = 'gmail.com';
  const s = encodeURIComponent('Hey Mike');
  el.href = `mailto:${u}@${d}?subject=${s}`;
  el.textContent = `${u}@${d}`;
}
document.addEventListener('DOMContentLoaded', initEmail);
