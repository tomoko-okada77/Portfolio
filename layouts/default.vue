<template>
  <div class="wrapper">
    <TheHeader/>
    <main class="contents">
      <nuxt/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '~/components/TheHeader';
  import TheFooter from '~/components/TheFooter';

  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";
</style>