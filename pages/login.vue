<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div class="dialog logout" v-if="isAuthenticated">
      <h2 class="heading">{{ user.email }}でログイン中です</h2>
      <button class="btn" v-on:click="logout">ログアウト</button><br>
      <a href="/">TOPへ</a>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div class="dialog login" v-else>
      <h2 class="heading">ログインしてください。</h2>
      <dl class="input-field">
        <dt class="text-left">ID</dt>
        <dd><input type="text" v-model="email"></dd>
      </dl>
      <dl class="input-field">
        <dt class="text-left">パスワード</dt>
        <dd><input type="password" v-model="password"></dd>
      </dl>
      <button class="btn" v-on:click="login">ログイン</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "~assets/scss/variables";
  @import "~assets/scss/mixin";

  .contents{
    position: relative;
  }
  .dialog{
    width: 90%;
    max-width: 640px;
    margin: auto;
    padding: 5%;
    background: #fff;
    text-align: center;
    @include vertical-center;
    &.login{
      .input-field{
        max-width: 24rem;
        margin: 0 auto 1rem;
      }
    }
  }
  
</style>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods : {
    ...mapActions(['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        // ログインしたら飛ぶページを指定
        this.$router.push("/")
      }).catch((error) => {
        alert(error)
      });
    },
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.setUser(null)
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>