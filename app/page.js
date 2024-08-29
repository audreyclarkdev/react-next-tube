'use client';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { VideoDetail } from './components/VideoDetail';
import { VideoList } from './components/VideoList';
import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default function Home() {
  const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (selectedVideo) => {
    setSelectedVideo(selectedVideo);
  };

  const videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video',
    };

    if (term.length >= 3){
      axios
        //.get('./data.json', { params })
        .get(url, { params })
        .then((response) => {
          console.log(response.data.items);
          setVideos(response.data.items);
          setSelectedVideo(response.data.items[0]);
        })
        .catch((error) => { 
          console.error(error);
        });
    }
  };

  return (
    <div className='row justify-content-center'>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};