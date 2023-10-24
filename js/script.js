document.addEventListener('DOMContentLoaded', () => {
  //todo  Slick Slider -- top
  $('.top-slider__wrapper').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          adaptiveHeight: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          adaptiveHeight: true,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // todo slick-slider footer
  if (window.innerWidth < 767) {
    $('.footer__cards').slick({
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      arrows: false,
      adaptiveHeight: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            adaptiveHeight: true,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 478,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // todo Choices for select
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  //todo Modal
  function showModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    if (trigger.length > 0) {
      trigger.forEach((item) => {
        item.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault();
          }
          modal.classList.add('open');
        });
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target === close) {
        modal.classList.remove('open');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        modal.classList.remove('open');
      }
    });
  }

  showModal('.header__button', '.modal', '.modal__close');

  // todo Open burger menu

  const burgerBtn = document.querySelector('.header__button-mobile');
  const headerMenu = document.querySelector('.header__menu');

  if (burgerBtn && headerMenu) {
    burgerBtn.addEventListener('click', () => {
      headerMenu.classList.toggle('open');
      burgerBtn.classList.toggle('active');
      document.body.classList.toggle('hidden');
    });
  }

  const headerButtonOpen = document.querySelector('.header__button');
  const modalClose = document.querySelector('.modal__close');

  if (headerButtonOpen && headerMenu) {
    headerButtonOpen.addEventListener('click', () => {
      headerMenu.classList.toggle('open');
    });
  }

  modalClose.addEventListener('click', (e) => {
    if (e.target === modalClose) {
      burgerBtn.classList.remove('active');
      document.body.classList.remove('hidden');
    }
  });
});
