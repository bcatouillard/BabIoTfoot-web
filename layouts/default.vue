<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '~/components/NavBar'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
div {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
</style>
