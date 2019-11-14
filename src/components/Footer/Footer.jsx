import React from "react";
// import { Link } from 'react-router-dom';
import { MDBContainer, MDBFooter } from "mdbreact";
import styles from "./Footer.module.css"
// import { Button, ButtonToolbar } from "react-bootstrap";

const Footer = () => {
    return (
        <MDBFooter color="blue" className={styles.copyright}>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid >
                    <hr />
                    &copy; {new Date().getFullYear()} Copyright : inFoot
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;