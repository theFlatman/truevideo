import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes("password");

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isSent: false };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return needsEmailVerification(this.props.authUser) ? (
        <div>
          {this.state.isSent ? (
            <p>
              Bestätigunsmail gesendet: Überprüfen Sie ihre Emails. Sehen Sie in
              ihrem Spam Ordner nach falls Sie die Email nicht finden können.
              Nachdem Sie ihre Email Adresse bestätigt haben laden sie bitte die
              Seite erneut.
            </p>
          ) : (
            <p>
              Bestätigen Sie ihre Email Adresse: Überprüfen Sie ihren Spam
              Ordner falls Sie die Bestätigunsmail nicht finden können oder
              senden Sie erneut eine Bestätigungsmail
            </p>
          )}

          <button
            type="button"
            onClick={this.onSendEmailVerification}
            disabled={this.state.isSent}
          >
            Bestätigunsmail senden
          </button>
        </div>
      ) : (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  return compose(withFirebase, connect(mapStateToProps))(WithEmailVerification);
};

export default withEmailVerification;
