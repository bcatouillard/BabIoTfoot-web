<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">
        Classement

        {{ rank }}
      </h2>
      <RankTable />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import RankTable from '~/components/RankTable.vue'
export default {
  name: 'RankingPage',
  components: { RankTable },
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState({
      rank: state => state.rank
    })
  },
  mounted () {
    this.socket = this.$nuxtSocket({
      path: '/babyfoot',
      reconnectionDelayMax: 1000,
      transports: ['websocket'],
      withCredentials: true,
      reconnection: false
    })

    this.socket.on('rank', (data) => {
      this.$store.commit('rank/SET_RANKING', data)
    })
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
