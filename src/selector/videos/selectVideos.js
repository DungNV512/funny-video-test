import { createSelector } from "reselect";

const videoSelector = (state) => state.videoReducer;

export const selectVideos = createSelector(
  videoSelector,
  (state) => state.videos
);
