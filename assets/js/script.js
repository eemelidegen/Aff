const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const carousel = document.getElementById('carousel');
const carPrev = document.getElementById('carPrev');
const carNext = document.getElementById('carNext');
const carDots = document.getElementById('carDots');

if (carousel && carPrev && carNext && carDots) {
  const cards = Array.from(carousel.children);

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Kortti ${i + 1}`);
    dot.addEventListener('click', () => {
      cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
    carDots.appendChild(dot);
  });
  const dots = Array.from(carDots.children);

  const step = () => cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : carousel.clientWidth;

  carPrev.addEventListener('click', () => {
    carousel.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  carNext.addEventListener('click', () => {
    carousel.scrollBy({ left: step(), behavior: 'smooth' });
  });

  const updateActiveDot = () => {
    const index = Math.round(carousel.scrollLeft / step());
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  };

  let scrollTimer;
  carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateActiveDot, 80);
  });

  updateActiveDot();
}
