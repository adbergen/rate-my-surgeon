import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import SearchBar from "./SearchBar"

import styled from "styled-components";
import Sidebar from "./Sidebar.jsx";

class Profile extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <>
      <Sidebar />
      <SearchBar />
      <div style={{ height: "75vh" }} className="container">
        <div className="row" style={{ width: "61vh", padding: "25px" }}>
          <Greeting className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged in!
              </p>
            </h4>
            <button
              style={{
                width: "120px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                float: "left",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </Greeting>
        </div>
      </div>
      </>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Profile);

const Greeting = styled.div`
  border-radius: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.greetingBackgroundColor};
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.greetingTextColor};
  list-style: none;
`;