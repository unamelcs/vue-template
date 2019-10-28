<template>
    <div class="game">
    </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  mounted () {
    $('.game').html('here is game')
  },
  methods: {
    aFun () {
    },
    bFun () {

    }
  }

}

</script>

<style lang="less" scoped>
@import '../../assets/less/color.less';
.game {
  color: @cMain
}
</style>
