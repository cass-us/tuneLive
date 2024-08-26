import backgroundVideo from '../assets/live-event.mp4';
import axios from 'axios';
import { useEffect, useState } from 'react';

const LiveEvent = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://channelo-api.dstv.com/channelo/en-za/video/konka-live.json');
        setVideoData(response.data);
      } catch (error) {
        console.error('Error fetching the video data:', error);
      }
    };

    fetchData();
  }, []);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-screen bg-black opacity-80 p-8">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center mt-12">
        <div className="text-white text-center p-8 bg-opacity-50 rounded">
          <h1 className="text-4xl font-bold">Live Events</h1>
          <h1 className="text-2xl mt-4">{videoData.title}</h1>
          <p className="mt-2">{videoData.description}</p>
        </div>
        <div className="mt-8">
          <video controls src={videoData.video_url} width="600">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default LiveEvent;
