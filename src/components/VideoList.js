import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
    const videolist = props.videos.map((video) => {
        return <VideoItem video={video} onVideoClick={props.onVideoClick} key={video.id.videoId}/>
    });
   
    return <div className="five wide column"><div className="ui items">{videolist}</div></div>;
}

export default VideoList;