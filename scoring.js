function calculateScore(player) {
  switch (player.position) {
    case 'QB':
      return passingScore(player) + rushingScore(player)

    case 'RB':
      return (
        rushingScore(player) +
        receivingScore(player) +
        puntreturnScore(player) +
        kickreturnScore(player)
      )

    case 'WR':
      return (
        receivingScore(player) +
        rushingScore(player) +
        kickreturnScore(player) +
        puntreturnScore(player)
      )

    case 'TE':
      return receivingScore(player)

    default:
      return 0
  }
}

const passingScore = (player) => {
  const yards = player.stats.passing.yards / 25
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * 2

  return yards + touchdowns - interceptions
}

const rushingScore = (player) => {
  const yards = player.stats.rushing.yards / 10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * 3

  return yards + touchdowns - fumbles
}

const receivingScore = (player) => {
  const yards = player.stats.receiving.yards / 10
  const touchdowns = player.stats.receiving.touchdowns * 6
  const receptions = player.stats.receiving.receptions * 1

  return yards + touchdowns + receptions
}

const kickreturnScore = (player) => {
  const yards = player.stats.return.kickreturn.yards / 15
  const touchdowns = player.stats.return.kickreturn.touchdowns * 6
  const fumbles = player.stats.return.kickreturn.fumbles * 3

  return yards + touchdowns - fumbles
}

const puntreturnScore = (player) => {
  const yards = player.stats.return.puntreturn.yards / 15
  const touchdowns = player.stats.return.puntreturn.touchdowns * 6
  const fumbles = player.stats.return.puntreturn.fumbles * 3

  return yards + touchdowns - fumbles
}

module.exports = calculateScore
