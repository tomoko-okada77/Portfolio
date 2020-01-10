<template>
  <!-- <members-only> -->
    <div class="container inner">
      <div>
        <h2 class="title">
          Contact
        </h2>
        <p class="lead">
          お問い合わせがございます場合は、必要事項を入力の上、[送信する]ボタンを押してください。<br>
          メーラーが立ち上がりましたらそのまま送信ください。
        </p>
        <form>
          <dl class="section form-group">
            <dt>お名前</dt>
            <dd><input type="text" v-model="name"></dd>
          </dl>
          <dl class="section form-group">
            <dt>お問い合わせ内容</dt>
            <dd><textarea name="" id="" rows="10" v-model="text"></textarea></dd>
          </dl>
          <button class="btn"><a v-bind:href="'mailto: tomoko.okada77@gmail.com?subject=' + name + '&amp;body=' + text">送信する</a></button>
        </form>
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
      name: "",
      text: ""
    }
  },
}

</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";

  .lead{
    margin-bottom: 4rem;
  }
  .form-group{
    width: 100%;
    // max-width: 800px;
    // margin-right: auto;
    // margin-left: auto;
    display: table;
    dt{
      width: 30%;
      display: table-cell;
    }
    dd{
      width: 70%;
      display: table-cell;
      vertical-align: top;
    }
    textarea{
      border-color: darken($lightgray, 10%)
    }
  }


</style>
