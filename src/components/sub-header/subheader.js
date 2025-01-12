import React, { useState } from "react";
import "./Subheader.css"; // Include styles if applicable

const Subheader = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleAudio = () => {
    const audio = document.getElementById("myAudio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div id="sound">
        <audio id="myAudio">
          <source src="./Night.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <i className="fab fa-soundcloud sound-cloud"></i>
        <span>Sound</span>
        <div className="on-off">
          <span
            id="off"
            onClick={!isPlaying ? null : toggleAudio}
            style={{ display: isPlaying ? "none" : "inline" }}
          >
            OFF
          </span>
          <span
            id="on"
            onClick={isPlaying ? null : toggleAudio}
            style={{ display: isPlaying ? "inline" : "none" }}
          >
            ON
          </span>
        </div>
      </div>
      <div className="btns-container">
        <i
          className="fas fa-bars bars"
          onClick={toggleNav}
          style={{ display: isNavOpen ? "none" : "inline" }}
        ></i>
        <i
          className="fas fa-times times"
          onClick={toggleNav}
          style={{ display: isNavOpen ? "inline" : "none" }}
        ></i>
      </div>
      {isNavOpen && (
        <aside className="side-nav">
          {/* Navigation menu content */}
        </aside>
      )}
    </>
  );
};

export default Subheader;