import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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

  video {
    position: relative;
    bottom: 100px;
    right: 100px;
    width: auto;
    height: 10%;
    z-index: 11;
  }
`;

const FullscreenButton = styled.button`
  position: relative;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 15px;
  background-color: transparent;
  border: 5px solid #c5986a;
  z-index: 11;
`;

const Participant = ({ participant, handleFullscreen, local }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = trackMap =>
    Array.from(trackMap.values())
      .map(publication => publication.track)
      .filter(track => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = track => {
      if (track.kind === "video") {
        setVideoTracks(videoTracks => [...videoTracks, track]);
      } else {
        setAudioTracks(audioTracks => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = track => {
      if (track.kind === "video") {
        setVideoTracks(videoTracks => videoTracks.filter(v => v !== track));
      } else {
        setAudioTracks(audioTracks => audioTracks.filter(a => a !== track));
      }
    };

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      {local ? (
        <VideoWrapperLocal>
          <video ref={videoRef} controls autoPlay={true} />
        </VideoWrapperLocal>
      ) : (
        <VideoWrapperRemote>
          <video ref={videoRef} controls autoPlay={true} />
          <FullscreenButton onClick={handleFullscreen} />
        </VideoWrapperRemote>
      )}
      <audio ref={audioRef} autoPlay={true} muted={false} />
    </div>
  );
};

export default Participant;
