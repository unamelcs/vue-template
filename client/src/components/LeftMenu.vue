<template>
  <div id="left-menu">
    <ul>
      <li v-for="li in menuList" v-bind:key="li.ename">{{li.name}}</li>
    </ul>
    <div v-html="class1"></div>
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="class1" id="r1" />
    <div v-bind:class="{'class1': class1}">directiva v-bind:class</div>
    <button @click="showMsg">showMsg</button>
    <div>{{toastMsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      class1: false,
      menuList: [
        {
          name: '游戏中心1',
          ename: 'game1'
        },
        {
          name: '游戏中心2',
          ename: 'game2'
        },
        {
          name: '游戏中心3',
          ename: 'game3'
        }
      ]
    }
  },
  methods: {
    showMsg () {
      this.$store.commit('showToast', 'aha')
    }
  },
  computed: {
    toastMsg () {
      return this.$store.state.toastMsg
    }
  }
}
// $('left-menu').html('hello')
</script>

<style scoped>
#left-menu {
  width: 200px;
  background: yellow;
}
.class1 {
  color: blue;
}
</style>
