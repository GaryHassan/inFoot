import React from 'react';
import { Link } from "react-router-dom";
import { getCountries } from "../../services/apiFootball";
import Championship from "../../components/Championship/Championship";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from "./Infoot.module.css"
import { connect } from "react-redux"
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { setLeagueSelected } from "../../store/actions/leagues";
import { getRanking } from "../../store/actionCreators/leagues";
import { getTeams } from "../../store/actionCreators/teams";
import { LOGO } from "../../store/constants"
import Ranking from "../../components/Ranking/Ranking"
// import addChampionship from '../Admin/Championships/addChampionship';
// import addTeam from '../Admin/Teams/addTeams';
// import Login from "../../containers/Login/Login";


class Infoot extends React.Component {
  state = {
    championships: [],
    teams: [],
    teamSelected: [],
    leagueSelected: {}
  }

  Logo(league) {
    if (league.logo !== null) {
      return league.logo
    }
    else {
      return LOGO.LEAGUE
    }
  }



  render() {
    const { leagues, dispatchSetLeagueSelected, leagueSelected, countrySelected, ranking } = this.props
    const { teams } = this.state

    const showLeagues = leagues.map(league => {
      console.log(league.name);
      return (
        <MDBCol key={league.league_id} onClick={() => {
          dispatchSetLeagueSelected(league);
        }}>
          <Link className={styles.Link} to={`/${league.country}/` + league.name.replace(/\s+/g, '-')} >
            <img className={styles.leagueFlag} src={this.Logo(league)} alt="" />
            <p className={styles.leagueName} >{league.name.toUpperCase()} <img className={styles.miniFlag} src={league.flag} alt="" /></p>
          </Link>
        </MDBCol>

      )
    })


    return (
      <>
        <Router>

          <div className={styles.home}>
            <div className={styles.Text}>
              <h1>InFoot ! Le futur du football <span role="img" aria-label="logo">⚽</span></h1>
              <h4>Toutes les informations de votre équipe préférée en temps réel ! </h4>
            </div>
          </div>

          <div className={styles.navbar}>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow className={styles.leaguesRow}>
                {leagues.length !== 0 && showLeagues}

              </MDBRow>
            </MDBContainer>

          </div>

          <Route path="/:country/:league" exact component={(props) => <Championship />} />
          <Route path="/:country/:league" exact component={(props) => <Ranking />} />
        </Router>


      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    teams: state.teams.teams,
    leagues: state.leagues.leagues,
    leagueSelected: state.leagues.leagueSelected,

  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchGetCountries() {
    dispatch(getCountries())
  },
  dispatchSetLeagueSelected(league) {
    dispatch(setLeagueSelected(league))
    dispatch(getRanking(league))
    dispatch(getTeams(league.league_id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Infoot);