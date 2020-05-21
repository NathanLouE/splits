import React, { Component } from "react";

class StartButton extends Component {
  render() {
    return (
      <button id='startBut' onClick={this.props.startCount}>Start/Resume Timer</button>
    )
  }
}

export default StartButton;