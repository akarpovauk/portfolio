const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const   counters = document.querySelectorAll('.progress__value'),
        bars = document.querySelectorAll('.progress__bar_filled');

counters.forEach((item, i) =>{
    bars[i].style.width = item.innerHTML;
});