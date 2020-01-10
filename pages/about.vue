<template>
  <!-- <members-only> -->
    <div class="container inner">
      <div>
        <h2 class="title">
          About
        </h2>
        <section class="section">
          <h3 class="subtitle">
            Skill
          </h3>
          <ul>
            <li v-for="skill in skills">{{ skill }}</li>
          </ul>      
        </section>
        <section class="section">
          <h3 class="subtitle">
            Tool
          </h3>
          <ul>
            <li v-for="tool in tools">{{ tool }}</li>
          </ul>      
        </section> 
      </div>
    </div>
  <!-- </members-only> -->
</template>

<script>

import MembersOnly from '~/components/members-only.vue'

export default {
  components: {
    MembersOnly
  },
  data() {
    return {
      skills: [
        'HTML5', 'CSS3', 'SCSS', 'JavaScript', 'ES2015(ES6)', 'Vue.js', 'Nuxt.js', 'jQuery', 'Google Apps Script(GAS)', 'Git', 'Gulp'
      ],
      tools: [
        'Mac', 'Windows', 'Vs code', 'Adobe Photoshop', 'Adobe Illustrator', 'Slack', 'Excel', 'Word'
      ]
    }
  },
}

</script>


<style scoped lang="scss">
  @import "~assets/scss/variables";



</style>
