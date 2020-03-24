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
    console.log(this.state.token);
  }

  openVideoChat = () => {
    console.log("im inside the function");
    return <Room roomName={this.state.room} token={this.state.token} />;
  };

  render() {
    return (
      <>
        <HomeWrapper>
          <h1>Home</h1>
          {this.state.token === "" ? (
            <div>
              <h2>
                Momentan ist kein Videochat für sie verfügbar. Der Videochat
                wird verfügbar sobald Marcel ihn gestartet hat.
              </h2>
            </div>
          ) : (
            <Room roomName={this.state.room} token={this.state.token} />
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
