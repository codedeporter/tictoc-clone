import React, { useRef, useState } from "react";
// import arlingtonVideo from "./arlington-street-church-boston-establishing-footage-064207111_main_xxl.mp4";
import bostonSunsetVideo from "./production ID_5208988.mp4"
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    //if video is playing....stop it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      //otherwise if not playing.....play it

    } else {
      videoRef.current.play();
      setPlaying(true);
    }

  };
  return (
    <div className="video">
      <video
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={bostonSunsetVideo}
      ></video>

      <VideoFooter />
      <VideoSidebar />
    </div>
  );
};

export default Video;
