import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import Timer from './Timer';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import { Component } from 'react';
import ResetButton from './ResetButton';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      seconds: "0" + 0, // responsible for the seconds
      minutes: "0" + 0, // responsible for the minutes
      hours: 0, // responsible for hours
      secondsCounting: 0,
      split: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.tick = this.tick.bind(this);
    this.startCount = this.startCount.bind(this);
    this.pauseCount = this.pauseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.pushSplit = this.pushSplit.bind(this)
  }
    handleChange(event) {
      this.setState({
        minutes: event.target.value
      });
    }
    
    tick() {
      let hr = Math.floor((this.state.secondsCounting / 60) / 60)
      let min = Math.floor(this.state.secondsCounting / 60);
      let sec = this.state.secondsCounting - min * 60;
      let secCount = this.state.secondsCounting + 1;
      console.log("hr", hr, "min", min, "sec", sec); 
      this.setState({
        minutes: min,
        seconds: sec,
        hours: hr,
        secondsCounting: secCount
      });
  
      if (sec < 10) {
        this.setState({
          seconds: "0" + sec
        });
      }
      if (min < 10) {
        this.setState({
          minutes: "0" + min
        });
      }
      console.log("called");
    }

    startCount() {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.minutes;
      this.secondsRemaining = time * 60;
    }

    pauseCount() {
      clearInterval(this.intervalHandle)
    }
    
    resetCount() {
      clearInterval(this.intervalHandle);
      this.setState({
        seconds: "0" + 0, 
        minutes: "0" + 0, 
        hours: 0, 
        secondsCounting: 0
      })
    }

    pushSplit() {
      let splitList = this.state.split;
      splitList.push(document.getElementById("split").value)
      this.setState({
        split: splitList
      })
      console.log(splitList);
    }

    
  render(){
    const splitList = this.state.split.map(split => {
        return <li>{split}</li>;
      });
    console.log(splitList);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Speedrun Timer!</h1>
          <ol>{splitList}</ol>
          <Timer hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
          <input placeholder="Enter splits here!" id="split"></input>
          <button onClick={this.pushSplit}>Add Split</button>
          <StartButton startCount={this.startCount} />
          <PauseButton pauseCount={this.pauseCount} />
          <ResetButton resetCount={this.resetCount} />
        </header>
      </div>
    );
  }
}

export default App;
