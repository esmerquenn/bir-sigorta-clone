document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const inner = card.querySelector('.flip-card-inner');
            inner.style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.flip-card-inner');
            inner.style.transform = 'rotateY(0deg)';
        });
    });
});