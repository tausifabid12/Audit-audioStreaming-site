import React, { useEffect, useRef, useState } from 'react';
import {
  MdPlayCircle,
  MdFastForward,
  MdFastRewind,
  MdPauseCircle,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
} from 'react-icons/md';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';

const Player = () => {
  //states
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);

  // getting song info from global state
  const { state, dispatch } = useMusicData();

  //references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const volumeBar = useRef();
  const animateProgressBar = useRef();

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const formateMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const formateSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${formateMinutes}:${formateSeconds}`;
  };

  useEffect(() => {
    if (state?.currentAudioInfo?.audioUrl) {
      audioPlayer.current.load();
      setCurrentDuration(0);
      dispatch({
        type: ActionTypes.IsSongPlaying,
        payload: true,
      });
    } else {
      return;
    }

    const seconds = Math.floor(audioPlayer?.current.duration);
    setTrackDuration(seconds);
    progressBar.current.max = seconds;
  }, [state?.currentAudioInfo?.audioUrl]);

  useEffect(() => {
    if (state?.isPlaying) {
      audioPlayer.current.load();
      audioPlayer.current.play();
      audioPlayer.current.currentTime = currentDuration;
      animateProgressBar.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animateProgressBar.current);
    }
  }, [state?.isPlaying]);

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentDuration(progressBar.current.value);
    animateProgressBar.current = requestAnimationFrame(whilePlaying);
  };

  const handleRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentDuration(progressBar.current.value);
  };

  const handleVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value / 100;
  };

  return (
    <section
      className={`${
        state?.currentAudioInfo?.audioUrl ? 'fixed' : 'hidden'
      } bottom-0 w-full h-24 bg-[#1818183d]  backdrop-blur-md z-50`}
    >
      <audio
        ref={audioPlayer}
        src={state?.currentAudioInfo?.audioUrl}
        preload="metadata"
      ></audio>
      <div className="w-full flex justify-center items-start space-x-5 px-6 ">
        <p className="text-md text-white font-semibold">
          {currentDuration &&
            !isNaN(currentDuration) &&
            calculateTime(currentDuration)}
        </p>
        <input
          ref={progressBar}
          type="range"
          defaultValue={0}
          onChange={handleRange}
          className="range range-xs range-primary h-1 mt-3 grid "
        />
        <p className="text-md text-white font-semibold">
          {trackDuration && !isNaN(trackDuration)
            ? calculateTime(trackDuration)
            : '2:00'}
        </p>
      </div>
      <div className="grid grid-cols-3 px-7 place-content-center mt-3">
        <div className="flex items-center">
          <div className="pl-2">
            <p className="text-sm lg:text-lg text-gray-400 font-semibold">
              {state?.currentAudioInfo?.songName}
            </p>
            <p className="text-sm text-gray-600">
              {state?.currentAudioInfo?.artistName}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-6 text-white text-4xl">
          <p>
            <MdFastRewind />
          </p>
          {/* play button */}

          {state?.isPlaying ? (
            <p
              onClick={() => {
                dispatch({
                  type: ActionTypes.IsSongPlaying,
                  payload: !state?.isPlaying,
                });
              }}
            >
              <MdPauseCircle />
            </p>
          ) : (
            <p
              onClick={() => {
                dispatch({
                  type: ActionTypes.IsSongPlaying,
                  payload: !state?.isPlaying,
                });
              }}
            >
              <MdPlayCircle />
            </p>
          )}

          {/* --------------- */}
          <p>
            <MdFastForward />
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p className="text-2xl text-white mr-2">
            <MdVolumeUp />
          </p>
          <input
            ref={volumeBar}
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            onChange={handleVolume}
            className="range range-xs range-primary w-24 h-[6px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Player;
