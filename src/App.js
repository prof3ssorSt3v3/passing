import React, { Component } from 'react';
import List from './List';

class App extends Component {
    constructor(){
        super();
        this.state = {
            colour: 'orange'
        }
    }
    
    changeColourHandler = (ev) => {
        ev.preventDefault();
        this.changeColour('green');    
    }
    
    changeColour = (c) => {
        this.setState({colour: c});
    }
    
  render() {
    return (
      <div className="App">
            <button onClick={this.changeColourHandler}>
                Green
            </button>
            <p>The App colour is {this.state.colour }</p>
        
            <List   changeColour={this.changeColour} 
                    colour={this.state.colour} />
      </div>
    );
  }
}

export default App;
