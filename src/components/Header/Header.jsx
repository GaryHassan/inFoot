import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
// import Login from "../../containers/Connexion/Login";
class Header extends React.Component {
    render() {
        return (
            <>
                <div className={styles.logoBloc}>
                    <Link to="/">
                        <img className={styles.Logo} src="../infoot_logo.png" alt="" />
                    </Link>
                </div>

            </>
        )
    }
}

export default Header;
