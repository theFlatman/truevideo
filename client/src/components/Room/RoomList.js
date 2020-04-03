import React from "react";
import { Table } from "semantic-ui-react";
import RoomItem from "./RoomItem";

const RoomList = ({ rooms, onRemoveRoom }) => (
  <>
    <h2>Offene Videosessions</h2>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Videosession Name</Table.HeaderCell>
          <Table.HeaderCell>Trainer</Table.HeaderCell>
          <Table.HeaderCell>Kunde</Table.HeaderCell>
          <Table.HeaderCell>Datum</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rooms.map(room => (
          <RoomItem key={room.uid} room={room} onRemoveRoom={onRemoveRoom} />
        ))}
      </Table.Body>
    </Table>
  </>
);

export default RoomList;
