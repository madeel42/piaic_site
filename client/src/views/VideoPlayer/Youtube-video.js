import React from 'react';
import YouTube from 'react-youtube';
import './VideoContainer.css'
 
class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '740',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        // videoId="RuYbBHHF4VM"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Example;