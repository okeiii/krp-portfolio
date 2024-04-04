document.addEventListener('DOMContentLoaded', function(event) {
    // Function to apply typewriter effect to a specific h2 element
    function typeWriter(element, text, i, fnCallback) {
        if (i < text.length) {
            // Add the next letter
            element.textContent = text.substring(0, i + 1);

            // Animation delay
            setTimeout(function() {
                typeWriter(element, text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            // Callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // Start typewriter when section is in view
    function startTextAnimationWhenInView(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const h2Element = entry.target.querySelector('.typing');
                const text = h2Element.textContent.trim();
                let i = 0;
                typeWriter(h2Element, text, i);
                observer.unobserve(entry.target);
            }
        });
    }

    // Bringing in the amazing JS Intersection Observer
    const observer = new IntersectionObserver(startTextAnimationWhenInView, { threshold: 0.5 });
    const sections = document.querySelectorAll('.about, .websites');

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
