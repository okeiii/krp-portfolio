document.addEventListener('DOMContentLoaded', (event) => {
    const targetBurger = document.querySelector('.target-burger');
    const mobileNav = document.querySelector('.mobile-nav');

    targetBurger.addEventListener('click', () => {
        document.body.classList.toggle('toggled');
        mobileNav.classList.toggle('toggled');
    });
});
