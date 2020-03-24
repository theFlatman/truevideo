import React, { useState, useCallback } from "react";
import Room from "../Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const data = await fetch("http://localhost:5000/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      setToken(data.token);
    },
    [roomName, username]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = <div>Momentan ist kein VideoChat verbunden</div>;
  }

  return render;
};

export default VideoChat;
