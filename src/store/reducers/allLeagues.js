import { ALL_LEAGUES } from '../constants';

const initialState = {
    allLeagues: [],
    error: false
}

const allLeagues = (state = initialState, action) => {
    switch (action.type) {
        case ALL_LEAGUES.GET_ALL_LEAGUES_SUCCESS:
            return {
                ...state,
                allLeagues: action.payload,
                error: false
            }

        case ALL_LEAGUES.GET_ALL_LEAGUES_FAILED:
            return {
                ...state,
                error: true
            }

        default:
            return {
                ...state
            }
    }
}

export default allLeagues;