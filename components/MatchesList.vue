<template>
  <div class="match__list">
    <match-item v-for="match in matches" :key="match.id" :match="match" />
  </div>
</template>

<script>
import MatchItem from '~/components/MatchItem.vue'
export default {
  name: 'MatchesList',
  components: { MatchItem },
  props: {
    matches: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.match__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}
</style>
