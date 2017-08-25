import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ''
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit= (event) => {
    event.preventDefault()
    let action = {type: 'ADD_BAND', band: this.state.text}
    this.props.store.dispatch(action)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.handleChange}/>
            <input type="submit" />
        </form>

      </div>
    );
  }
};




export default BandInput;
