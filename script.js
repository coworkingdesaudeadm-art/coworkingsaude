/* =============================================
   COWORKING SAÚDE THERAPI — script.js
   ============================================= */

(function () {
  'use strict';

  /* ---- Font Awesome -> Inline SVG ---- */
  const inlineIcons = {
    play: '<polygon points="8,5 20,12 8,19"></polygon>',
    whatsapp: '<path d="M21 12a9 9 0 0 1-13 8l-5 1 1-5a9 9 0 1 1 17-4z"></path><path d="M9 9c0 3 4 7 7 7l2-2-1-2-2 1c-1-1-2-2-3-3l1-2-2-1-2 2z"></path>',
    star: '<path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16l-5.4 2.8 1-6.1L3.2 8.4l6.1-.9z"></path>',
    'check-circle': '<circle cx="12" cy="12" r="9"></circle><path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    'dollar-sign': '<path d="M12 3v18"></path><path d="M16.5 7.5c0-1.9-2-3.5-4.5-3.5S7.5 5.6 7.5 7.5s2 3.5 4.5 3.5 4.5 1.6 4.5 3.5-2 3.5-4.5 3.5-4.5-1.6-4.5-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    'map-pin': '<path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z"></path><circle cx="12" cy="11" r="2.5" fill="#fff"></circle>',
    users: '<path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM8 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"></path><path d="M2.5 19a5.5 5.5 0 0 1 11 0M12 19a4.5 4.5 0 0 1 9 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    couch: '<path d="M4 12h16v6h-2v-2H6v2H4v-6z"></path><path d="M6 12V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" fill="none" stroke="currentColor" stroke-width="2"></path>',
    'bell-concierge': '<path d="M4 13h16a8 8 0 0 0-16 0z"></path><path d="M2 16h20M12 7V5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    chair: '<path d="M7 11h10v5H7z"></path><path d="M8 11V8h8v3M7 16v3M17 16v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    lock: '<rect x="6" y="11" width="12" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 1 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"></path>',
    snowflake: '<path d="M12 2v20M4 6l16 12M20 6 4 18M7 12h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    'shield-halved': '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path><path d="M12 3v18" fill="none" stroke="#fff" stroke-width="2"></path>',
    expand: '<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    xmark: '<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    'chevron-left': '<path d="M15 6 9 12l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    'chevron-right': '<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    'chevron-up': '<path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    'quote-left': '<path d="M9 8H5v4h4v4H5a4 4 0 0 1 0-8h4zm10 0h-4v4h4v4h-4a4 4 0 0 1 0-8h4z"></path>',
    'graduation-cap': '<path d="M2 10l10-5 10 5-10 5z"></path><path d="M6 12v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" fill="none" stroke="currentColor" stroke-width="2"></path>',
    lightbulb: '<path d="M12 3a6 6 0 0 0-4 10c1 1 1.5 2 1.5 3h5c0-1 .5-2 1.5-3A6 6 0 0 0 12 3z"></path><path d="M10 19h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    ban: '<circle cx="12" cy="12" r="9"></circle><path d="M7 7l10 10" fill="none" stroke="#fff" stroke-width="2"></path>',
    'clock-rotate-left': '<path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M4 11a8 8 0 1 0 3-6" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M2 5v4h4" fill="none" stroke="currentColor" stroke-width="2"></path>',
    gem: '<path d="M6 8h12l-2 10H8z"></path><path d="M6 8l3-4h6l3 4M12 4v14" fill="none" stroke="currentColor" stroke-width="2"></path>',
    'heart-pulse': '<path d="M3 12h4l2-3 3 6 2-4h4"></path><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    'piggy-bank': '<path d="M4 13a7 5 0 0 1 7-5h3a5 5 0 0 1 5 5v3H4z"></path><circle cx="15.5" cy="12.5" r="1"></circle><path d="M10 7V5M7 16v2M15 16v2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    spa: '<path d="M8 15c0-3 2-5 4-6 2 1 4 3 4 6"></path><path d="M12 9c0-2 1-4 3-5M12 9c0-2-1-4-3-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    'location-dot': '<path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5" fill="#fff"></circle>',
    'map-marker-alt': '<path d="M12 22s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10z"></path><circle cx="12" cy="12" r="2"></circle>',
    clock: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    building: '<path d="M4 21h16M6 21V5h12v16M9 9h2M13 9h2M9 13h2M13 13h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    'id-card': '<rect x="3" y="6" width="18" height="12" rx="2"></rect><circle cx="8" cy="12" r="2"></circle><path d="M12 11h6M12 14h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    envelope: '<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M4 8l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2"></path>',
    instagram: '<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2"></rect><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="17" cy="7" r="1.2"></circle>',
    facebook: '<path d="M13 21v-7h3l1-3h-4V9c0-1 .4-2 2-2h2V4h-3c-3 0-5 2-5 5v2H6v3h3v7z"></path>'
  };

  function replaceFontAwesomeWithInlineSvg() {
    const icons = document.querySelectorAll('i[class*="fa-"]');

    icons.forEach(function (icon) {
      const classes = Array.from(icon.classList);
      const iconKey = classes.find(function (className) {
        return className.indexOf('fa-') === 0 && className !== 'fa-solid' && className !== 'fa-brands';
      });

      if (!iconKey) {
        return;
      }

      const key = iconKey.replace('fa-', '');
      const markup = inlineIcons[key];

      if (!markup) {
        return;
      }

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('class', 'icon-svg icon-' + key);
      svg.innerHTML = markup;

      icon.replaceWith(svg);
    });
  }

  replaceFontAwesomeWithInlineSvg();

  /* ---- Navbar scroll state ---- */
  const navbar = document.getElementById('navbar');

  function updateNavbar(scrollY) {
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ---- Mobile menu toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fechar menu ao clicar em um link ou fora
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ---- Scroll Reveal (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll('[data-scroll-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10);
            setTimeout(function () {
              entry.target.classList.add('revealed');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: mostrar tudo imediatamente
    revealEls.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ---- Parallax sutil no hero ---- */
  const heroContent = document.querySelector('.hero-content');
  const heroOverlay = document.querySelector('.hero-overlay');
  const heroVideo = document.querySelector('.hero-video');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  function hydrateVideoSource(video) {
    if (!video || video.dataset.loaded === 'true') {
      return;
    }

    const sources = video.querySelectorAll('source[data-src]');
    const videoSrc = video.dataset.src;

    sources.forEach(function (source) {
      if (!source.src) {
        source.src = source.dataset.src;
      }
    });

    if (videoSrc && !video.src) {
      video.src = videoSrc;
    }

    video.load();
    video.dataset.loaded = 'true';
  }

  function playVideoSafely(video) {
    if (!video) {
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {});
    }
  }

  function setupHeroVideo() {
    if (!heroVideo || reduceMotion) {
      return;
    }

    const shouldDeferHeavyVideo = Boolean(
      connection && (connection.saveData || /2g|3g/.test(connection.effectiveType || ''))
    );

    function markHeroReady() {
      heroVideo.classList.add('is-ready');
      playVideoSafely(heroVideo);
    }

    function loadHeroVideo() {
      if (heroVideo.dataset.loaded === 'true') {
        markHeroReady();
        return;
      }

      heroVideo.addEventListener('canplay', markHeroReady, { once: true });
      heroVideo.addEventListener('loadeddata', markHeroReady, { once: true });
      hydrateVideoSource(heroVideo);

      if (heroVideo.readyState >= 3) {
        markHeroReady();
      }
    }

    if (shouldDeferHeavyVideo) {
      ['pointerdown', 'keydown', 'touchstart'].forEach(function (eventName) {
        window.addEventListener(eventName, loadHeroVideo, { once: true, passive: true });
      });
      // Fallback: mesmo em rede lenta, tenta carregar sem depender de interação.
      window.setTimeout(loadHeroVideo, 2400);
      return;
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadHeroVideo, { timeout: 1800 });
    } else {
      window.setTimeout(loadHeroVideo, 900);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        heroVideo.pause();
      } else if (heroVideo.dataset.loaded === 'true') {
        playVideoSafely(heroVideo);
      }
    });
  }

  function heroParallax(scrollY) {
    if (scrollY < window.innerHeight) {
      if (heroContent) {
        heroContent.style.transform = 'translateY(' + scrollY * 0.28 + 'px)';
        heroContent.style.opacity   = String(1 - scrollY / (window.innerHeight * 0.85));
      }
      if (heroOverlay) {
        heroOverlay.style.opacity = String(0.72 + scrollY * 0.0002);
      }
    }
  }
  setupHeroVideo();

  /* ---- Lazy autoplay para vídeos secundários ---- */
  const lazyAutoplayVideos = document.querySelectorAll('video[data-autoplay-lazy]');

  if ('IntersectionObserver' in window && lazyAutoplayVideos.length) {
    const videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const video = entry.target;
        if (entry.isIntersecting) {
          hydrateVideoSource(video);
        }
        if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
          playVideoSafely(video);
        } else {
          video.pause();
        }
      });
    }, { rootMargin: '160px 0px', threshold: [0, 0.55, 1] });

    lazyAutoplayVideos.forEach(function (video) {
      video.muted = true;
      video.setAttribute('playsinline', '');
      videoObserver.observe(video);
    });
  }

  /* ---- Back to Top ---- */
  const backToTop = document.getElementById('backToTop');

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Galeria / Lightbox ---- */
  const galleryItems  = document.querySelectorAll('.gallery-item');
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');

  let currentIndex = 0;
  const galleryImages = [];

  galleryItems.forEach(function (item, idx) {
    const img = item.querySelector('img');
    const vid = item.querySelector('video');
    if (vid) {
      galleryImages.push({ src: item.dataset.video || vid.src, alt: 'Vídeo do drone', type: 'video' });
    } else if (img) {
      galleryImages.push({ src: img.src, alt: img.alt, type: 'image' });
    }
    item.addEventListener('click', function () {
      openLightbox(idx);
    });
  });

  function openLightbox(idx) {
    currentIndex = idx;
    setLightboxImage(idx);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightboxVideo.style.display = 'none';
    lightboxImg.style.display = '';
  }

  function setLightboxImage(idx) {
    if (!galleryImages[idx]) return;
    const entry = galleryImages[idx];
    if (entry.type === 'video') {
      lightboxImg.style.display = 'none';
      lightboxVideo.style.display = 'block';
      lightboxVideo.src = entry.src;
      lightboxVideo.play().catch(function () {});
    } else {
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightboxVideo.style.display = 'none';
      lightboxImg.style.display = '';
      lightboxImg.style.opacity = '0';
      setTimeout(function () {
        lightboxImg.src = entry.src;
        lightboxImg.alt = entry.alt;
        lightboxImg.style.opacity = '1';
      }, 120);
    }
  }

  lightboxImg.style.transition = 'opacity .2s';

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxPrev.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxImage(currentIndex);
  });

  lightboxNext.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    setLightboxImage(currentIndex);
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')    closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setLightboxImage(currentIndex);
    }
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      setLightboxImage(currentIndex);
    }
  });

  // Swipe touch no lightbox
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) {
        currentIndex = (currentIndex + 1) % galleryImages.length;
      } else {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      }
      setLightboxImage(currentIndex);
    }
  }, { passive: true });

  /* ---- Active nav link by scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  let sectionTops = [];

  function recomputeSectionTops() {
    sectionTops = Array.from(sections).map(function (section) {
      return {
        id: section.getAttribute('id'),
        top: section.getBoundingClientRect().top + window.scrollY - 120
      };
    });
  }

  function updateActiveNav(scrollY) {
    let current = '';

    sectionTops.forEach(function (sectionMeta) {
      if (scrollY >= sectionMeta.top) {
        current = sectionMeta.id;
      }
    });

    navAnchors.forEach(function (anchor) {
      const isActive = anchor.getAttribute('href') === '#' + current;
      anchor.classList.toggle('active-link', isActive);
    });
  }

  function updateBackToTop(scrollY) {
    backToTop.classList.toggle('visible', scrollY > 400);
  }

  let scrollTicking = false;

  function runScrollPipeline() {
    const scrollY = window.scrollY;

    updateNavbar(scrollY);
    updateBackToTop(scrollY);
    updateActiveNav(scrollY);

    if (!reduceMotion && !isMobileViewport) {
      heroParallax(scrollY);
    }

    scrollTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(runScrollPipeline);
  }, { passive: true });

  let resizeTicking = false;
  window.addEventListener('resize', function () {
    if (resizeTicking) {
      return;
    }

    resizeTicking = true;
    window.requestAnimationFrame(function () {
      recomputeSectionTops();
      runScrollPipeline();
      resizeTicking = false;
    });
  }, { passive: true });

  recomputeSectionTops();
  runScrollPipeline();

  /* ---- Smooth ancor scroll (fallback) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ---- Modal Vídeo de Apresentação ---- */
  const videoModal      = document.getElementById('videoModal');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalBack  = document.getElementById('videoModalBackdrop');
  const presentVideo    = document.getElementById('presentationVideo');
  const openVideoBtn    = document.getElementById('openVideoModal');
  const competingVideos = document.querySelectorAll('.hero-video, video[data-autoplay-lazy]');
  let pausedByModal = [];

  if (presentVideo) {
    presentVideo.preload = 'metadata';
  }

  function pauseCompetingVideos() {
    pausedByModal = [];
    competingVideos.forEach(function (video) {
      if (!video) return;
      const wasPlaying = !video.paused && !video.ended;
      pausedByModal.push({ video: video, wasPlaying: wasPlaying });
      if (wasPlaying) {
        video.pause();
      }
    });
  }

  function resumeCompetingVideos() {
    pausedByModal.forEach(function (item) {
      const video = item.video;
      if (!video) return;
      if (item.wasPlaying) {
        video.play().catch(function () {});
      }
    });
    pausedByModal = [];
  }

  function openVideoModal() {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    pauseCompetingVideos();
    if (presentVideo) {
      hydrateVideoSource(presentVideo);
      presentVideo.currentTime = 0;
      playVideoSafely(presentVideo);
    }
  }

  function closeVideoModal() {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    if (presentVideo) {
      presentVideo.pause();
      presentVideo.currentTime = 0;
    }
    resumeCompetingVideos();
  }

  if (openVideoBtn)    openVideoBtn.addEventListener('click', openVideoModal);
  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModalBack)  videoModalBack.addEventListener('click', closeVideoModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  /* ---- Counter animation (stats) ---- */
  function animateCounter(el, target, suffix) {
    let start     = 0;
    const duration = 1600;
    const step      = 16;
    const increment = target / (duration / step);

    const timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, step);
  }

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll('.stat strong');
        stats.forEach(function (stat) {
          const text = stat.textContent.trim();
          const num  = parseInt(text.replace(/\D/g, ''), 10);
          const suf  = text.replace(/[0-9]/g, '');
          if (!isNaN(num)) animateCounter(stat, num, suf);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

})();
