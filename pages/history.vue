<template>
  <members-only>
    <div class="container inner">
      <div>
        <h2 class="title">
          History
        </h2>
        <div class="timeline">
          <dl class="section" v-for="event in timeline">
            <dt>{{ event.year }}</dt>
            <dd>{{ event.text }}</dd>
          </dl>
        </div>
        
      </div>
    </div>
  </members-only>
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
        { year: '1997.03', text: '神奈川県立横浜平沼高等学校卒業'},
        { year: '2012〜', text: 'KENスクールにてWebコースを受講'},
        { year: '2013.01', text: 'Webクリエイター能力認定試験　エキスパート合格'},
        { year: '2013.05', text: `株式会社ステッチ入社
                                  デザイナー、コーダー、フロントエンドとして多くのサイト制作に携わる`},
        { year: '2018.01', text: `フリーランスとして開業
                                  個人業務委託で株式会社サムザップに常駐する他、サイト制作案件を受注`}
      ]
    }
  },
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
