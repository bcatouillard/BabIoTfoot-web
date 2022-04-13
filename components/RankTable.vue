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
      {{ formatString(props.row.name) }}
    </b-table-column>

    <b-table-column
      v-slot="props"
      field="wonMatches"
      label="Matchs gagnés"
      centered
      sortable
      numeric
    >
      {{ props.row.value.wonMatches }}
    </b-table-column>

    <b-table-column
      v-slot="props"
      field="lostMatches"
      label="Matchs perdus"
      centered
      sortable
      numeric
    >
      {{ props.row.value.lostMatches }}
    </b-table-column>

    <b-table-column
      v-slot="props"
      field="abandonnedMatches"
      label="Matchs abandonnés"
      centered
      sortable
      numeric
    >
      {{ props.row.value.abandonnedMatches }}
    </b-table-column>
  </b-table>
</template>

<script>
export default {
  name: 'RankTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatString (str) {
      return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }
  }
}
</script>
