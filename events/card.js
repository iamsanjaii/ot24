document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      card.addEventListener('click', () => {
          card.querySelector('.card__inner').classList.toggle('is-flipped');
      });
  });
});
