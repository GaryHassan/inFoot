import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Button from 'react-bootstrap/Button';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidebar extends React.Component {
  render() {
    return (

      <SideNav className={styles.Sidebar} style={{ backgroundColor: 'rgb(176,214,246)', width: '3%', height: '100%' }}>

        <SideNav.Toggle className={styles.sidebarToggle} />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Link to='/'>
                <img
                  alt="logo"
                  src="https://img.icons8.com/wired/45/000000/home-page.png"
                />
              </Link>
            </NavIcon>
            <NavText style={{ color: 'white', fontSize: '1.1em' }}>
              <Link to="/">Accueil</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="championships">
            <NavIcon>
              <img
                alt="logo"
                src="https://img.icons8.com/pastel-glyph/45/000000/football2.png"
              />
            </NavIcon>
            <NavText style={{ color: 'white', fontSize: '1.1em' }}>
              Championnats
                        </NavText>
            <NavItem eventKey="allChampionships">
              <NavText>
                <Link to='/allChampionships' style={{ textDecoration: 'none', fontSize: '1em' }}>Ajouter un championnat</Link>
              </NavText>
            </NavItem>
            {/* <NavItem eventKey="championships/updateChamp">
                                <NavText>
                                    <Link to="/updateChampionship">Modifier un championnat</Link>
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="championships/deleteChamp">
                                <NavText>
                                    <Link to="/deleteChampionship"> Supprimer un championnat</Link>
                                </NavText>
                            </NavItem> */}
          </NavItem>
          <NavItem eventKey="teams">
            <NavIcon>
              <img alt='logo' src="https://img.icons8.com/ios/45/000000/teams.png"></img>
            </NavIcon>
            <NavText style={{ color: 'white', fontSize: '1.1em' }}>
              Equipes
            </NavText>
            <NavItem eventKey="teams/addTeam">
              <NavText>
                <Link to="/addTeam" style={{ textDecoration: 'none', fontSize: '1.1em' }}>Ajouter une équipe</Link>
              </NavText>
            </NavItem>
            {/* <NavItem eventKey="teams/updateTeam">
                            <NavText>
                                <Link to="/" style={{ textDecoration: 'none' }}>Modifier une équipe</Link>

                            </NavText>
                        </NavItem>
                        <NavItem eventKey="teams/deleteTeam">
                            <NavText>
                                <Link to="/" style={{ textDecoration: 'none' }}> Supprimer une équipe</Link>
                            </NavText>
                        </NavItem> */}

          </NavItem>
          <NavItem eventKey="mercato">
            <NavIcon>
              <Link to='/mercato'>
                <img
                  alt="logo"
                  src="https://img.icons8.com/wired/45/000000/transfer-between-users.png"
                />
              </Link>
            </NavIcon>
            <NavText style={{ color: 'white', fontSize: '1.1em' }}>
              Mercato
                        </NavText>
            <NavItem eventKey="teams/addTeam">
              <NavText>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '1.1em' }}>Actualités</Link>
              </NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="resultats">
            <NavIcon>
              <Link to='/resultats'>
                <img
                  alt="logo"
                  src="https://img.icons8.com/ios/45/000000/test-results.png"
                />
              </Link>
            </NavIcon>
            <NavText style={{ color: 'white', fontSize: '1.1em' }}>
              Résultats
            </NavText>
            <NavItem eventKey="Resultats/Live">
              <NavText>
                <Link to="/Resultats/Live" style={{ textDecoration: 'none', fontSize: '1.1em' }}>
                  <Button style={{ fontSize: '10px', width: '29px', textAlign: 'center', padding: '3px' }} variant="danger">LIVE</Button>  Résultats en direct
                </Link>
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}
export default Sidebar;

