import React from 'react';
// import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
// import { Link } from "react-router-dom";
import styles from "./TeamInfo.module.css"
import { connect } from 'react-redux'

class TeamInfo extends React.Component {
    state = {
        teamSelected: []
    }



    render() {

        // const { teamSelected } = this.props;

        return (
            <>
                <div className={styles.bloc}>

                    <div className={styles.blocPhoto}>
                        <p className={styles.team}>{"Olympique de Marseille".toUpperCase()}</p>
                        <img src="https://medias.lequipe.fr/logo-football/6/200" alt="logo" />



                        <table className={styles.blocInfo}>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure>
                                            <img className={styles.Maillot}
                                                src="https://medias.lequipe.fr/maillot-football/6/1/100?ki"
                                                alt="1"
                                                title="Maillot domicile" />
                                            <img className={styles.Maillot}
                                                src="https://medias.lequipe.fr/maillot-football/6/2/100?ki"
                                                alt="2"
                                                title="Maillot extérieur" />
                                            <img className={styles.Maillot}
                                                src="https://medias.lequipe.fr/maillot-football/6/3/100?ki"
                                                alt="3"
                                                title="Maillot third" />
                                        </figure>
                                    </td>
                                </tr>
                            </tbody>

                            <tbody className={styles.blocTeamInfo}>
                                <tr>
                                    <td>Coach : <strong className={styles.Info}>André VILLAS-BOAS</strong></td>
                                </tr>
                                <tr>
                                    <td>Président : <strong className={styles.Info}>Jacques-Henri EYRAUD</strong></td>
                                </tr>
                                <tr>
                                    <td>Fondé en : <strong className={styles.Info}>1899</strong></td>
                                </tr>
                                <tr>
                                    <td>Stade : <strong className={styles.Info}>Stade Vélodrome - 67 500 places</strong></td>

                                </tr>
                                <tr>
                                    <td>
                                        <img className={styles.stadium}
                                            src="https://france3-regions.francetvinfo.fr/provence-alpes-cote-d-azur/sites/regions_france3/files/styles/top_big/public/assets/images/2018/12/22/maxsportsworldtwo319932-4010635.jpg?itok=Mv4LVcge" alt="vel"
                                            title="Stade Vélodrome" />
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>


                    <div className={styles.blocPalmares}>
                        <div className={styles.listePalmares}>
                            <h1 className={styles.Palmares}>Palmarès {"Olympique de Marseille".toUpperCase()} </h1>

                            <img className={styles.logoTrophee}
                                src="https://www.asmonaco.com/wp-content/uploads/2019/07/asmonaco-gambardella.png"
                                title="Coupe Gambardella"
                                alt="cup" />

                            <img className={styles.logoTrophee1}
                                src="https://www.asmonaco.com/wp-content/uploads/2019/07/l2-trophee-440x480.png"
                                title="Division 2"
                                alt="cup" />

                            <img className={styles.logoTrophee2}
                                src="https://www.asmonaco.com/wp-content/uploads/2019/07/asmonaco-cdl.png"
                                title="Coupe de la ligue"
                                alt="cup" />

                            <img className={styles.logoTrophee3}
                                src="https://www.asmonaco.com/wp-content/uploads/2019/07/asmonaco-cdf.png"
                                title="Coupe de France"
                                alt="cup" />

                            <img className={styles.logoTrophee4}
                                src="https://www.asmonaco.com/wp-content/uploads/2019/07/asmonaco-ligue1.png"
                                title="Championnat de France"
                                alt="cup" />

                            <img className={styles.logoTrophee5}
                                src="https://dh3y7oduconom.cloudfront.net/sites/default/files/styles/medium/public/thumbnails/image/trophee-champion-08.png?itok=QphgcHhv"
                                title="Trophée des champions"
                                alt="cup" />

                            <img className={styles.logoTrophee6}
                                src="https://www.asmonaco.com/wp-content/uploads/2019/07/asmonaco-c1.png"
                                title="Ligue des Champions"
                                alt="cup" />

                            {/* <p className={styles.anneeTrophee}>1993</p> */}
                        </div>

                    </div>
                </div>


            </>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        teams: state.teams
    }
}


export default connect(mapStateToProps, null)(TeamInfo);
