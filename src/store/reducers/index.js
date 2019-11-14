import { combineReducers } from 'redux';
import teams from './teams';
import countries from './countries';
import leagues from './leagues';
import squad from './squad';
import matches from './matches';

const rootReducer = combineReducers({
  countries,
  leagues,
  teams,
  squad,
  matches
});

export default rootReducer;