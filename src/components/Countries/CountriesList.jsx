import React from 'react';
// import { Redirect } from "react-router";
// import { BrowserRouter, Route, withRouter } from "react-router-dom";
import styles from './Countries.module.css';
// import { Link } from "react-router-dom";
// import * as show from '../../services/callTeams';
// import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import Select from 'react-dropdown-select';
import 'react-dropdown/style.css';
import { getLeagues } from "../../store/actionCreators/leagues";
import { setCountrySelected } from "../../store/actions/countries"
// import { resetWarningCache } from 'prop-types';
// import { clearLeague } from './../../store/actions/leagues'
import Infoot from '../../containers/Main/Infoot';




const CountriesList = (props) => {
  const { countries, selectCountry, selectedCountry, dispatchSetCountrySelected } = props;

  function onSelect(e) {
    if (e && Array.isArray(e) && e.length > 0) {
      selectCountry(e[0].value)
      props.dispatchGetLeagues(e[0])
      dispatchSetCountrySelected(e[0])


      // props.history.push(`${e[0].value}`)

    }
  }

  return (
    
    <>
      <div className={styles.dropdown}>
        <Select
          className={styles.select}
          placeholder="SELECTIONNE UN PAYS ..."
          placeholderClassName={styles.placeholder}
          options={countries && countries.length && countries.map(country => {
            return { value: country.country, label: country.country, code: country.code }
          })
          }

          value={{ value: selectedCountry ? selectedCountry.country : "", label: selectedCountry ? selectedCountry.country : "Pays selectionné" }}
          onChange={onSelect}
        />

      </div>

      <Infoot countrySelected={selectedCountry} />

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    leagues: state.leagues.leagues,
    teams: state.teams.teams,
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchGetLeagues(country) {
    dispatch(getLeagues(country))
  },
  dispatchSetCountrySelected(id) {
    console.log(id);

    dispatch(setCountrySelected(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);