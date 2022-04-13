<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">
        Classement
      </h2>
      <RankTable :data="rank" />
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
      rank: state => state.rank.rank
    })
  },
  mounted () {
    this.$socket = new WebSocket(process.env.WEBSOCKET_URL)

    this.$socket.onopen = () => {
      this.$socket.send(JSON.stringify({
        action: 'rank'
      }))
    }

    this.$socket.onmessage = (event) => {
      this.$store.commit('rank/SET_RANKING', JSON.parse(event.data))
    }

    this.$socket.onclose = (event) => {
      if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
      } else {
        alert('[close] Connection died')
      }
    }

    this.$socket.onerror = (error) => {
      alert(`[error] ${error.message}`)
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
