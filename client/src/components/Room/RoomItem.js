import React, { Component } from "react";

class RoomItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { room, onRemoveRoom } = this.props;

    return (
      <li>
        <span>
          <strong>{room.roomName}</strong>
        </span>
        <span>
          <strong>{room.participants}</strong>
        </span>
        <span>
          <strong>{room.createdAt}</strong>
        </span>
        <span>
          <button type="button" onClick={() => onRemoveRoom(room.uid)}>
            Beenden
          </button>
        </span>
      </li>
    );
  }
}

export default RoomItem;
