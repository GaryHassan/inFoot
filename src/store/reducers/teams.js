import { TEAMS, COUNTRIES } from '../constants';

const initialState = {
  teams: [],
  teamSelected: {},
  teamTransfers: [],
  error: false
}

const teams = (state = initialState, action) => {
  switch (action.type) {
    case TEAMS.GET_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        error: false
      }

    case TEAMS.GET_TEAMS_FAILED:
      return {
        ...state,
        error: true
      }

    case TEAMS.GET_TEAM_BY_ID_SUCCESS:
      return {
        ...state,
        teamSelected: action.payload,
        error: false
      }

    case TEAMS.GET_TEAM_BY_ID_FAILED:
      return {
        ...state,
        error: true
      }

    case TEAMS.GET_TEAM_TRANSFERS_SUCCESS:
      return {
        ...state,
        teamTransfers: action.payload,
        error: false
      }

    case TEAMS.GET_TEAM_TRANSFERS_FAILED:
      return {
        ...state,
        error: true
      }

    case COUNTRIES.GET_COUNTRY_SELECTED:
      return {
        ...state,
        teams: initialState.teams,
        teamSelected: initialState.teamSelected,
        teamTransfers: initialState.teamTransfers,
        error: false
      }
    default:
      return {
        ...state
      }
  }
}

export default teams;