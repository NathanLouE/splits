import React, { Component } from "react";

class SplitButton extends Component {
    render() {
        return(
            <button id="splitBut" onClick={this.props.pushSplitTime}>Split!</button>
        )
    }
}

export default SplitButton;