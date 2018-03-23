import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Square from './components/Square';
import ponies from './ponies.json'
import './App.css';

class App extends Component {

  state = {
    ponies
  };

  render() {
    return (
      <Wrapper>
        <Header title="Clicky Game">

        </Header>

        {this.state.ponies.map(pony => (
          <Square
            id={pony.id}
            key={pony.id}
            img={pony.img}
          />
        ))}

      </Wrapper>
      
    );
  }
}

export default App;
