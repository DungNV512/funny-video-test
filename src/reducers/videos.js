import {
  GET_LIST_VIDEOS,
  GET_LIST_VIDEOS_SUCCESS,
  GET_LIST_VIDEOS_FAILURE,
} from "../actions/types";

const initialState = {
  videos: [],
  isLoadingVideos: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_VIDEOS:
      return { ...state, isLoadingVideos: true };
    case GET_LIST_VIDEOS_SUCCESS:
      return { ...state, videos: [...action.payload.videos], isLoadingVideos: false };
    case GET_LIST_VIDEOS_FAILURE:
      return state;
    default:
      return state;
  }
};
