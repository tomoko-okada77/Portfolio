<template>
  <members-only>
    <div class="container">
      <div class="main-copy">
          <transition-group tag="div" class="title" >
            <span v-for="el in text" :key="el.id" class="item" v-text="el.text"/>
          </transition-group>
      </div>
      <!-- <figure class="main-img"> -->
        <!-- <img src="/img.jpg" alt="image"> -->
        <!-- <figcaption>
          <transition-group tag="div" class="title" >
            <span v-for="el in text" :key="el.id" class="item" v-text="el.text"/>
          </transition-group>
        </figcaption>
      </figure> -->
    </div>
  </members-only>
</template>

<script>

import MembersOnly from '~/components/members-only.vue'

export default {
  components: {
    MembersOnly
  },
  // props: {
  //   autoplay: Boolean
  // },
  data() {
    return {
      timer: 500,
      index: 0,
      // autoplay: true,
      // オリジナルメッセージ
      original: [
        'Tomoko Okada',
        'FrontEnd Engineer'
      ],
      // 分解したメッセージ
      messages: [],
      text: ''
    }
  },
  // computed: {
  //   editor: {
  //     get() { return this.text.map(e => e.text).join('') },
  //     set(text) { this.text = this.convText(text) }
  //   }
  // },
  watch: {
    autoplay(val) {
      clearTimeout(this.timer)
      if (val) {
        this.ticker()
      }
    }
  },
  methods: {
    // デモ用のオートタイマー
    ticker() {
      this.timer = setTimeout(() => {
        // if (this.autoplay) {
          this.index = this.index < this.messages.length-1 ? this.index + 1 : 0
          this.text = this.messages[this.index]
          this.ticker()
        // }
      }, 3000)
    },
    // テキストを分解してオブジェクトに
    convText(text) {
      const alms = {}
      const result = text.split('').map(el => {
        alms[el] = alms[el] ? ++alms[el] : 1
        return { id: `${el}_${alms[el]}`, text: el }
      })
      return Object.freeze(result) // 監視しない
    }
  },
  created() {
    this.messages = this.original.map(el => this.convText(el))
    this.text = this.messages[0]
    this.ticker()
  }
}

</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";
  @import "~assets/scss/mixin";

  .main-copy{
    height: 2em;
    margin: auto;
    position: absolute;
    top: -2em;
    right: 0;
    bottom: 0;
    left: 0;
    color: #fff;
    text-align: center;
    letter-spacing: .4em;
    @include media-pc{
      letter-spacing: .8em;
    }
  }
  // .main-img{
  //   position: relative;
  //   img{
  //     max-width: 100%;
  //     filter: sepia(70%);
  //     // filter: blur(3px);
  //     opacity: .7;
  //   }
  //   figcaption{
  //     height: 2em;
  //     margin: auto;
  //     position: absolute;
  //     top: -2em;
  //     right: 0;
  //     bottom: 0;
  //     left: 0;
  //     color: #fff;
  //     text-align: center;
  //     letter-spacing: .8em;
  //   }
  // }
  .item {
    display: inline-block;
    min-width: 0.3em;
  }
  /* トランジション用スタイル */
  .v-enter-active,
  .v-leave-active,
  .v-move {
    transition: all 1s;
  }
  .v-leave-active {
    position: absolute;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }


</style>
