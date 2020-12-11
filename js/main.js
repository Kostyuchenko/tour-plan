$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  }
});

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible')
});

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on("click", closeModal)
    
    function openModal () {
      var modalOverlay = $(".modal__overlay");
      var modaDialog = $(".modal__dialog");
      modalOverlay.addClass("modal__overlay--visible");
      modaDialog.addClass("modal__dialog--visible");
    }

    function closeModal (event) {
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modaDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modaDialog.removeClass("modal__dialog--visible");
    }

  // Обработка форм
  $(".form").each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Укажите имя",
        minlength: "Имя не должно быть короче 2 букв",
      },
      email: {
        required: "Нам нужна ваша почта для связи",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Телефон обязателен",
      },
    },
  });
  });
});

// Маска для номера телефона
$(document).ready(function() {
  $("#modal__phone").mask("+7 (999) 999-9999");
  $("#footer__phone").mask("+7 (999) 999-9999");
});

