<template>
  <div v-if="loaded">
    <slot/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  async mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('login')
      }
      this.loaded = true
    }, 0)
  }
}
</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";
</style>