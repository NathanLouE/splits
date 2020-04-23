import React, { Component } from "react";

class Timer extends Component{
  render() {
    return(
      <div>
        <h1>{this.props.hours}:{this.props.minutes}:{this.props.seconds}</h1>
      </div>
    )
  }
}

export default Timer;