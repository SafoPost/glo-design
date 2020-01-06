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
      closeBtn = $('.modal__close'),
      send = $('.send'),
      sendBtn = $('[data-toggle=modal-send]'),
      closeSendBtn = $('.send__close');
   
      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeSendBtn.on('click', function () {
        send.toggleClass('send--visible');
      });
  
  // $('#control-policy-checkbox').on('click', function () {
  //   if ($(this).prop('checked')) {
  //     $('.control__button').attr('disabled', false);
  //   } else {
  //     $('.control__button').attr('disabled', true);
  //   }
  // });

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
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 19.5 + bullets.width() + 19.5),
  bullets.css('left', prev.width() + 19.5),

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
        minlength: "Номер должен быть из 10 цифр"
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
      userQuestion: {
        required: true,
        minlength: 2,
        maxlength: 50
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
        minlength: "Номер должен быть из 10 цифр"
      },
      userQuestion: {
        required: "Напишите свой вопрос",
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
      controlPolicyCheckbox: {
        required: true
      },
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
        minlength: "Номер должен быть из 10 цифр"
      },
      controlPolicyCheckbox: {
        required: "Для отправки формы нужно согласится с условиями",
      }
    }
  });

  // Маска для телефона
  $('[type=tel]').mask('+7(000)000-00-00');


  $('#control-form').on('submit', function name(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#control-form')[0].reset();
        send.toggleClass('send--visible');
        $(".send__title").text(response);
      },
      error: function(jqXHR, textStatus, errorTrown) {
        console.error(jqXHR + ' ' + textStatus);
      }
    });
  })

  $('#footer-form').on('submit', function name(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#footer-form')[0].reset();
        send.toggleClass('send--visible');
        $(".send__title").text(response);
      },
      error: function (jqXHR, textStatus, errorTrown) {
        console.error(jqXHR + ' ' + textStatus);
      }
    });
  })

  $('#modal-form').on('submit', function name(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#modal-form')[0].reset();
        send.toggleClass('send--visible');
        $(".send__title").text(response);
        $('Location: thanks.html')
      },
      error: function (jqXHR, textStatus, errorTrown) {
        console.error(jqXHR + ' ' + textStatus);
      }
    });
  });

  // Кнопка наверх
  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 500) {
      $('#button-up').fadeIn();
    } else {
      $('#button-up').fadeOut();
    }
  });
  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  // // Создаём карту с собственной меткой
  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('map', {
  //     center: [47.244729, 39.723187],
  //     zoom: 17
  //   }, {
  //     searchControlProvider: 'yandex#search'
  //   }),

  //     // Создаём макет содержимого.
  //     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //     ),

  //     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //       hintContent: 'Наш офис',
  //       balloonContent: 'Вход со двора'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: '../img/map-marker.png',
  //       // Размеры метки.
  //       iconImageSize: [32, 32],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-16, -32]
  //     });

  //   myMap.geoObjects
  //     .add(myPlacemark);
  // });

});
