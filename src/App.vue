<template>
  <div id="app">

    <router-view/>
    <FootGuide/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  export default {

    components: {
      FootGuide
    }

  }
</script>

<style>
  html{font-size:13.33333333vw}

</style>
