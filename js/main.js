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

  var nextDesktop = $('.swiper-button-next-desktop');
  var prevDesktop = $('.swiper-button-prev-desktop');
  var bulletsDesktop = $('.swiper-pagination-desktop');
  var nextMobile = $('.swiper-button-next-mobile');
  var prevMobile = $('.swiper-button-prev-mobile');
  var bulletsMobile = $('.swiper-pagination-mobile');
  // var cotainerMobile = $('.swiper-container');
  // var navMobile = $('.swiper-navigation-mobile');

  nextDesktop.css('left', prevDesktop.width() + 19.5 + bulletsDesktop.width() + 19.5),
  bulletsDesktop.css('left', prevDesktop.width() + 19.5),

  prevMobile.css('left', 68),
  bulletsMobile.css('left', 130),
  nextMobile.css('left', 232),

  nextDesktop.css('left', prevDesktop.width() + 19.5 + bulletsDesktop.width() + 19.5),
  bulletsDesktop.css('left', prevDesktop.width() + 19.5),

  // cotainerMobile.css("position", "relative"),
  // navMobile.css("position", "absolute"),

  // nextMobile.css('left', prevMobile.width() + 19.5 + bulletsMobile.width() + 19.5),
  // bulletsMobile.css('left', prevMobile.width() + 19.5),

  // jQuery.fn.center = function () {
  //   navMobile.css("position", "absolute");
  //   navMobile.css("left", Math.max(0, (($(cotainerMobile).width() - $(navMobile).outerWidth()) / 2) +
  //     $(cotainerMobile).scrollLeft()) + "px");
  //   return this;
  // };

  // $(navMobile).center();

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

  YaMapsShown = false;
  YaMapsMinShown = false;

  $(window).scroll(function () {
    if (!YaMapsShown) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
        showYaMaps();
        YaMapsShown = true;
      }
    }
  });

  function showYaMaps() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac5bb57cf85273372e734f7def62f256953ad064eedb76e5e5b9827bc18ec6a06&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("YaMaps").appendChild(script);
  };
  
  $(window).scroll(function () {
    if (!YaMapsMinShown) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
        showYaMapsMin();
        YaMapsMinShown = true;
      }
    }
  });

  function showYaMapsMin() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9a60de6cf27682651fbcaac0fd23aa6bf89d1b64045e88a7b770168feac6baa2&amp;width=100%25&amp;height=255&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("YaMapsMin").appendChild(script);
  }

});