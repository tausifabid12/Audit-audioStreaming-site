import { ActionTypes } from './ActionTypes';

export const initialState = {
  loading: false,
  error: false,
  songData: [],
  currentAudioInfo: {},
  isPlaying: false,
};

export const musicReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.Loading:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.SongData:
      return {
        ...state,
        songData: action.payload,
      };

    case ActionTypes.AddCurrentSongInfo:
      return {
        ...state,
        currentAudioInfo: action.payload,
      };
    case ActionTypes.IsSongPlaying:
      return {
        ...state,
        isPlaying: action.payload,
      };

    default:
      return state;
  }
};
