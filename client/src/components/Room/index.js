import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "../Participant";
import styled from "styled-components";

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const VideoWrapperRemote = styled.div`
  display: flex;

  video {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  }
`;

const VideoWrapperLocal = styled.div`
  display: flex;
  border: 1px solid #c5986a;
  position: relative;
  bottom: 100px;
  right: 100px;
  width: auto;
  height: 10%;
  z-index: 11;
`;

const FullscreenButton = styled.button`
  position: relative;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 15px;
  background-color: transparent;
  border: 5px solid #c5986a;
  z-index: 12;
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
    <Participant
      key={participant.sid}
      participant={participant}
      local={false}
    />
  ));

  const handleFullscreen = elem => {
    console.log("fullscreen button triggered");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  return (
    <>
      <VideoWrapper>
        <VideoWrapperRemote>{remoteParticipants}</VideoWrapperRemote>
      </VideoWrapper>
    </>
  );
};

export default Room;
