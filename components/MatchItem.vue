<template>
  <div class="match-item">
    <div class="match-item__team">
      <div class="match-item__team-name">
        {{ match.equipe1 }}
      </div>
      <div class="match-item__team-score">
        {{ match.score1 }}
      </div>
    </div>
    <div class="match-item__team">
      <div class="match-item__team-score">
        {{ match.score2 }}
      </div>
      <div class="match-item__team-name">
        {{ match.equipe2 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchItem',
  props: {
    match: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.match-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
}
</style>
