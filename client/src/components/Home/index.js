import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import styled from "styled-components";
import Room from "../Room";

import { withFirebase } from "../Firebase";
import { withAuthorization, withEmailVerification } from "../Session";
import Messages from "../Messages";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { token: null, room: "", roomOpen: false };
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

  handleLogout = event => {
    this.setState({ token: null });
  };

  openVideoChat = () => {
    return (
      <Room
        roomName={this.state.room}
        token={this.state.token}
        handleLogout={this.handleLogout}
      />
    );
  };

  render() {
    return (
      <>
        <HomeWrapper>
          <h1>Home</h1>
          <button onClick={this.openVideoChat}>
            <p>Ohne ()</p>
          </button>
          <button onClick={this.openVideoChat()}>mit</button>
          {this.state.token === "" ? (
            <div>
              <h2>
                Momentan ist kein Videochat für sie verfügbar. Der Videochat
                wird verfügbar sobald Marcel ihn gestartet hat.
              </h2>
            </div>
          ) : (
            <div>
              <button onClick={this.openVideoChat}>
                <p>Ohne ()</p>
              </button>
              <button onClick={this.openVideoChat()}>mit</button>
            </div>
          )}
        </HomeWrapper>
      </>
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
