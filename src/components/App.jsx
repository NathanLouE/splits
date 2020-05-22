import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import Timer from './Timer';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import { Component } from 'react';
import ResetButton from './ResetButton';
import SplitButton from './SplitButton';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      seconds: "0" + 0, // responsible for the seconds
      minutes: "0" + 0, // responsible for the minutes
      hours: 0, // responsible for hours
      secondsCounting: 0,
      split: [],
      splitTimer: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.tick = this.tick.bind(this);
    this.startCount = this.startCount.bind(this);
    this.pauseCount = this.pauseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.pushSplit = this.pushSplit.bind(this);
    this.pushSplitTime = this.pushSplitTime.bind(this);
    this.pullSplit = this.pullSplit.bind(this);
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
      this.setState({timerOn: true})
      document.getElementById("startBut").disabled = true;
      document.getElementById("splitBut").disabled = false;
    }

    pauseCount() {
      clearInterval(this.intervalHandle)
      this.setState({timerOn: false})
      document.getElementById("startBut").disabled = false;
    }
    
    resetCount() {
      clearInterval(this.intervalHandle);
      this.setState({timerOn: false})
      document.getElementById("startBut").disabled = false;
      this.setState({
        seconds: "0" + 0, 
        minutes: "0" + 0, 
        hours: 0, 
        secondsCounting: 0
      })
    }

    pushSplitTime() {
      let splitTime = this.state.splitTimer;
      splitTime.push(this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds);
      this.setState({splitTimer: splitTime})
    }

    pushSplit() {
      let splitList = this.state.split;
      splitList.push(document.getElementById("split").value)
      this.setState({split: splitList})
      console.log(splitList);
    }

    pullSplit() {
      let splitList = document.getElementById("split").value;
      splitList.pop();
    }

  render() {
    const splitList = this.state.split.map(split => {
        return <li key={split.id}>{split}</li>;
      });
    const splitTimer = this.state.splitTimer.map(splitTime=> {
      return <li key={splitTime.id}>{splitTime}</li>
    })
    console.log(splitList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color: 'gold'}}>Speedrun Timer/Stopwatch</h1>
          <p style={{color:'yellow'}}>By Nathan Louie</p>
          <Timer hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
          <div id='container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div id='butContainer' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <input placeholder="Enter splits here!" id="split"></input>
            <button id='splitBut' onClick={this.pushSplit}>Add Split</button> 
              <StartButton startCount={this.startCount} />
              <PauseButton pauseCount={this.pauseCount} />
              <ResetButton resetCount={this.resetCount} />
              <SplitButton pushSplitTime={this.pushSplitTime} />
            </div>  
          
            <div id='splitContainer' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <ol id='splitList' style={{marginRight: 50, marginLeft: 50}}>{splitList}</ol> 
              <ol id="splitTimer" style={{}}>{splitTimer}</ol>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;