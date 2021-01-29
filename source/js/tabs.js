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
