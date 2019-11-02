// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBRClick =() => {
    // settings.bitrate to 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  render() {
    return (
      <button onClick={this.handleBRClick}className="bitrate"></button>
    )
  }
}
