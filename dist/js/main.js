$(document).ready(function () {
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
    send.removeClass('send--visible');
  });

  // Слайдер-проекты
  var mySwiper = new Swiper('.projects__swiper-container', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev'
    }
  });

  var nextDesktop = $('.swiper-button-next-desktop');
  var prevDesktop = $('.swiper-button-prev-desktop');
  var bulletsDesktop = $('.swiper-pagination-desktop');
  var nextMobile = $('.swiper-button-next-mobile');
  var prevMobile = $('.swiper-button-prev-mobile');
  var bulletsMobile = $('.swiper-pagination-mobile');

  nextDesktop.css('left', prevDesktop.width() + 19 + bulletsDesktop.width() + 19);
  bulletsDesktop.css('left', prevDesktop.width() + 19);

  prevMobile.css('left', 68);
  bulletsMobile.css('left', 130);
  nextMobile.css('left', 232);

  // Слайдер-шаги
  var mySwiperSteps = new Swiper('.steps__swiper-container', {
    loop: true,
    speed: 1200,
    effect: 'flip',
    on: {
      slideChange: function () {
        let e = mySwiperSteps[0].activeIndex - 1;
        if (e === 6) { e = 0 }
        $('.steps__text--right').removeClass('steps__text--right-active');
        $('.steps__text--right').eq(e).addClass('steps__text--right-active');
      }
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev'
    }
  });

  $('.steps__text--right').on('click', function () {
    $('.steps__text--right').removeClass('steps__text--right-active');
    $(this).addClass('steps__text--right-active');
    const e = $(this).data('index');
    mySwiperSteps[0].slideTo(e);
    mySwiperSteps[1].slideTo(e);
  });

  var nextSteps = $('.steps__swiper-button-next');
  var prevSteps = $('.steps__swiper-button-prev');
  var bulletsSteps = $('.steps__swiper-pagination');

  nextSteps.css('left', prevSteps.width() + 18 + bulletsSteps.width() + 18);
  bulletsSteps.css('left', prevSteps.width() + 18);

  // Секция-фантазии
  $('.fantasies__slyles__items').on('click', function () {
    $('.fantasies__slyles__items').removeClass('fantasies__slyles--active');
    $(this).addClass('fantasies__slyles--active');
    const e = $(this).data('index');

    $('.fantasies__background__image').css('backgroundImage', `url('../img/fantasies/fantasies-${e}.jpg')`);

    $('.fantasies__gallery__items__one').css('backgroundImage', `url('../img/fantasies/fantasies-${e}-a.jpg')`);
    $('.fantasies__gallery__items__two').css('backgroundImage', `url('../img/fantasies/fantasies-${e}-b.jpg')`);
    $('.fantasies__gallery__items__three').css('backgroundImage', `url('../img/fantasies/fantasies-${e}-c.jpg')`);
    $('.fantasies__gallery__items__four').css('backgroundImage', `url('../img/fantasies/fantasies-${e}-d.jpg')`);
  });

  $('.fantasies__nav__prev').on('click', function () {
    let e = $('.fantasies__slyles--active').data('index') - 1;
    if (e === 0) { e = 11 }
    $('.fantasies__background__image').css('backgroundImage', `url('../img/fantasies/fantasies-${e}.jpg')`);
    e--;
    if (e === 12) { e = 1 }
    $('.fantasies__slyles__items').removeClass('fantasies__slyles--active');
    $('.fantasies__slyles__items').eq(e).addClass('fantasies__slyles--active');
  });
  $('.fantasies__nav__next').on('click', function () {
    let e = $('.fantasies__slyles--active').data('index') + 1;
    if (e === 12) { e = 1 }
    $('.fantasies__background__image').css('backgroundImage', `url('../img/fantasies/fantasies-${e}.jpg')`);
    e--;
    if (e === 12) { e = 1 }
    $('.fantasies__slyles__items').removeClass('fantasies__slyles--active');
    $('.fantasies__slyles__items').eq(e).addClass('fantasies__slyles--active');
  });

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

  $('#sample-form').validate({
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
    // Сообщения .sample__form
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
    // ajax .sample__form
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
      userEmail: {
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

  // Отложенная загрузка карт
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