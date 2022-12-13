// Nav
const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('open');
});

menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});

// Slider
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slider = document.querySelector('.allposts');

arrowRight.addEventListener('click', () => {
    slider.scrollLeft += 300;
});

arrowLeft.addEventListener('click', () => {
    slider.scrollLeft -= 300;
});