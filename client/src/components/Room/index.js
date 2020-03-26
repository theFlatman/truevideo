import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "../Participant";
import styled from "styled-components";

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const StyledLocal = styled.div`
  display: flex;
  height: 20%;
  width: 20%;
`;

const StyledRemote = styled.div`
  display: flex;
  height: ${({ fullscreen }) => (fullscreen ? "100%" : "50%")};
  width: ${({ fullscreen }) => (fullscreen ? "100%" : "50%")};
`;

const FullScreen = styled.button`
  display: flex;
  width: 40px;
  height: 20px;
  background-color: transparent;
  border: 4px solid #c5986a;
  border-radius: 3px;
`;

const Room = ({ roomName, token }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);

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

  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <>
      <VideoWrapper>
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
        <StyledRemote>
          {remoteParticipants}
          <FullScreen onClick={handleFullscreen} />
        </StyledRemote>
      </VideoWrapper>
    </>
  );
};

export default Room;
