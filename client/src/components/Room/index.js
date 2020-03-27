import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import styled from "styled-components";
import Fullscreen from "react-full-screen";
import Participant from "../Participant";
import { FullscreenIcon } from "../../assets/fullscreen";

const StyledVideo = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;

  video {
    display: flex;
    height: inherit;
    width: auto;
  }
`;

const OverlayWrapper = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 0;
  right: 0;
  left: 0;

  video {
    border: 1px solid #c5986a;
    max-height: 30%;
    max-width: ${({ isFull }) => (isFull ? "30%" : "50%")};
  }
`;

const FullscreenButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
  z-index: 12;
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 21;

  svg {
    width: 100%;
    height: 100%;
    fill: #c5986a;
    z-index: 21;
  }
`;

const Room = ({ roomName, token }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isFull, setFull] = useState(false);

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
    console.log(isFull);
    setFull(!isFull);
  };

  return (
    <>
      <Fullscreen enabled={isFull} onChange={isFull => setFull(isFull)}>
        <StyledVideo>
          {remoteParticipants}

          <OverlayWrapper isFull={isFull}>
            {room ? (
              <Participant
                key={room.localParticipant.sid}
                participant={room.localParticipant}
              />
            ) : (
              ""
            )}
          </OverlayWrapper>
          <FullscreenButton onClick={handleFullscreen}>
            <FullscreenIcon />
          </FullscreenButton>
        </StyledVideo>
      </Fullscreen>
    </>
  );
};

export default Room;
