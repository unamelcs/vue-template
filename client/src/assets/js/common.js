'use strict';
(function (window) {
  const comFn = {
    ajax: function (params, type = 'post') {
      $.ajax({
        type,
        url: process.env.API_HOST + params.url,
        data: params.data,
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        beforeSend () {
          params.self.$store.state.loading++
        },
        success (res) {
          params.success(res)
        },
        error (err) {
          if (err.status === 302 && err.responseJSON.key === 302) {
            params.self.$router.push({
              name: 'login'
            })
          } else {
            params.self.$store.commit('showToast', err.responseJSON ? (err.responseJSON.value || '网络错误') : '网络错误')
            params.error(err)
          }
        },
        complete () {
          params.self.$store.state.loading--
        }
      })
    }
  }
  window.comFn = comFn
})(window)
