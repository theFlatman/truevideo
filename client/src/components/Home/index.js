import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import { withAuthorization, withEmailVerification } from "../Session";
import Messages from "../Messages";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  componentDidMount() {
    if (!this.props.rooms.length) {
      this.setState({ loading: true });
    }

    this.onListenForRooms();
  }

  componentWillUnmount() {
    this.props.firebase.rooms().off();
  }

  onListenForRooms() {
    this.props.firebase
      .rooms()
      .orderByChild("createdAt")
      .on("value", (snapshot) => {
        this.props.onSetRooms(snapshot.val());

        this.setState({ loading: false });
      });
  }

  render() {
    const { rooms } = this.props;
    const { loading } = this.state;

    return (
      <>
        {loading && <div>Loading ...</div>}
        {rooms ? (
          rooms.map((room) => {
            if (room.participants[this.props.authUser.uid]) {
              return (
                <Link
                  key={room.uid}
                  to={`/home/room/${room.roomName}/${
                    room.participants[this.props.authUser.uid].token
                  }`}
                >
                  <button>{room.roomName}</button>
                </Link>
              );
            }
          })
        ) : (
          <div>
            <h2>
              Momentan ist kein Videochat für sie verfügbar. Der Videochat wird
              verfügbar sobald Marcel ihn gestartet hat.
            </h2>
          </div>
        )}
      </>
    );
  }
}
const condition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  rooms: Object.keys(state.roomState.rooms || {}).map((key) => ({
    ...state.roomState.rooms[key],
    uid: key,
  })),
});

const mapDispatchToProps = (dispatch) => ({
  onSetRooms: (rooms) => dispatch({ type: "ROOMS_SET", rooms }),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase,
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
