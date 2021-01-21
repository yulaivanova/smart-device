'use strict';

(function () {
  const mobileWidthOnly = 767;
  var ESC_KEY = 'Escape';
  var openBtn = document.querySelector('.contacts__button');
  var popupOverlay = document.querySelector('.popup');
  var popupForm = document.querySelector('.popup__form');
  var popupToggle = document.querySelector('.popup__toggle');
  var acc = document.querySelectorAll('.footer__title');
  var formOpened = document.querySelector('.popup--opened');

  const userName = document.querySelector('#name-popup');
  const phone = document.querySelector('#phone-popup');
  const question = document.querySelector('#question-popup');

  let storageName = '';
  let storagePhone = '';
  let storageQuestion = '';

  var closePopup = function (event) {
    popupOverlay.classList.remove('popup--opened');
  };

  var openPopup = function () {
    popupOverlay.classList.add('popup--opened');

    var fieldsetInputName = popupForm.querySelector('.fieldset__input--name');
    fieldsetInputName.focus();

    if (userName) {
      userName.value = storageName;
      console.log(storageName);
    }

    if (phone) {
      phone.value = storagePhone;
    }

    if (question) {
      question.value = storageQuestion;
    }
  };

  try {
    storageName = localStorage.getItem('userName');
    storagePhone = localStorage.getItem('phone');
    storageQuestion = localStorage.getItem('question');
  } catch (err) {
    isStorageSupport = false;
  }

  popupForm.addEventListener('submit', function (evt) {
    popupForm.reset();
    console.log(isStorageSupport);
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('question', question.value);
    }
    closePopup();
    evt.preventDefault();
  });

  var onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  var onOverlayClick = function (event) {
    var target = event.target;
    if (target.classList.contains('popup--opened')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  popupToggle.addEventListener('click', function () {
    closePopup();
    document.removeEventListener('keydown', onEscPress);
  });

  popupOverlay.addEventListener('click', onOverlayClick);

  openBtn.addEventListener('click', function () {
    openPopup();
    document.addEventListener('keydown', onEscPress);
  });

  acc.forEach(item => {
    item.addEventListener('click', function () {
      if (window.innerWidth <= mobileWidthOnly) {
        this.classList.toggle('footer__title--active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });

})();

