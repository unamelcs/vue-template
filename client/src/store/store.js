import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
const store = new VueX.Store({
  state: {
    toastMsg: 1
  },
  mutations: {
    showToast (state, msg) {
      state.toastMsg = msg
      setTimeout(function () {
        state.toastMsg = ''
      }, 2500)
    }
  }
})

export default store
