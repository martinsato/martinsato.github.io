/* ============================================
   Martin Sato — Personal Website Scripts
   ============================================ */

// Abstract toggle on publication cards
function toggleAbstract(btn) {
  btn.classList.toggle('open');
  var wrap = btn.nextElementSibling;
  if (wrap.style.maxHeight) {
    wrap.style.maxHeight = null;
    btn.innerHTML = 'Read Abstract <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  } else {
    wrap.style.maxHeight = wrap.scrollHeight + 'px';
    btn.innerHTML = 'Hide Abstract <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  }
}

// Scroll-reveal animation
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function(el) {
  obs.observe(el);
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('open');
  });
});
