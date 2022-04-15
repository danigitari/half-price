<template>
  <router-view :key="route.fullPath"> </router-view>

</template>

<script>

import {useRoute} from "vue-router";
export default {
  name: 'App',
  components: {
  },
  setup(){

    const route = useRoute()
    return {
      route,
    }
  }

}

</script>

<style>

</style>
