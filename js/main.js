/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  } 
  

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal); 
  });

  closeBtn.addEventListener('click', switchModal);

  document.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };
  
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      modal.classList.remove('modal--visible');
    }
  });

});
*/




$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 19 + bullets.width() + 19),
  bullets.css('left', prev.width() + 19),

  new WOW().init()

  // Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      // Блочное правило
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Назовите свой телефон",
        minlength: "Номер должен быть из 10 цыфр"
      },
      userEmail:{
        required: "Укажите свой Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      // Блочное правило
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Назовите свой телефон",
        minlength: "Номер должен быть из 10 цыфр"
      },
      userEmail: {
        required: "Укажите свой Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      // Блочное правило
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Назовите свой телефон",
        minlength: "Номер должен быть из 10 цыфр"
      },
      userEmail: {
        required: "Укажите свой Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  // Маска для телефона
  $('[type=tel]').mask('+7(000)000-00-00');

});
