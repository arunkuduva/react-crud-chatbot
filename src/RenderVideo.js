import React, { Component } from "react";
import { Player } from "video-react";

class RenderVideo extends Component {
  render() {
    return (
      <div>
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://s3.us-east-2.amazonaws.com/arunkuduva-videofiles/trailer_hd.mp4"
        />
      </div>
    );
  }
}

export default RenderVideo;
