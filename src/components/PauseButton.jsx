import React, { Component } from "react";

class PauseButton extends Component {
  render() {
    return (
        <button onClick={this.props.pauseCount}>Pause</button>
    )
  }
}

export default PauseButton;