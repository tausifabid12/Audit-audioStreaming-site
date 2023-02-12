import { ActionTypes } from './ActionTypes';

export const initialState = {
  loading: false,
  error: false,
  songData: [],
  currentAudioInfo: {},
};

export const musicReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.Fetching_Start:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.Fetching_Finished:
      return {
        ...state,
        loading: false,
        allSongData: action.payload,
      };
    case ActionTypes.Error:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionTypes.AddCurrentSongInfo:
      return {
        ...state,
        currentAudioInfo: action.payload,
      };

    default:
      return state;
  }
};
