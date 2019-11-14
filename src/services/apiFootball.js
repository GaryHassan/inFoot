const axios = require('axios');
const KEY = process.env.REACT_APP_API_KEY
const config = { "X-RapidAPI-Key": KEY };

// Récupérer les pays dispo dans l'API
export const getCountries = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://api-football-v1.p.rapidapi.com/v2/countries', { headers: config })
      .then(res => {
        resolve(res.data.api.countries)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les saisons dispo dans l'API
export const getSeasons = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://api-football-v1.p.rapidapi.com/v2/seasons', { headers: config })
      .then(res => {
        resolve(res.data.api.seasons)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les championnats dispo dans l'API
export const getLeagues = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://api-football-v1.p.rapidapi.com/v2/leagues', { headers: config })
      .then(res => {
        resolve(res.data.api.leagues)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer un championnat grâce à son ID
export const getLeagueById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagues/league/${id}`, { headers: config })
      .then(res => {
        resolve(res.data.api.leagues[0])
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les championnats en fonction de la saison
export const getLeaguesBySeason = (season) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagues/season/${season}`, { headers: config })
      .then(res => {
        resolve(res.data.api.leagues)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les championnats en fonction du pays et de la saison
export const getLeaguesByCountry = (country) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country.value}/${new Date().getFullYear()}`, { headers: config })
      .then(res => {
        resolve(res.data.api.leagues)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer une équipe grâce à son ID
export const getTeamByID = (team) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/teams/team/${team.team_id}`, { headers: config })
      .then(res => {

        resolve(res.data.api.teams[0])
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les équipe d'un championnat grâce a son ID
export const getTeamsByLeague = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`, { headers: config })
      .then(res => {
        resolve(res.data.api.teams)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les stats de tous les joueurs sur un match (fixture)
export const getPlayersMatchStats = (fixture) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/players/fixture/${fixture}`, { headers: config })
      .then(res => {
        resolve(res.data.api.players)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer l'effectif d'une équipe par saison
export const getTeamSquadBySeason = (team) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/players/squad/${team.team_id}/${new Date().getFullYear()}`, { headers: config })
      .then(res => {
        resolve(res.data.api.players)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les stats d'un joueur par saison
export const getPlayerStatsBySeason = (player, season) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/players/player/${player}/${season}`, { headers: config })
      .then(res => {
        resolve(res.data.api.players)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les stats de tous les joueurs d'une équipe par saison
export const getPlayersTeamStatsBySeason = (team, season) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/players/team/${team}/${season}`, { headers: config })
      .then(res => {
        resolve(res.data.api.players)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer tous les transferts d'un joueur
export const getPlayersTransfers = (player) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/transfers/player/${player}`, { headers: config })
      .then(res => {
        resolve(res.data.api.transfers)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer tous les transferts d'une équipe
export const getTeamTransfers = (team) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/transfers/team/${team.team_id}`, { headers: config })
      .then(res => {
        resolve(res.data.api.transfers)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer le classement d'un championnat
export const getRankingByLeague = (league) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${league.league_id}`, { headers: config })
      .then(res => {
        console.log(league);
        resolve(res.data.api.standings[0])
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les journées d'un championnnat
export const getRoundsByLeague = (league) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/${league}`, { headers: config })
      .then(res => {
        resolve(res.data.api.fixtures)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les scores en Live d'un championnat
export const getLiveScoresByLeague = (league) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/live/${league}`, { headers: config })
      .then(res => {
        resolve(res.data.api.fixtures)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les matchs d'une date définie
export const getMatchesByDate = () => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${new Date().toISOString().slice(0,10)}`, { headers: config })
      .then(res => {
        resolve(res.data.api.fixtures)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les matchs d'un championnat
export const getMatchesByLeague = (league) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league}`, { headers: config })
      .then(res => {
        resolve(res.data.api.fixtures)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les matchs d'une équipe
export const getMatchesByTeam = (team) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${team}`, { headers: config })
      .then(res => {
        resolve(res.data.api.fixtures)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer un match par son ID
export const getMatchById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${id}`, { headers: config })
      .then(res => {
        resolve(res.data.api.fixtures)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les évenements d'un match (cartons, buts, CSC, penalty, penalty raté, remplacement)
export const getMatchEvent = (fixture) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/events/${fixture}`, { headers: config })
      .then(res => {
        resolve(res.data.api.events)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer les compo d'avant match
export const getLineups = (fixture) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/lineups/${fixture}`, { headers: config })
      .then(res => {
        resolve(res.data.api.lineUps)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer toutes les stats d'un match
export const getAllStatsByMatch = (fixture) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/${fixture}`, { headers: config })
      .then(res => {
        resolve(res.data.api.statistics)
      })
      .catch(err => {
        reject(err);
      })
  })
}

// Récupérer toutes les stats d'une équipe d'un match
export const getTeamsStatsByMatch = (league, team, date) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api-football-v1.p.rapidapi.com/v2/statistics/${league}/${team}/${date}`, { headers: config })
      .then(res => {
        resolve(res.data.api.statistics)
      })
      .catch(err => {
        reject(err);
      })
  })
}