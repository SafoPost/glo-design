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
  $('.control__form').validate({
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
    // ajax .control__form
    // submitHandler: function (form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log('Прибыли данные: ' + response);
    //       $(form)[0].reset();
    //       $('.modal').removeClass('modal--visible');
    //       $('.send').toggleClass('send--visible');
    //       $(".send__title").text(response);
    //     },
    //   });
    // }
  });
  
  $('.footer__form').validate({
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
    // ajax .footer__form
    // submitHandler: function (form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log('Прибыли данные: ' + response);
    //       $(form)[0].reset();
    //       $('.modal').removeClass('modal--visible');
    //       $('.send').toggleClass('send--visible');
    //       $(".send__title").text(response);
    //     },
    //   });
    // }
  });
    
  $('.modal__form').validate({
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
        required: true,
        checked: true
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
        required: "Для отправки формы нужно согласиться с условиями",
        checked: true
      }
    },
    // ajax .modal__form
    // submitHandler: function(form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function(response) {
    //       console.log('Прибыли данные: ' + response);
    //       $(form)[0].reset();
    //       $('.modal').removeClass('modal--visible');
    //       $('.send').toggleClass('send--visible');
    //       $(".send__title").text(response);
    //     },
    //   });
    // }
  });

  // Маска для телефона ------------------------------------------
  $('[type=tel]').mask('+7(000)000-00-00');
  // $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7 (___) ___-__-__"});

  // ajax ---------------------------------------------------------
  $('#control-form').on('submit', function name(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $('#control-form').serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#control-form')[0].reset();
        $('.send').toggleClass('send--visible');
        $('.send__title').text(response);
        ym('56941837', 'reachGoal', 'sendForm'); return true;
      },
      error: function (response) {
        console.error('Ошибка отправки формы: ' + response);
      }
    });
  })

  $('#footer-form').on('submit', function name(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $('#footer-form').serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#footer-form')[0].reset();
        $('.send').toggleClass('send--visible');
        $('.send__title').text(response);
      },
    });
  })

  $('#modal-form').on('submit', function name(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $('#modal-form').serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#modal-form')[0].reset();
        $('.modal').removeClass('modal--visible');
        $('.send').toggleClass('send--visible');
        $('.send__title').text(response);
      },
    });
  })

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