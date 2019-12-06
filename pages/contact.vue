<template>
  <members-only>
    <div class="container">
      <div>
        <h1 class="title">
          portfolio
        </h1>
        <h2 class="subtitle">
          My super Nuxt.js project
        </h2>
      </div>
    </div>
  </members-only>
</template>

<script>

import MembersOnly from '~/components/members-only.vue'

export default {
  components: {
    MembersOnly
  }
}

</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";



</style>
