const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuLink = document.querySelectorAll('.menu__link'),
        closeElem = document.querySelector('.menu__close');
       

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

/* закрытие при нажатии на Esc */
window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach((item, i) => {
    menuLink[i].addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


const   counters = document.querySelectorAll('.progress__value'),
        bars = document.querySelectorAll('.progress__bar_filled');

counters.forEach((item, i) =>{
    bars[i].style.width = item.innerHTML;
});

const  /*  send = document.querySelector('.contacts__btn'), */
        modal = document.querySelector('.modal'),
        closeWindow = document.querySelector('.modal__close');

/* send.addEventListener('click', () => {
    modal.classList.add('active');
}); */

closeWindow.addEventListener('click', () => {
    modal.classList.remove('active');
});

$(document).ready(function(){
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                text: "required",
                policy: "required"
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                email: {
                  required: "Как мне с вами связаться?",
                  email: "Формат почты: name@domain.com"
                },
                text: "Как я могу вам помочь?",
                policy: "*"
              }
        });
    }

    validateForms ('.contacts__form');

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input", "textarea").val("");
            $('.modal').addClass('active');
            $('form').trigger('reset');
        });

        return false;
    });
});