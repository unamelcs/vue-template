'use strict';
(function (window) {
  const comFn = {
    ajax: function (params, method = 'post') {
      $.ajax()
    }
  }
  window.comFn = comFn
})(window)
