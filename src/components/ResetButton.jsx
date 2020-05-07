import React, { Component } from "react";

class ResetButton extends Component {
    render() {
        return (
            <button onClick={this.props.resetCount}>Reset</button>
        );
    }
}

export default ResetButton;