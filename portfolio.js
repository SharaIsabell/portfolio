document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const projectTitle = document.getElementById('project-title');
    const projectDesc = document.getElementById('project-description');
    const enterButton = document.querySelector('.project-info .enter-btn');

    let currentIndex = 0;
    const totalCards = cards.length;
    const angle = 360 / totalCards;

    function updateCarousel() {
        const rotateY = -currentIndex * angle;
        carousel.style.transform = `rotateY(${rotateY}deg)`;

        cards.forEach((card, index) => {
            const cardAngle = index * angle;
            const diff = Math.abs(currentIndex - index);

            // Posiciona os cards em um círculo 3D
            const cardRotateY = cardAngle;
            const translateZ = 350; // Distância do centro
            card.style.transform = `rotateY(${cardRotateY}deg) translateZ(${translateZ}px)`;

            if (index === currentIndex) {
                card.classList.add('active');
                card.style.opacity = '1';
                projectTitle.textContent = card.dataset.projectTitle;
                projectDesc.textContent = card.dataset.projectDesc;
                enterButton.style.display = 'inline-block';
            } else {
                card.classList.remove('active');
                card.style.opacity = '0.4'; // Deixa os outros cards mais escuros
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    });

    // Inicializa o carrossel na posição correta
    updateCarousel();
});