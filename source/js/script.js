'use strict';

const mobileWidthOnly = 767;
var acc = document.querySelectorAll('.footer__title');

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



