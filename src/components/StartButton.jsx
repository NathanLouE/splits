import React, { Component } from "react";

class StartButton extends Component{
    render() {
        return (
            <button onClick={this.props.StartCount}>Start</button>
        )
    }
}

export default StartButton;