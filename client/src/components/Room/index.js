import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "../Participant";
import styled from "styled-components";

const StyledRoom = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: no-wrap;
  flex-direction: column;
`;

const StyledRemote = styled.div`
  display: flex;
  height: 80vh;
  width: auto;
`;

const StyledLocal = styled.div`
  display: flex;
  height: auto;
  width: auto;
`;

const Room = ({ roomName, token }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then(room => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function(
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <>
      <StyledRoom>
        <button onClick={this.props.handleLogout}>VideoChat beenden</button>
        <StyledRemote>{remoteParticipants}</StyledRemote>
        <StyledLocal>
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
          ) : (
            ""
          )}
        </StyledLocal>
      </StyledRoom>
    </>
  );
};

export default Room;
