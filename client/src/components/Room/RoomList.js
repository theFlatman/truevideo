import React from "react";

import RoomItem from "./RoomItem";

const RoomList = ({ rooms, onRemoveRoom }) => (
  <ul>
    {rooms.map(room => (
      <RoomItem
        key={room.uid}
        room={room}
        participants={room.participants}
        onRemoveRoom={onRemoveRoom}
      />
    ))}
  </ul>
);

export default RoomList;
