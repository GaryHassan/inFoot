import { COUNTRIES, LEAGUES } from '../constants';

const initialState = {
  leagues: [],
  leagueSelected: {},
  ranking: [],
  error: false
}

const leagues = (state = initialState, action) => {
  switch (action.type) {
    case LEAGUES.GET_LEAGUES_SUCCESS:
      return {
        ...state,
        leagues: action.payload,
        error: false
      }

    case LEAGUES.GET_LEAGUES_FAILED:
      return {
        ...state,
        error: true
      }

    case LEAGUES.GET_RANKING_SUCCESS:
      return {
        ...state,
        ranking: action.payload,
        error: false
      }

    case LEAGUES.GET_RANKING_FAILED: 
      return {
        ...state,
        error: true
      }
    

    case LEAGUES.SET_SELECTED_LEAGUE:
      return {
        ...state,
        leagueSelected: action.payload,
        error: false
      }

    case COUNTRIES.GET_COUNTRY_SELECTED:
      return {
        ...state,
        leagueSelected: initialState.leagueSelected,
        ranking: initialState.ranking,
        error: false
      }

    default:
      return {
        ...state
      }
  }
}

export default leagues;