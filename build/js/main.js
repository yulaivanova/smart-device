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

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const QUESTIONS_FORM = document.querySelector('.questions__content form');
  const USER_NAME_FORM = document.querySelector('#name');
  const PHONE_FORM = document.querySelector('#phone');
  const QUESTION_FORM = document.querySelector('#question');

  QUESTIONS_FORM.addEventListener('submit', function (evt) {
    if (window.storage.isSupport) {
      localStorage.setItem('userName', USER_NAME_FORM.value);
      localStorage.setItem('phone', PHONE_FORM.value);
      localStorage.setItem('question', QUESTION_FORM.value);
    }

    //QUESTIONS_FORM.reset();
  });
})();
/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {
  let isStorageSupport = true;
  let storageName = '';
  let storagePhone = '';
  let storageQuestion = '';

  try {
    storageName = localStorage.getItem('userName');
    storagePhone = localStorage.getItem('phone');
    storageQuestion = localStorage.getItem('question');
  } catch (err) {
    isStorageSupport = false;
  }

  window.storage = {
    isSupport: isStorageSupport,
    name: storageName,
    phone: storagePhone,
    question: storageQuestion,
  };

})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {
  const MOBILE_WIDTH_ONLY = 767;
  const ACC = document.querySelectorAll('.footer__title');

  ACC.forEach(item => {
    item.classList.remove('footer__title--nojs');
  });

  const switchVisability = (evt) => {
    if (window.innerWidth <= MOBILE_WIDTH_ONLY) {
      const menus = document.querySelectorAll('.footer__title');
      const menu = evt.target;
      let isVisible = false;

      isVisible = menu.classList.contains('footer__title--active') ? true : false;

      menus.forEach((item) => {
        if (item.classList.contains('footer__title--active')) {
          item.classList.toggle('footer__title--active');
        }
      });

      if (!isVisible) {
        menu.classList.toggle('footer__title--active');
      }
    }
  };

  ACC.forEach((item) => item.addEventListener('click', switchVisability));
})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {
  const SCROLL_BTN = document.querySelector('.promo-block__scroll');
  const ADV_BLOCK = document.querySelector('.advantages');
  const QUESTIONS_BLOCK = document.querySelector('.questions');
  const PROMO_BLOCK_BTN = document.querySelector('.promo-block__button');

  const moveTo = new MoveTo();

  SCROLL_BTN.addEventListener('click', function (e) {
    e.preventDefault();
    moveTo.move(ADV_BLOCK);
  });

  PROMO_BLOCK_BTN.addEventListener('click', function (e) {
    e.preventDefault();
    moveTo.move(QUESTIONS_BLOCK);
  });

})();
