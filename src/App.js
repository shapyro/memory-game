import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Square from './components/Square';
import Main from './components/Main'
import ponies from './ponies.json'
import './App.css';


class App extends Component {


  render() {
    return (
      <div>
        <Header title="Clicky Game">

        </Header>

        <Main>



        </Main>

      </div>
      
    );
  }
}

export default App;
