import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
// import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import styles from "../../App.module.css";
import Header from "../Header/Header";
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
// import getAllLeagues  from "../../store/actionCreators/allLeagues"
class AllChampionships extends Component {
    state = {
      leagues: []
    }
    // componentDidMount() {
    //   dispatchGetAllLeagues()
    //   // this.props.dispatchGetAllLeagues()

    // }

    render() {

      return (
        <>
          <div className={styles.App} >
            <Header />
            <Sidebar />
            <div>
              ...................Championnats
          </div>
            <Footer handleClickAdmin={this.handleClickAdmin} />
          </div>
        </>
      )
    }


  }
const mapStateToProps = (state) => {
  return {
    leagues: state.leagues.allLeagues
  }
}

const mapDispatchToProps = (dispatch) => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(AllChampionships);