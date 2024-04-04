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

    // Start skill bar animations when section is in view
    function startSkillAnimationWhenInView(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.bar span');
                bars.forEach(bar => {
                    bar.style.animationPlayState = 'running';
                });
            } else {
                const bars = entry.target.querySelectorAll('.bar span');
                bars.forEach(bar => {
                    bar.style.animationPlayState = 'paused';
                });
            }
        });
    }

    // Bringing in the Intersection Observer for typing effect
    const typingObserver = new IntersectionObserver(startTextAnimationWhenInView, { threshold: 0.5 });
    const typingSections = document.querySelectorAll('.about, .websites, .contact');

    // Observe each section for typing effect
    typingSections.forEach(section => {
        typingObserver.observe(section);
    });

    // Bringing in the Intersection Observer again for skill animation
    const skillObserver = new IntersectionObserver(startSkillAnimationWhenInView, { threshold: 0.5 });
    const skillsSection = document.querySelector('.skills');

    // Observe the skills section for skill animation
    skillObserver.observe(skillsSection);
});
