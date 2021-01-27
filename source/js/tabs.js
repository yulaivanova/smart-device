'use strict';

(function () {
  const MOBILE_WIDTH_ONLY = 767;
  const ACC = document.querySelectorAll('.footer__title');

  ACC.forEach(item => {
    item.classList.remove('footer__title--nojs')
  });

  ACC.forEach(item => {
    item.addEventListener('click', function () {
      if (window.innerWidth <= MOBILE_WIDTH_ONLY) {
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

})();
