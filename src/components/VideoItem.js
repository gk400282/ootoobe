import React from "react";

const VideoItem = ({video, onVideoClick}) => {
    return(
        <div onClick = { e => onVideoClick(video) } style={{cursor: "pointer"}}>
            <img className="ui middle aligned tiny image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} key={video.id.videoId}/>
            <span>{video.snippet.title}</span>
            <div className="ui divider"></div>
        </div>
        );
}

export default VideoItem;