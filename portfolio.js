const carousel = document.getElementById('carousel');

function scrollCarousel(direction) {
  const cards = Array.from(carousel.querySelectorAll('.card'));
  
  if (direction > 0) {
    const first = cards.shift();
    carousel.appendChild(first);
  } else {
    const last = cards.pop();
    carousel.insertBefore(last, cards[0]);
  }

  updateClasses();
}

function updateClasses() {
  const cards = Array.from(carousel.querySelectorAll('.card'));
  cards.forEach(c => c.className = 'card'); // remove todas as classes extras

  if (cards.length >= 3) {
    cards[0].classList.add('left');
    cards[1].classList.add('active');
    cards[2].classList.add('right');
  } else if (cards.length === 2) {
    cards[0].classList.add('active');
    cards[1].classList.add('right');
  } else if (cards.length === 1) {
    cards[0].classList.add('active');
  }
}

window.addEventListener('load', updateClasses);
