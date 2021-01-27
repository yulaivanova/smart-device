'use strict';

(function () {
  const SCROLL_BTN = document.querySelector('.promo-block__scroll');
  const ADV_BLOCK = document.querySelector('.advantages');
  const QUESTIONS_BLOCK = document.querySelector('.questions');
  const PROMO_BLOCK_BTN = document.querySelector('.promo-block__button');

  const moveTo = new MoveTo();

  SCROLL_BTN.addEventListener('click', function(e) {
    e.preventDefault();
    moveTo.move(ADV_BLOCK);
  });

  PROMO_BLOCK_BTN.addEventListener('click', function(e) {
    e.preventDefault();
    moveTo.move(QUESTIONS_BLOCK);
  });

})();
