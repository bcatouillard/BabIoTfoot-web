<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">
        Matchs en cours
      </h2>
      <matches-list :matches="inProgressMatches" />
    </div>
    <div class="container">
      <h2 class="title is-2">
        Matchs en attente
      </h2>
      <matches-list :matches="pendingMatches" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  head: {
    title: 'BabIoTFoot - Matchs'
  },
  computed: {
    ...mapState({
      inProgressMatches: state => state.inprogress.inProgressMatches,
      pendingMatches: state => state.inprogress.pendingMatches
    })
  },
  mounted () {
    this.$socket = new WebSocket(process.env.WEBSOCKET_URL)

    this.$socket.onopen = () => {
      this.$socket.send(JSON.stringify({
        action: 'inprogress'
      }))
    }

    this.$socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data)
      this.$store.commit('inprogress/SET_INPROGRESSMATCHES', parsedData.inProgress)
      this.$store.commit('inprogress/SET_PENDINGMATCHES', parsedData.paused)
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
