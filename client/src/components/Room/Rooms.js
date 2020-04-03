import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

import { withFirebase } from "../Firebase";
import RoomList from "./RoomList";

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StyledDropdown = styled(Dropdown)`
  padding: 0.5rem;
  margin: 0.5rem;

  input:focus {
    color: transparent;
  }
`;

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      roomName: "",
      remoteUser: ""
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

  onListenForUsers = () => {
    this.props.firebase.users().on("value", snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
  };

  onListenForRooms = () => {
    this.props.firebase
      .rooms()
      .orderByChild("createdAt")
      .on("value", snapshot => {
        this.props.onSetRooms(snapshot.val());
      });
  };

  componentWillUnmount() {
    this.props.firebase.rooms().off();
    this.props.firebase.users().off();
  }

  onCreateRoom = async event => {
    event.preventDefault();
    const dataClient = await fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: this.state.remoteUser.name.split(" ").join(""),
        room: this.state.roomName
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    const dataHost = await fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: this.props.authUser.username.split(" ").join(""),
        room: this.state.roomName
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    this.props.firebase.rooms().push({
      roomName: this.state.roomName,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
      participants: {
        [this.props.authUser.uid]: {
          token: dataHost.token,
          name: this.props.authUser.username
        },

        [this.state.remoteUser.uid]: {
          token: dataClient.token,
          name: this.state.remoteUser.name
        }
      }
    });
    this.setState({ roomName: "" });
  };

  onRemoveRoom = uid => {
    this.props.firebase.room(uid).remove();
  };

  handleChange = (e, data) => {
    e.persist();
    this.setState({
      remoteUser: { uid: data.value, name: e.target.textContent }
    });
  };

  render() {
    const { rooms } = this.props;
    const { roomName, loading, remoteUser } = this.state;

    const users = this.props.users.map((user, i) => {
      return {
        key: i + 1,
        text: user.username,
        value: user.uid
      };
    });

    return (
      <div>
        <h3>Videosession erstellen</h3>
        {loading && <div>Loading ...</div>}

        <StyledForm onSubmit={event => this.onCreateRoom(event)}>
          <input
            type="text"
            value={roomName}
            onChange={e => this.setState({ roomName: e.target.value })}
            placeholder="Name der Videosession"
          />

          <StyledDropdown
            onChange={this.handleChange}
            options={users}
            placeholder="Kunde auswählen"
            search
            selection
            value={remoteUser.uid}
          />
          <button type="submit">Erstellen</button>
        </StyledForm>

        {rooms && <RoomList rooms={rooms} onRemoveRoom={this.onRemoveRoom} />}
        {!rooms && <div>Keine weiteren Räume ...</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  users: Object.keys(state.userState.users || {}).map(key => ({
    ...state.userState.users[key],
    uid: key
  })),
  rooms: Object.keys(state.roomState.rooms || {}).map(key => ({
    ...state.roomState.rooms[key],
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
