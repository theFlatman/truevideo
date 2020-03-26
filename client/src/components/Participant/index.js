import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const VideoWrapperRemote = styled.div`
  display: flex;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

const Fullscreen = styled.button`
  display: flex;
  width: 40px;
  height: 20px;
  background-color: transparent;
  border: 4px solid #c5986a;
  border-radius: 3px;
  z-index: ${fullscreen => (fullscreen ? "999" : "0")};
`;

const Participant = ({ participant, localRemote }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);

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

  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      <VideoWrapperRemote>
        <video ref={videoRef} autoPlay={true} />
      </VideoWrapperRemote>
      <audio ref={audioRef} autoPlay={true} muted={false} />
    </div>
  );
};

export default Participant;
