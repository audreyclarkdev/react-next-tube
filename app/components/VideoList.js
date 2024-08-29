import React from 'react';
import { VideoListItem } from './VideoListItem';

export const VideoList = ({ videos, onVideoSelect }) => {
  
  console.log('videos: ', videos)
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>
}
