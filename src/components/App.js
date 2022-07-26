import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./Videolist";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("flowers");

    useEffect (() => {
        setSelectedVideo(videos[0])
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eight wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="eight wide column">
                        <VideoList onVideoSelect= {setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
