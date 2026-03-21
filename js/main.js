document.querySelectorAll('.accordion-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

function carouselStep(track) {
  const card = track.querySelector('.card');
  return card ? card.offsetWidth + 8 : 320;
}

const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.querySelector('.carousel-btn--prev');
const carouselNext = document.querySelector('.carousel-btn--next');

if (carouselTrack && carouselPrev && carouselNext) {
  carouselPrev.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -carouselStep(carouselTrack), behavior: 'smooth' });
  });
  carouselNext.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: carouselStep(carouselTrack), behavior: 'smooth' });
  });
}
