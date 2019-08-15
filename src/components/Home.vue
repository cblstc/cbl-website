<template>
  <div>
    <el-container>
      <Header></Header>
      <el-main class="main"></el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import Header from './common/Header'
  import Footer from './common/Footer'

  export default {
    name: "Home",

    components: {
      Header,
      Footer
    },

    data () {
      return {
        checked: true
      }
    }
  }
</script>

<style scoped>
  .main {
    width: 100%;
    height: 1000px;
  }
</style>