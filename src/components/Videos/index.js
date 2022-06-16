import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVideos } from "../../selector/videos/selectVideos";
import { getListVideos } from "../../actions";
import VideoItem from "./VideoItem";

const Videos = () => {
  const videos = useSelector(selectVideos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListVideos());
  }, []);

  const handleVote = useCallback(async (id, type) => {
    // await vote(id, type);
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isEmpty) return <p>Empty.</p>;
  return (
    <>
      <ul aria-labelledby="videos-heading" style={{ listStyleType: "none" }}>
        {videos.map((video) => (
          <>
            <li key={video.id}>
              <VideoItem canVote onVote={handleVote} video={video} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Videos;
