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
