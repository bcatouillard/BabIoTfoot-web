<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">
        Classement
      </h2>
      <RankTable />
    </div>
  </section>
</template>

<script>
import RankTable from '~/components/RankTable.vue'
export default {
  name: 'RankingPage',
  components: { RankTable },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="scss">
.section {
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
