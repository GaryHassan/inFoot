import React from 'react';
import styles from './Results.module.css';
import { connect } from "react-redux";
import getAllMatchesByDate from "../../store/actionCreators/matches";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Sidebar from '../Sidebar/Sidebar';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";


class Resultats extends React.Component {

  render() {
    const { matches } = this.props
    const day = new Date()
    const showMatches = matches.map(match => {
      const date = new Date(match.event_date);

      return (
        <MDBCol key={match.fixture_id} md="9">
          <Link className={styles.Link} to={`/Resultats/Match/${match.fixture_id}`} >
            <div className={styles.Tableau} placeholder="Cliquez pour les détails du match !">
              <p>
                <b style={{ paddingLeft: "19px" }}>{date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</b>
                <i style={{ paddingLeft: "20%" }}>
                  <img className={styles.teamLogoHome} src={match.homeTeam.logo} alt="" />
                  {match.homeTeam.team_name} {match.score.fulltime ? <strong style={{ color: "red", fontWeight: 'bold' }}>{match.score.fulltime}</strong> : "-"}  {match.awayTeam.team_name}
                  <img className={styles.teamLogoAway} src={match.awayTeam.logo} alt="" /></i>
                <b style={{ paddingLeft: "95%" }}>{match.elapsed !== 0 ? match.elapsed + "'" : null}</b>
              </p>
              <div>


              </div>
            </div>
          </Link>

        </MDBCol>

      )

    })
    return (
      <>
        <Header />
        <Sidebar />
        <h1 className={styles.Title}>RESULTATS EN DIRECT</h1>
        <h3>Journée du <b>{day.getDate() + "/" + day.getMonth() + "/" + day.getFullYear()}</b> </h3>
        <div className={styles.Contenu}>

          <MDBContainer className={styles.Contenu}>
            <MDBRow style={{ width: '158%' }}>

              {showMatches}

            </MDBRow>

          </MDBContainer>
        </div>

        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    matches: state.matches.matches
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   dispatchGetMatchByDate() {
//     dispatch(getAllMatchesByDate())
//   }
// })


export default connect(mapStateToProps)(Resultats);