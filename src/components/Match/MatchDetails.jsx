import React from 'react';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar"
import Footer from '../Footer/Footer';
import styles from './MatchDetails.module.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class MatchDetails extends React.Component {
  render() {
    return (
      <>
        
        <Header />
        <Sidebar />
        <div>Détails du match</div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetails);