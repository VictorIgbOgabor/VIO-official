// =========================================
// VIO OFFICIAL — Main JavaScript (Robust)
// =========================================

(function () {
  'use strict';

  function $(selector, context) { return (context || document).querySelector(selector); }
  function $$(selector, context) { return Array.from((context || document).querySelectorAll(selector)); }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  // Nav scroll
  function initNavScroll() {
    var nav = $('.nav');
    if (!nav) return;
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 60); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  function initMobileMenu() {
    var burger = $('.nav__burger');
    var menu = $('.nav__mobile');
    var closeBtn = $('.nav__mobile-close');
    if (!burger || !menu) return;

    function openMenu() { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeMenu() { menu.classList.remove('open'); document.body.style.overflow = ''; }

    burger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    menu.addEventListener('click', function (e) { if (e.target === menu) closeMenu(); });
    $$('a', menu).forEach(function (l) { l.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  // Scroll reveal with IntersectionObserver fallback
  function initReveal() {
    var els = $$('.reveal');
    if (!els.length) return;
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { obs.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // Active nav link
  function initActiveNav() {
    var current = (window.location.pathname.split('/').pop() || 'index.html');
    $$('.nav__links a, .nav__mobile a').forEach(function (link) {
      var href = (link.getAttribute('href') || '').split('/').pop();
      if (href === current) link.classList.add('active');
    });
  }

  // Hero parallax
  function initParallax() {
    var el = $('.hero__portrait');
    if (!el) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          el.style.transform = 'translateY(' + (window.scrollY * 0.15) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Ticker clone for infinite scroll
  function initTicker() {
    var el = $('.ticker__inner');
    if (!el || el.dataset.cloned) return;
    el.innerHTML += el.innerHTML;
    el.dataset.cloned = 'true';
  }

  // Contact form
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      var btn = form.querySelector('button[type="submit"]');
      if (action.indexOf('your-form-id') !== -1) {
        e.preventDefault();
        if (btn) {
          btn.textContent = 'Connect Formspree to Enable';
          btn.style.background = '#1a4a6b';
          setTimeout(function () { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
        }
        return;
      }
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
    });
  }

  // Portfolio filter
  function initPortfolioFilter() {
    var btns = $$('.filter-btn');
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  }

  // Smooth anchor scroll
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var offset = ($('.nav') ? $('.nav').offsetHeight : 80) + 20;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      });
    });
  }

  onReady(function () {
    initNavScroll();
    initMobileMenu();
    initReveal();
    initActiveNav();
    initParallax();
    initTicker();
    initContactForm();
    initPortfolioFilter();
    initSmoothScroll();
  });

})();
