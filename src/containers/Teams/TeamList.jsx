import React from 'react';
import styles from './Teams.module.css';
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { connect } from "react-redux";
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const style = {
    slideInRight: {
        animation: '0.7s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
}

const TeamList = (props) => {

    const { teams, championshipSelected } = props;
    let showTeams = null;


    teams.teams.filter(team => {
        return team;
    })


    if (championshipSelected && championshipSelected._id) {
        showTeams = teams.teams.filter(team => { return team.championship._id === championshipSelected._id })
    }

    const displayTeams = showTeams !== null ? showTeams.map(team => {
        return <MDBCol key={team._id}>
            <Link className={styles.teams} to={"/equipe/" + team.name.replace(/\s+/g, '-')}>
                <img className={styles.logo} alt="logo" src={`/images/${team.flag}`}></img><p className={styles.name}>{team.title.toUpperCase()}</p>
            </Link>
        </MDBCol>
    }) : null

    return (

        <div className={styles.title}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className={styles.teamsRow}>
                    <StyleRoot className={styles.teamsRow} style={style.slideInRight}>
                        {displayTeams}
                    </StyleRoot>


                </MDBRow>

                <MDBRow className={styles.rankRow}>
                    <MDBCol md="6">
                        <div className={styles.Ranking}>
                            <div className={styles.Rank}>
                                <h1>Classement de {championshipSelected.name} - Saison 2018/2019</h1>
                            </div>
                            <iframe
                                title="rank"
                                frameBorder="0"
                                scrolling="no"
                                width="1000"
                                height="850"
                                src={championshipSelected.ranking}
                            />
                        </div>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className={styles.Ranking}>
                            <div className={styles.Rank}>
                                <h1>Meilleurs buteurs de {championshipSelected.name} - Saison 2018/2019</h1>
                            </div>
                            <iframe
                                title="rank"
                                frameBorder="0"
                                scrolling="no"
                                width="800"
                                height="850"
                                src={championshipSelected.scorers}
                            />
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={styles.matchRow}>
                    <MDBCol md="12">
                        <div>
                            <div className={styles.Rank}>
                                <h1>Prochains matchs de {championshipSelected.name} - Saison 2019/2020</h1>
                            </div>
                            <iframe
                                title="rank"
                                frameBorder="0"
                                scrolling="no"
                                width="800"
                                height="500"
                                src={championshipSelected.nextMatch}
                            />
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        teams: state.teams
    }
}


export default connect(mapStateToProps, null)(TeamList);