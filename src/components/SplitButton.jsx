import React, { Component } from "react";

class SplitButton extends Component {
    render() {
        return(
            <button onClick={this.props.split}>Split!</button>
        )
    }
}

export default SplitButton;