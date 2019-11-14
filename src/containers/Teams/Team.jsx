import React from 'react';
import styles from './Team.module.css';
import { connect } from "react-redux"

class Team extends React.Component {

  render() {
    const { teamSelected, squad, teamTransfers } = this.props
    const orderedPositions = ['G', 'D', 'M', 'A'];
    const orderedPlayers = [];
    const randomKey = Math.random() + Math.random();

    // Gérer le format des dates
    // var date = new Date("2019-08-11T15:00:00+00:00");
    // console.log(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());



    orderedPositions.forEach(position => {
      squad.forEach(player => {
        if (player.position) {

          if (player.position.charAt(0) === position) {
            orderedPlayers.push(player)
          }
        }
      })
    })

    const teamSquad = orderedPlayers.map(player => {

      if (player.firstname && player.lastname !== "") {
        return <ul key={orderedPlayers.player_id}>
          <li><b>{player.position.charAt(0)}</b> - {player.firstname} {player.lastname}</li>
        </ul>
      }


      return null
    })



    const transfersOut = teamTransfers.map(transfer => {
      if (transfer.team_out.team_name === teamSelected.name) {
        return <ul key={orderedPlayers.player_id + randomKey}>
          <li><strong>{transfer.player_name}</strong>  <img className={styles.arrow} src="https://image.flaticon.com/icons/svg/98/98673.svg" alt=""></img> <strong>{transfer.team_in.team_name}</strong>  </li>
        </ul>
      }
      return null
    })

    // function cleanArray(teamTransfers) {
    //   var i, j, len = teamTransfers.length, out = [], obj = {};
    //   for (i = 0; i < len; i++) {
    //     obj[teamTransfers[i]] = 0;
    //   }
    //   for (j in obj) {
    //     out.push(j);
    //   }
    //   console.log(out);

    // }

    const transfersIn = teamTransfers.map(transfer => {
      if (transfer.team_out.team_name !== teamSelected.name) {
        return <ul key={orderedPlayers.lastUpdate}>
          <li><strong>{transfer.player_name}</strong> <img className={styles.arrow} src="https://image.flaticon.com/icons/svg/98/98673.svg" alt=""></img> <strong>{transfer.team_out.team_name}</strong> </li>
        </ul>
      }
      return null
    })




    return (
      <>

        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <p className={styles.teamName}>{teamSelected.name} - ({teamSelected.country})</p>
            <img className={styles.teamLogo} src={teamSelected.logo} alt=""></img>
            <div className={styles.Squad}>
              <h1>Effectif</h1>
              <hr className={styles.line} />
              {teamSquad}
            </div>
            <div className={styles.teamInfo}>
              <table>
                <tbody>
                  <tr>
                    <th>Nom : <b style={{ fontWeight: "bold" }}>{teamSelected.name}</b></th>
                  </tr>
                  <tr>
                    <th scope="col">Fondé en : <b style={{ fontWeight: "bold" }}>{teamSelected.founded}</b></th>
                  </tr>
                  <tr>
                    <th scope="col">Stade : <b style={{ fontWeight: "bold" }}>{teamSelected.venue_name}</b></th>
                  </tr>
                  <tr>
                    <th scope="col">Capacité : <b style={{ fontWeight: "bold" }}>{teamSelected.venue_capacity} places</b></th>
                  </tr>
                  <tr>
                    <th scope="col">Adresse du stade : <b style={{ fontWeight: "bold" }}>{teamSelected.venue_address}, {teamSelected.venue_city}</b></th>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className={styles.Transfers}>
              <div className={styles.transfersOut}>
                <h1>Départs</h1>
                <hr className={styles.line} />
                {transfersOut}
              </div>
              <div className={styles.transfersIn}>
                <h1>Arrivées</h1>
                <hr className={styles.line} />
                {transfersIn}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams.teams,
    teamSelected: state.teams.teamSelected,
    squad: state.squad.squad,
    teamTransfers: state.teams.teamTransfers
  }
}


export default connect(mapStateToProps)(Team);