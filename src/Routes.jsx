import React from 'react';
import { connect } from "react-redux";
import App from './App';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Resultats from './components/Resultats/Resultats';
// import addTeam from './containers/Admin/Teams/addTeams';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import { createBrowserHistory } from "history";
// import Infoot from './containers/Main/Infoot';
// import Login from './containers/Connexion/Login';
// import Championship from './components/Championship/Championship';
import { setCountrySelected } from "./store/actions/countries";
// import Team from './containers/Teams/Team';
import MatchDetails from './components/Match/MatchDetails';

const Routes = (props) => {
  // const { dispatchSetCountrySelected } = props
  const history = createBrowserHistory()
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={App} />
        <Route path="/Resultats/Live" exact component={(props) => <Resultats />} />
        {/* <Route path="/:league/:team" exact component={(props) => <Team />} /> */}
        <Route path="/Resultats/Match/:MatchID" exact component={(props) => <><Header /> <MatchDetails /> </>} />
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCountrySelected(id) {
    dispatch(setCountrySelected(id))
  }
})

export default withRouter(connect(mapDispatchToProps)(Routes));