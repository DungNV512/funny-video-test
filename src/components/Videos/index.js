import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVideos } from '../../selector/videos/selectVideos';
import { getListVideos } from '../../actions';
import VideoItem from './VideoItem';

const Videos = () => {
  const [isLoading, setIsLoading]= useState(true)
  const videos = useSelector(selectVideos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListVideos());
    setIsLoading(false)
  }, [dispatch]);

  const handleVote = useCallback(async (id, type) => {
    // await vote(id, type);
  }, []);

  const isEmpty = videos.length === 0;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isEmpty) return <p>Empty.</p>;

  return (
    <>
      <ul aria-labelledby="videos-heading" style={{ listStyleType: 'none' }}>
        {videos.map((video) => (
          <li key={video.id}>
            <VideoItem canVote onVote={handleVote} video={video} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Videos;
