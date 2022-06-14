import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVideos } from "../../selector/videos/selectVideos";
import { getListVideos } from "../../actions";
import videoService from "../../services/videos";
import VideoItem from "./VideoItem";

const Videos = ({ isLoading }) => {
  const videos = useSelector(selectVideos);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("testtt");
    dispatch(getListVideos());
  }, []);

  const handleVote = useCallback(async (id, type) => {
    // await vote(id, type);
  }, []);

  const isEmpty = videos.length === 0;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isEmpty) return <p>Empty.</p>;
  console.log("videos", videos);
  return (
    <>
      <ul aria-labelledby="videos-heading" style={{ listStyleType: "none" }}>
        {videos.map((video) => (
          <>
            <li key={video.id}>
              <VideoItem canVote onVote={handleVote} video={video} />
            </li>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
};

export default Videos;
