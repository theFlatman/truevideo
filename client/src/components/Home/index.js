import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Room from "../Room";

import { withFirebase } from "../Firebase";
import { withAuthorization, withEmailVerification } from "../Session";
import Messages from "../Messages";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { token: "", room: "", roomOpen: false };
  }

  componentDidMount() {
    this.props.firebase
      .user(this.props.authUser.uid)
      .once("value", snapshot => {
        this.setState({
          token: snapshot.val().token,
          room: snapshot.val().roomName
        });
      });
  }

  openVideoChat = () => {
    return <Room roomName={this.state.room} token={this.state.token} />;
  };

  render() {
    return (
      <>
        {this.state.token === "" ? (
          <div>
            <h2>
              Momentan ist kein Videochat für sie verfügbar. Der Videochat wird
              verfügbar sobald Marcel ihn gestartet hat.
            </h2>
          </div>
        ) : (
          <Room roomName={this.state.room} token={this.state.token} />
        )}
      </>
    );
  }
}
const condition = authUser => !!authUser;

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  rooms: state.roomState
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
