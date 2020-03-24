import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordChangeForm />
  </div>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const condition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),
  withEmailVerification,
  withAuthorization(condition)
)(AccountPage);
