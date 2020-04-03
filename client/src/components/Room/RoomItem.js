import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { timeConverter } from "../../utilities/helperFunctions";

class RoomItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { room, onRemoveRoom } = this.props;
    const date = timeConverter(room.createdAt);

    return (
      <Table.Row>
        <Table.Cell>{room.roomName}</Table.Cell>
        {Object.entries(room.participants).map(([key, value]) => {
          return <Table.Cell key={key}>{value.name}</Table.Cell>;
        })}
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>
          <button type="button" onClick={() => onRemoveRoom(room.uid)}>
            Beenden
          </button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default RoomItem;
