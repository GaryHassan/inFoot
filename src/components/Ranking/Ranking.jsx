import React from 'react';
import { connect } from 'react-redux';
import BaseTable, { Column } from 'react-base-table'
import styles from "./Ranking.module.css"
import { Link } from "react-router-dom";


class Ranking extends React.Component {
  render() {
    const { ranking, leagueSelected } = this.props

    const showRanking = ranking.map(rank => {
      return <>
        <div className={styles.row}>

          <div className={styles.cell}>
            <b style={{ fontWeight: 'bold' }}>{rank.rank}</b>
          </div>
          <div className={styles.cell}>
            <Link style={{ fontWeight: 'bold', fontSize: '15px' }}><img className={styles.miniLogo} src={rank.logo} alt="" /> {rank.teamName} </Link>
          </div>
          <div className={styles.cell}>
            {rank.all.matchsPlayed}
          </div>
          <div className={styles.cell}>
            {rank.all.win}
          </div>
          <div className={styles.cell}>
            {rank.all.draw}
          </div>
          <div className={styles.cell}>
            {rank.all.lose}
          </div>
          <div className={styles.cell}>
            {rank.all.goalsFor}
          </div>
          <div className={styles.cell}>
            {rank.all.goalsAgainst}
          </div>
          <div className={styles.cell}>
            {rank.goalsDiff}
          </div>
          <div className={styles.cell}>
            {rank.points}
          </div>



        </div>



      </>

    })

    return (
      <>
        <div className={styles.Classement}>
          <div className={styles.table}>
            <div className={styles.row} style={{ backgroundColor: 'rgba(176, 215, 246, 0.616)', fontWeight: 'bold' }}>
              <div className={styles.cell}>#</div>
              <div className={styles.cell}>Equipe</div>
              <div className={styles.cell}>MJ</div>
              <div className={styles.cell}>V</div>
              <div className={styles.cell}>N</div>
              <div className={styles.cell}>D</div>
              <div className={styles.cell}>BP</div>
              <div className={styles.cell}>BC</div>
              <div className={styles.cell}>+/-</div>
              <div className={styles.cell}>pts</div>
            </div>
            {ranking.length !== 0 && showRanking}
          </div>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leagues.leagues,
    teams: state.teams.teams,
    leagueSelected: state.leagues.leagueSelected,
    ranking: state.leagues.ranking
  }

}
export default connect(mapStateToProps)(Ranking);