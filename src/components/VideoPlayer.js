import React from "react";

const VideoPlayer = ({video}) => {
    if(!video){
        return <div>You haven't searched anything yet.</div>;
    }
    
    return (
            <div className="eleven wide column">
                <div className="ui card" style={{width: "100%"}}>
                  <div className="ui embed">
                    <iframe title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`} allowFullScreen="1" frameBorder="0"></iframe>
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.youtube.com/">{video.snippet.title}</a>
                    <div className="meta">
                      <span className="date">{video.snippet.publishedAt}</span>
                    </div>
                    <div className="description">
                      {video.snippet.description}
                    </div>
                  </div>
                  <div className="extra content">
                      {video.kind}
                  </div>
              </div>
            </div>
            );
}

export default VideoPlayer;