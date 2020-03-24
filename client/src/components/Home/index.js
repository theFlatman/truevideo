import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import VideoChat from "../VideoChat";
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
    this.setState({ roomOpen: true });
  };

  renderVideoChat = () => {
    if (this.state.token) {
      return <button onClick={this.openVideoChat}>VideoChat</button>;
    }
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.renderVideoChat()}
        <p>The Home Page is accessible by every signed in user.</p>
        {this.state.roomOpen ? (
          <Room roomName={this.state.room} token={this.state.token} />
        ) : (
          <div>
            <h2>Video Room not open</h2>
          </div>
        )}
        <Messages />
      </div>
    );
  }
}
const condition = authUser => !!authUser;

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
