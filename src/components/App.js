import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  // selectedVideo State is initialized
  const [selectedVideo, setSelectedVideo] = useState(null);
  // Custom Hook. You give it an input (in our case, buildings), and it gives you back a list of videos.
  // So we create a hook called useVideos and give it buildings. Here we are expecting 2 variables in return, videos & search.
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      {/* Whenever a user submits a search term, (remember the first argument to onFormSubmit will be whatever the user typed in) that will call our search function in our hooks file.  */}
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
