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

  new WOW().init();

  // Валидация форм --------------------------------------------
  $('#control-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      policy: {
        required: true
      }
    },
    // Сообщения .control__form
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
      policy: {
        required: "Для отправки формы нужно согласиться с условиями"
      }
    },
    // Проверка на чекнутость
    errorPlacement: function (error, policy) {
      if (policy.attr("type") == "checkbox") {
        return policy.next('label').append(error);
      }

      error.insertAfter($(policy));
    },
    // ajax .control__form
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function(response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(send).toggleClass('send--visible');
          $(".send__title").text(response);
        },
        error: function(response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });
  
  $('#footer-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      userQuestion: {
        required: true,
        minlength: 2,
        maxlength: 50
      },
      policy: {
        required: true
        // checked: true
      }
    },
    // Сообщения .footer__form
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
      },
      policy: {
        required: "Обязательное поле для отправки формы",
      }
    },
    // Проверка на чекнутость
    errorPlacement: function (error, policy) {
      if (policy.attr("type") == "checkbox") {
        return policy.next('label').append(error);
      }

      error.insertAfter($(policy));
    },
    // ajax .footer__form
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(send).toggleClass('send--visible');
          $(".send__title").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });
    
  $('#modal-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      userEmail: {
        required: true,
        email: true
      },
      policy: {
        required: true
      }
    },
    // Сообщения .modal__form
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
      },
      policy: {
        required: "Для отправки формы нужно согласиться с условиями"
      }
    },
    // Проверка на чекнутость
    errorPlacement: function (error, policy) {
      if (policy.attr("type") == "checkbox") {
        return policy.next('label').append(error);
      }

      error.insertAfter($(policy));
    },
    // ajax .modal__form
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(modal).removeClass('modal--visible');
          $(send).toggleClass('send--visible');
          $(".send__title").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });

  // Маска для телефона ------------------------------------------
  $('[type=tel]').mask('+7(000)000-00-00');
  // $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7 (___) ___-__-__"});

  // Кнопка наверх -------------------------------------------------------
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

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
        // 'onStateChange': onPlayerStateChange
      }
    });
  })
  function videoPlay(event) {
    event.target.playVideo();
  }
});


  // $('#modal-form').on('submit', function name(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     type: "POST",
  //     url: "send.php",
  //     data: $(this).serialize(),
  //     success: function (response) {
  //       console.log('Прибыли данные: ' + response);
  //       $('#modal-form')[0].reset();
  //       send.toggleClass('send--visible');
  //       $(".send__title").text(response);
  //       $('Location: thanks.html')
  //     },
  //     error: function (jqXHR, textStatus, errorTrown) {
  //       console.error(jqXHR + ' ' + textStatus);
  //     }
  //   });
  // });