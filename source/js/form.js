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
  });
})();
