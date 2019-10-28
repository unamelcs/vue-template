'use strict'
import jquery from 'jquery';
(function (window) {
  window.$ = window.jquery = jquery
  const $ = jquery
  const comFn = {
    ajax: function (params, method = 'post') {
      $.ajax()
    }
  }
  window.comFn = comFn
})(window)
