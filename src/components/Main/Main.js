import React, { Component } from 'react';
import Square from '../Square'
import ponies from '../../ponies.json'
import './Main.css'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ponies: ponies,
      clickedIDs: []
    }
    this.clickSquare = this.clickSquare.bind(this);
    this.randomSquares = this.randomSquares.bind(this);
  }

  clickSquare(id) {
    console.log(this)
    var ids = this.state.clickedIDs.push(id)
    var randomPonies = this.randomSquares(ponies);

    var newState = {
      clickedIDs: ids,
      ponies: randomPonies
    }
    this.setState({ newState })
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
  }

  render() {
    return (
      <div className="main">

        {this.state.ponies.map(pony => (
          <Square
            clickSquare={this.clickSquare}
            randomSquares={this.randomSquares}
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
