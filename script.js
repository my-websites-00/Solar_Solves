let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Start slideshow
showSlide(currentSlide);
setInterval(nextSlide, 7500); // Change slide every 5 seconds



        // Exapnding Cards
        /*const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });*/

        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (card.classList.contains('expanded')) {
                    card.classList.remove('expanded');
                } else {
                    cards.forEach(c => c.classList.remove('expanded'));
                    card.classList.add('expanded');
                }
            });
        });

        // FAQ Collapse
        const faqs = document.querySelectorAll('.faq-item h3');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const parent = faq.parentElement; // Get the parent .faq-item
        const answer = parent.querySelector('p'); // Get the answer <p>

        // Collapse all other FAQ items (optional)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
                item.querySelector('p').style.height = '0';
            }
        });

        // Toggle the clicked FAQ
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            answer.style.height = '0'; // Collapse the answer
        } else {
            parent.classList.add('active');
            answer.style.height = `${answer.scrollHeight}px`; // Expand the answer
        }
    });
});
