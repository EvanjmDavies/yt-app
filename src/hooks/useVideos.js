import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// Our default serachterm here is buildings
const useVideos = (defaultSearchTerm) => {
  // Step 1 initialize state
  const [videos, setVideos] = useState([]);

  // We need useEffect here because we want the program to run every time search gets updated
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Use effect will run this search function and we'll store our new data in the state videos
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // Store data in state
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
