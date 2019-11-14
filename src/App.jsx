import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
// import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import styles from "./App.module.css";
import './reset.css';
import getChampionships from "./store/actionCreators/championships";
import { getAllCountries } from "./store/actionCreators/countries";
import { getTeams } from "./store/actionCreators/teams";
// import getLeagues from './store/actionCreators/leagues';
// import getAllLeagues from './store/actionCreators/allLeagues'
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import CountriesList from './components/Countries/CountriesList';
import getAllMatchesByDate from "../src/store/actionCreators/matches";

// import Infoot from './containers/Main/Infoot';
// import Championship from "./components/Championship/Championship"
// import Mercato from "./components/Mercato/Mercato";
// import Select from 'react-dropdown-select';
import Footer from './components/Footer/Footer';
// import AllChampionships from './components/Sidebar/allChampionships';
// import ErrorBoundary from "./components/Error/ErrorBoundary"
// import Notification from "./components/Notification/Notification"




class App extends Component {
  constructor(props) {
    super(props)
    // this.selectChampionship = this.selectChampionship.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }	//dans state ce sont les infos que je veux garder et initialisation à 0
  state = {
    championships: [],
    redirect: false,   // pour la redirection du btn admin 
    championshipSelected: {},
    teamSelected: {},
    countries: [],
    countrySelected: {},
    leagues: {}

  }

  componentDidMount() {
    this.props.dispatchGetCountries()
    this.props.dispatchGetAllMatches()

  }

  selectCountry(id) {
    const { countries } = this.props;
    // récuperer le championnat grace a son id
    const countrySelected = countries.find((country) => {
      return country.country === id
    })
    this.setState({ countrySelected })
  }


  selectTeam(id) {
    const { teams } = this.props;
    // récuperer le championnat grace a son id
    const teamSelected = teams.teams.find((team) => {
      return team._id === id
    })

    this.setState({ teamSelected })
  }

  


  render() {
    //destructuring de this.state.championships
    const { selectedCountry } = this.props;
    return (
      <>
        <div className={styles.App} >
         <Sidebar /> 
         <Header />
         

          <CountriesList
            history={this.props.history}
            countrySelected={selectedCountry}
            selectCountry={this.selectCountry}
          />
          
          <Footer handleClickAdmin={this.handleClickAdmin} />
          
        </div>
      </>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    teams: state.teams.teams,
    selectedCountry: state.countries.selectedCountry
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchGetChampionships() {
    dispatch(getChampionships())
  },
  dispatchGetTeams() {
    dispatch(getTeams())
  },
  dispatchGetCountries() {
    dispatch(getAllCountries())
  },
  dispatchGetAllMatches(){
    dispatch(getAllMatchesByDate())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);