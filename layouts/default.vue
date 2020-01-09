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
    },
    // el: '#header',
    // data: {
    //   isOn: false
    // },
		// methods: {
		// 	toggleMenu: function () {
		// 		this.isOn = !this.isOn
		// 	}
		// }
  }
</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";
</style>