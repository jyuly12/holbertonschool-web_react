import React, { Component } from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.logo)} />
        <h1>School dashboard</h1>

        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#E3334D'
    },

  logo: {
    height: '10.5rem'
  },
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },

})
Header.contextType = AppContext;
export default Header;