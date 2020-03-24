import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      token: ""
    };
  }

  componentDidMount() {
    if (!this.props.user) {
      this.setState({ loading: true });
    }

    this.props.firebase
      .user(this.props.match.params.id)
      .on("value", snapshot => {
        this.props.onSetUser(snapshot.val(), this.props.match.params.id);

        this.setState({ loading: false });
      });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.props.user.email);
  };

  onCreateRoom = async event => {
    event.preventDefault();

    const dataClient = await fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: this.props.user.username.split(" ").join(""),
        room: this.props.user.username
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());

    this.props.firebase.user(this.props.match.params.id).set({
      ...this.props.user,
      token: dataClient.token,
      roomName: this.props.user.username
    });

    const dataHost = await fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: this.props.authUser.username.split(" ").join(""),
        room: this.props.user.username
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());

    this.props.firebase.user(this.props.authUser.uid).set({
      email: this.props.authUser.email,
      username: this.props.authUser.username,
      roles: this.props.authUser.roles,
      token: dataHost.token,
      roomName: this.props.user.username
    });

    this.props.history.push(ROUTES.HOME);
  };

  render() {
    const { user } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <h2>User ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-Mail:</strong> {user.email}
            </span>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
            <span>
              <button type="button" onClick={this.onSendPasswordResetEmail}>
                Passwort zurücksetzen
              </button>
              <button type="button" onClick={this.onCreateRoom}>
                VideoChat starten
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: (state.userState.users || {})[props.match.params.id],
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => ({
  onSetUser: (user, uid) => dispatch({ type: "USER_SET", user, uid })
});

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(UserItem);
