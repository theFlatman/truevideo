import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import Search from "react-search";

import { withFirebase } from "../Firebase";
import RoomList from "./RoomList";

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: "",
      remoteParticipant: "",
      remoteToken: "",
      loading: false
    };
  }

  componentDidMount() {
    if (!this.props.rooms.length && !this.props.users.length) {
      this.setState({ loading: true });
    }

    this.onListenForUsers();
    this.onListenForRooms();

    this.setState({ loading: false });
  }

  componentDidUpdate(props) {
    if (props.limit !== this.props.limit) {
      this.onListenForRooms();
    }
  }

  onListenForRooms = () => {
    this.props.firebase
      .rooms()
      .orderByChild("createdAt")
      .on("value", snapshot => {
        this.props.onSetRooms(snapshot.val());
      });
  };

  onListenForUsers = () => {
    this.props.firebase.users().on("value", snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
  };

  componentWillUnmount() {
    this.props.firebase.rooms().off();
    this.props.firebase.users().off();
  }

  onChangeRoomName = event => {
    this.setState({ roomName: event.target.value });
  };

  onUserSelected = event => {
    this.setState({ remoteParticipant: event.target.value });
  };

  onCreateRoom = async (event, authUser) => {
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
      roomName: this.props.user.username,
      roomCreatedAt: this.props.firebase.serverValue.TIMESTAMP
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

    this.props.firebase.rooms().push({
      roomName: this.state.roomName,
      participants: [authUser.username, this.state.remoteParticipant],
      token: this.state.remoteToken,
      createdAt: this.props.firebase.serverValue.TIMESTAMP
    });

    this.setState({ roomName: "" });

    event.preventDefault();
  };

  onRemoveRoom = uid => {
    this.props.firebase.room(uid).remove();
  };

  render() {
    const { rooms } = this.props;
    const { roomName, loading } = this.state;
    const users = this.props.users.map((user, i) => {
      return { id: i + 1, value: user.username };
    });

    return (
      <div>
        {loading && <div>Loading ...</div>}

        {rooms && <RoomList rooms={rooms} onRemoveRoom={this.onRemoveRoom} />}

        {!rooms && <div>Keine weiteren Räume ...</div>}

        <form onSubmit={event => this.onCreateRoom(event, this.props.authUser)}>
          <input
            type="text"
            value={roomName}
            onChange={this.onChangeRoomName}
          />
          <Search
            items={users}
            placeholder="Kunde auswählen"
            maxSelected={1}
            onItemsChanged={() => this.onUserSelected}
          />
          <button type="submit">Erstellen</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  rooms: Object.keys(state.roomState.rooms || {}).map(key => ({
    ...state.roomState.rooms[key],
    uid: key
  })),
  users: Object.keys(state.userState.users || {}).map(key => ({
    ...state.userState.users[key],
    uid: key
  }))
});

const mapDispatchToProps = dispatch => ({
  onSetRooms: rooms => dispatch({ type: "ROOMS_SET", rooms }),
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Rooms);
