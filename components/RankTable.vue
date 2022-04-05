<template>
  <b-table
    :data="data"
    default-sort="wonMatches"
    default-sort-direction="desc"
  >
    <b-table-column
      v-slot="props"
      field="name"
      label="Nom"
    >
      {{ props.row.name }}
    </b-table-column>

    <b-table-column
      v-slot="props"
      field="wonMatches"
      label="Matchs gagnés"
      centered
      sortable
      numeric
    >
      {{ props.row.wonMatches }}
    </b-table-column>

    <b-table-column
      v-slot="props"
      field="lostMatches"
      label="Matchs perdus"
      centered
      sortable
      numeric
    >
      {{ props.row.lostMatches }}
    </b-table-column>
  </b-table>
</template>

<script>
const data = require('~/static/sample.json')
export default {
  name: 'RankTable',
  data () {
    return {
      data
    }
  }
}
</script>
