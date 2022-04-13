const Status = require('./Status');
const playersMap = new Map();

/**
 * Split team in two players
 * @param {String} team 
 * @returns {Array} array of two players
 */
const splitTeam = (team) => {
  const players = team.split('-');

  return players;
};

/**
 * isFirstTeamWinner 
 * @param {Number} score1 
 * @param {Number} score2 
 * @returns {Boolean} true if the first team won, false otherwise
 */
const isFirstTeamWinner = (score1, score2) => {
  return score1 > score2;
};

/**
 * Update players in Map
 * @param {Map} map which contains the players and their stats
 * @param {String} team is a concatenation of two players names divided by a '-'
 * @param {Number} result defines as 0 if the team lost, 1 if the team won and 2 if the team is abandonned
 */
const updatePlayersMap = (team, result) => {
  const players = splitTeam(team);
  
  for (let player of players) {
    player = player.toUpperCase();
    if(result === 0) {
      if(playersMap.has(player)) {
        playersMap.set(player, {
          wonMatches: playersMap.get(player).wonMatches,
          lostMatches: playersMap.get(player).lostMatches + 1,
          abandonnedMatches: playersMap.get(player).abandonnedMatches
        });
      } else {
        playersMap.set(player, {
          wonMatches: 0,
          lostMatches: 1,
          abandonnedMatches: 0
        });
      }
    } else if(result === 1) {
      if(playersMap.has(player)) {
        playersMap.set(player, {
          wonMatches: playersMap.get(player).wonMatches + 1,
          lostMatches: playersMap.get(player).lostMatches,
          abandonnedMatches: playersMap.get(player).abandonnedMatches 
        });
      } else {
        playersMap.set(player, {
          wonMatches: 1,
          lostMatches: 0,
          abandonnedMatches: 0
        });
      }
    } else if(result === 2) {
      if(playersMap.has(player)) {
        playersMap.set(player, {
          wonMatches: playersMap.get(player).wonMatches,
          lostMatches: playersMap.get(player).lostMatches,
          abandonnedMatches: playersMap.get(player).abandonnedMatches + 1
        });
      } else {
        playersMap.set(player, {
          wonMatches: 0,
          lostMatches: 0,
          abandonnedMatches: 1
        });
      }
    }
  }
};

/**
 * Main function in order to format data
 * @param {Array} data, array of games
 * @returns {Map} playersMap which contains the players and their stats
 */
const main = (data) => {
  for(const game of data) {
    if(isFirstTeamWinner(game.score1, game.score2) && game.statut === Status.finished) {
      updatePlayersMap(game.equipe1, 1);
      updatePlayersMap(game.equipe2, 0);
    } else if(!isFirstTeamWinner(game.score1, game.score2) && game.statut === Status.finished) {
      updatePlayersMap(game.equipe2, 1);
      updatePlayersMap(game.equipe1, 0);
    } else if(game.statut === Status.abandonned) {
      updatePlayersMap(game.equipe1, 2);
      updatePlayersMap(game.equipe2, 2);
    }
  };

  return playersMap;
}

const replacer = map => {
  return Array.from(map, ([name, value]) => ({ name, value }));
};

module.exports = { main, replacer };