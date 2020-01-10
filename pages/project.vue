<template>
  <!-- <members-only> -->
    <div class="container inner">
      <div>
        <h1 class="title">
          Project
        </h1>
        <h2 class="subtitle">
        </h2>
        <div class="timeline">
          <dl class="section" v-for="event in timeline">
            <dt>{{ event.year }}</dt>
            <dd><a v-bind:href="event.link" target="_blank">{{ event.text }}</a></dd>
          </dl>
        </div>
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
      timeline: [
        { year: '2019.08', text: 'この素晴らしい世界に祝福を 公式サイト', link: 'https://konosubafd.jp/'},
        { year: '2018.06', text: '株式会社サムザップ 公式サイト', link: 'https://www.sumzap.co.jp/'},
        { year: '2017.09', text: 'ペリエホール', link: 'http://www.perie.co.jp/chiba/periehall/'},
        { year: '2016.03', text: 'NEWoMan 公式サイト', link: 'https://newoman.jp/sp/'}
      ]
    }
  }
}

</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";
  .timeline{
    dl{
      width: 100%;
      display: table;
      dt{
        width: 7em;
        display: table-cell;
      }
      dd{
        display: table-cell;
        white-space: pre-line;
      }
    }
  }


</style>
