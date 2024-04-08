import { useEffect } from "react";
import { useRef } from "react";
import "./player.css";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
export default function Player({ url, onClickNext, onClickPrive }) {
  //states
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationTime, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeBar, setVloumeBar] = useState(false);
  const [isReady, setIsReady] = useState(false);

  //refrance
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const animationFrame = useRef(null);

  // useEffect(() => {
  //   const seconds = Math.floor(audioPlayer?.current?.duration);
  //   setDuration(seconds);
  //   progressBar.current.max = seconds;
  // }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calcuDuration = (totalSec) => {
    if (totalSec === undefined || totalSec === null || totalSec === 0) {
      return "00:00";
    }
    const min = Math.floor(totalSec / 60);
    const returnMinValue = min < 10 ? `0${min}` : `${min}`;
    const sec = Math.floor(totalSec % 60);
    const returnSecValue = sec < 10 ? `0${sec}` : `${sec}`;

    return `${returnMinValue}:${returnSecValue}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
      setIsPlaying(false);
      cancelAnimationFrame(animationFrame.current);
    } else {
      audioPlayer.current.play();
      setIsPlaying(true);
      animationFrame.current = requestAnimationFrame(whilePlaying);
    }
  };

  const handleProgressBarChanges = () => {
    const temp = (progressBar.current.value / durationTime) * 100;
    progressBar.current.style.setProperty(
      "background-size",
      `${temp ? temp : 0}% 100%`
    );
    setCurrentTime(progressBar.current.value);
    audioPlayer.current.currentTime = currentTime;
  };

  const whilePlaying = () => {
    const temp = (progressBar.current.value / durationTime) * 100;
    progressBar.current.style.setProperty(
      "background-size",
      `${temp ? temp : 0}% 100%`
    );

    setCurrentTime(audioPlayer.current.currentTime);
    progressBar.current.value = audioPlayer.current.currentTime;
    animationFrame.current = requestAnimationFrame(whilePlaying);
  };

  const handleVolumeBarChanges = (e) => {
    if (e.target.value === "0") {
      setVloumeBar(true);
    } else {
      setVloumeBar(false);
    }
    audioPlayer.current.volume = e.target.value / 100;
    e.target.style.setProperty("background-size", `${e.target.value}%`);
  };

  const handleMuiteAudio = () => {
    console.log("clicks");
    if (!volumeBar) {
      audioPlayer.current.volume = 0;
      setVloumeBar(true);
    } else {
      audioPlayer.current.volume = 0.5;
      setVloumeBar(false);
    }
  };

  const handleCanPlay = () => {
    setIsReady(true);
    const seconds = Math.floor(audioPlayer?.current?.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  return (
    <>
      <div className={`container_player`}>
        <div className=" container_player_content">
          <div className="con">
            <div className="container_player_content_controls">
              <button
                className="btn_player"
                disabled={!isReady}
                onClick={onClickPrive}
              >
                <i className="fa-solid fa-backward"></i>
              </button>

              {!isReady ? (
                <>
                  <button
                    className="btn_player btn_player_play"
                    disabled={!isReady}
                  >
                    <Spinner animation="border" size="sm" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn_player btn_player_play"
                    onClick={handlePlayPause}
                    disabled={!isReady}
                  >
                    {isPlaying ? (
                      <i className="fa-solid fa-pause"></i>
                    ) : (
                      <i className="fa-solid fa-play"></i>
                    )}
                  </button>
                </>
              )}

              <button
                className="btn_player"
                disabled={!isReady}
                onClick={onClickNext}
              >
                <i className="fa-solid fa-forward"></i>
              </button>
            </div>
            <div className="container_player_content_progress">
              <div className="container_player_content_progress_current">
                <span> {calcuDuration(currentTime)}</span>
                <input
                  className="progress_bar"
                  ref={progressBar}
                  onChange={handleProgressBarChanges}
                  type="range"
                  defaultValue="0"
                />
                <span>
                  {durationTime &&
                    !isNaN(durationTime) &&
                    calcuDuration(durationTime)}
                </span>
              </div>
            </div>
            <div className="container_player_content_volume">
              <button className="btn_player" onClick={handleMuiteAudio}>
                {volumeBar ? (
                  <i className="fa-solid fa-volume-xmark"></i>
                ) : (
                  <i className="fa-solid fa-volume-high"></i>
                )}
              </button>
              <div className="volume_range">
                <input
                  className="volume_range_progress_bar"
                  type="range"
                  onChange={handleVolumeBarChanges}
                  defaultValue="100"
                />
              </div>
            </div>
          </div>
          <audio ref={audioPlayer} preload="metadata" onCanPlay={handleCanPlay}>
            <source src={url} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
}
