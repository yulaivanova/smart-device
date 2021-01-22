'use strict';

(function () {
  const mobileWidthOnly = 767;
  const ESC_KEY = 'Escape';
  const openBtn = document.querySelector('.contacts__button');
  const popupOverlay = document.querySelector('.popup');
  const popupForm = document.querySelector('.popup__form');
  const questionsForm = document.querySelector('.questions__form');
  const popupToggle = document.querySelector('.popup__toggle');
  const acc = document.querySelectorAll('.footer__title');
  const scrollBtn = document.querySelector('.promo-block__scroll');
  const userName = document.querySelector('#name-popup');
  const phone = document.querySelector('#phone-popup');
  const question = document.querySelector('#question-popup');
  const advBlock = document.querySelector('.advantages');
  const promoBlockBtn = document.querySelector('.promo-block__button');
  let storageName = '';
  let storagePhone = '';
  let storageQuestion = '';
  let isStorageSupport = true;

  const onScrollBtnClick = function (e) {
    e.preventDefault();

    advBlock.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const closePopup = function (event) {
    popupOverlay.classList.remove('popup--opened');
    document.body.style.overflow = 'scroll';
  };

  const openPopup = function () {
    popupOverlay.classList.add('popup--opened');
    document.body.style.overflow = 'hidden';

    if (userName) {
      userName.focus();
      userName.value = storageName;
    }

    if (phone) {
      phone.value = storagePhone;
    }

    if (question) {
      question.value = storageQuestion;
    }
  };

  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  const onOverlayClick = function (event) {
    const target = event.target;
    if (target.classList.contains('popup--opened')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  popupForm.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('question', question.value);
    }
    closePopup();
  });

  questionsForm.addEventListener('submit', function (evt) {
    questionsForm.reset();
    evt.preventDefault();
  });

  popupToggle.addEventListener('click', function () {
    closePopup();
    document.removeEventListener('keydown', onEscPress);
  });

  popupOverlay.addEventListener('click', onOverlayClick);

  openBtn.addEventListener('click', function () {
    openPopup();
    document.addEventListener('keydown', onEscPress);
  });

  scrollBtn.addEventListener('click', onScrollBtnClick);
  promoBlockBtn.addEventListener('click', onScrollBtnClick);

  acc.forEach(item => {
    item.addEventListener('click', function () {
      if (window.innerWidth <= mobileWidthOnly) {
        this.classList.toggle('footer__title--active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });

  try {
    storageName = localStorage.getItem('userName');
    storagePhone = localStorage.getItem('phone');
    storageQuestion = localStorage.getItem('question');
  } catch (err) {
    isStorageSupport = false;
  }

})();
