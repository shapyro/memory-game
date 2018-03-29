import React, { Component } from 'react';
import Square from '../Square';
import Header from '../Header';
import ponies from '../../ponies.json';
import './Main.css';

var shake;
var messageEffect;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ponies: ponies,
      clickedIDs: [],
    }
    this.clickSquare = this.clickSquare.bind(this);
    this.randomSquares = this.randomSquares.bind(this);
    this.checkID = this.checkID.bind(this);
  }

  clickSquare(id) {

    var message;

    if (this.checkID(id)) {

      shake = {
        animation: `shake .5s .0125s`
      }

      var idsReset = []
      var randoPonies = this.randomSquares(ponies);
      message='already guessed'

      var loseState = {
        clickedIDs: idsReset,
        ponies: randoPonies,
      }
      this.setState( loseState )
      
      this.props.currentScore(message);
      
    } 

    if (!this.checkID(id)) {

      shake = {};
      message = 'Correct'

      // add ID to clicked array and randomize ponies
      var ids = this.state.clickedIDs
      ids.push(id)
      var randomPonies = this.randomSquares(ponies);
      
      var winState = {
        clickedIDs: ids,
        ponies: randomPonies,
      }
      this.setState( winState )
      
      this.props.currentScore(message);
      
    }

  }

  checkID(id) {
    for (let element of this.state.clickedIDs) {
      if (element === id) {
        return true;
      } 
    }
    return false;
  }

  randomSquares(ponies) { 
    var i = 0
      , j = 0
      , temp = null

    for (i = ponies.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = ponies[i]
      ponies[i] = ponies[j]
      ponies[j] = temp
    }
    return ponies;
  }

  render() {
    return (
      <div className='main' style={shake}>

        {this.state.ponies.map(pony => (
          <Square
            clickSquare={this.clickSquare}
            id={pony.id}
            key={pony.id}
            img={pony.img}
          />
        ))}
      
      </div>
     
    )

  }

}

export default Main;
