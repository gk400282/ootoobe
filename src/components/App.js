import React from "react";
import {Component} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import youtube from "../api/youtube";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };
    onVideoClick = (video) => {
        this.setState({selectedVideo: video});
    }
    onSearchSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params:{
                'q': term
            }
        });
        this.setState({videos: response.data.items}, () => {
            this.setState({selectedVideo: this.state.videos[0]});
        });
    }
    render(){
        return (
        <div className="ui container" style={{marginTop:"1rem"}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            <div className="ui stackable two column grid" id="main">
                <VideoPlayer video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
            </div>
        </div>
        );
    }
}

export default App;