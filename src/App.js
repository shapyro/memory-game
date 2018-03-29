import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Square from './components/Square';
import Main from './components/Main'
import ponies from './ponies.json'
import background from './sky2.png';
import MyLittlePony from './MY-LITTLE-PONY-RETRO-LOGO.png'
import './App.css';

const mainStyle = {
  backgroundImage: `url(${background})`
}

const bannerStyle = {
  backgroundImage: `url(${MyLittlePony})`
}

// begin App
class App extends Component {

  constructor(props) {
    super(props)
    this.
    state = {
      topScore: 0,
      score: 0,
      message: 'Click A Pony'
    };
    this.currentScore = this.currentScore.bind(this);
  }

  // update current score state
  currentScore = (newmessage) => {
    console.log(newmessage)

    // did they guess correct?
    if (newmessage === 'Correct') {
      var updateState = {
        score: this.state.score + 1,
        message: newmessage
      }
      if (updateState.score > this.state.topScore){
        var topScore = this.state.topScore + 1;
        updateState.topScore = topScore
      }
      this.setState( updateState )
    } else {
      var updateState = {
        score: 0,
        message: 'You Guessed Incorrect'
      }
      this.setState( updateState )
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header 
          title="Clicky Game"
          score={`Score: ${this.state.score}`}
          topScore={` | Top Score: ${this.state.topScore}`}
          message={this.state.message}
        />

        <div className="middle" style={mainStyle}>
          <div className="banner" style={bannerStyle}>
          </div>
          <h2>Click on a pony to earn points, but don't click on anypony more than once!</h2>
        </div>

        <Main
          currentScore={this.currentScore}
        />

      </div>
      
    );
  }
}

export default App;
