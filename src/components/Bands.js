import React, { Component } from 'react';

class Bands extends Component {
  makeBandLis(){
    if (this.props.store.getState().bands){
      debugger
      return this.props.store.getState().bands.map(band => <li>{band}</li>)
    }
  }
  render(){
    console.log('BANDS STATE', this.props.store.getState())
    return (
      <div>
        <ul>
          {this.makeBandLis()}
        </ul>
      </div>
    );
  }
};

export default Bands;
