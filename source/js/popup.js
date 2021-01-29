/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {
  const ESC_KEY = 'Escape';
  const OPEN_BTN = document.querySelector('.contacts__button');
  const POPUP_OVERLAY = document.querySelector('.popup');
  const POPUP_FORM = document.querySelector('.popup__wrapper form');
  const POPUP_TOGGLE = document.querySelector('.popup__toggle');
  const USER_NAME = document.querySelector('#name-popup');
  const PHONE = document.querySelector('#phone-popup');
  const QUESTION = document.querySelector('#question-popup');

  const closePopup = function () {
    POPUP_OVERLAY.classList.remove('popup--opened');
    document.body.style.overflow = 'scroll';
  };

  const openPopup = function () {
    POPUP_OVERLAY.classList.add('popup--opened');
    document.body.style.overflow = 'hidden';

    if (USER_NAME) {
      USER_NAME.focus();
      USER_NAME.value = window.storage.name;
    }

    if (PHONE) {
      PHONE.value = window.storage.phone;
    }

    if (QUESTION) {
      QUESTION.value = window.storage.question;
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

  POPUP_FORM.addEventListener('submit', function () {
    if (window.storage.isSupport) {
      localStorage.setItem('userName', USER_NAME.value);
      localStorage.setItem('phone', PHONE.value);
      localStorage.setItem('question', QUESTION.value);
    }

    closePopup();
  });

  POPUP_TOGGLE.addEventListener('click', function () {
    closePopup();
    document.removeEventListener('keydown', onEscPress);
  });

  POPUP_OVERLAY.addEventListener('click', onOverlayClick);

  OPEN_BTN.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
    document.addEventListener('keydown', onEscPress);
  });

})();
