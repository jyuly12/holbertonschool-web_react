import React, { Component } from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../actions/uiActionCreators";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;

    return (
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.logo)} />
        <h1>School dashboard</h1>

        {user && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logout} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

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

function mapStateToProps(state){
  return {
    user: state.get("user")
  }
};
const stateProps = {
  logout,
}
export default connect(mapStateToProps, stateProps)(Header);
