import React from 'react';
import styles from './Championship.module.css';
import { Link } from "react-router-dom";
import { Router, Route } from 'react-router-dom';
import Team from '../../containers/Teams/Team';
// import * as show from '../../services/callTeams';
// import { Navbar, Nav } from 'react-bootstrap';

import { connect } from 'react-redux';

// import './node_modules/react-dropdown/style.css';
import { getLeagues, getRanking } from "../../store/actionCreators/leagues";
import { getTeams } from "../../store/actionCreators/teams";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { getTeamById } from '../../store/actionCreators/teams';
// import { setTeamSelected } from '../../store/actions/teams';
import getSquad from '../../store/actionCreators/squad';
import { getTransfers } from '../../store/actionCreators/teams';
import { createBrowserHistory } from "history";

class Championship extends React.Component {

  render() {
    const { leagueSelected, teams, dispatchGetTeamSelected } = this.props;
    const randomKey = Math.random() + 1 + Math.random();
    const history = createBrowserHistory()
    const showTeams = teams === [] ? null : teams.map(team => {
      return (
        <MDBCol key={team.team_id} onClick={() => dispatchGetTeamSelected(team)}>
          <Link className={styles.Link} to={`/${team.country}/` + leagueSelected.name.replace(/\s+/g, '-') + `/${team.name.replace(/\s+/g, '-')}`} >
            <img className={styles.teamLogo} src={team.logo} alt="" />
            <p className={styles.teamName}>{team.name.toUpperCase()} </p>

          </Link>
        </MDBCol>


      )
    })

    return (
      <>
        <Router history={history}>
          <div className={styles.navbar}>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow className={styles.leaguesRow}>
                {showTeams}
              </MDBRow>

            </MDBContainer>
          </div>

          <Route path="/:country/:league/:team" exact component={(props) => <Team />} />
        </Router>

      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    leagues: state.leagues.leagues,
    teams: state.teams.teams,
    leagueSelected: state.leagues.leagueSelected

  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchGetLeagues(country) {
    dispatch(getLeagues(country))
  },
  dispatchGetTeams(league) {
    dispatch(getTeams(league))
  },
  dispatchGetTeamSelected(team) {
    dispatch(getTeamById(team))
    dispatch(getSquad(team))
    dispatch(getTransfers(team))
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Championship);


