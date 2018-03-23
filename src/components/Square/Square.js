import React from 'react';
import './Square.css'

const Square = props => (
  <div className="square">
    <div className="img-container">
      <img alt={props.id} src={props.img} />
    </div>
  </div>
);

export default Square;

    // state = {
    //   ponies: []
    // };

    // componentDidMount() {
    //   // this.loadPonies();
    // };

    // render() {
    //   return (
    //     <div> </div>
    //   );
    // }

