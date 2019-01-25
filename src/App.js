import React, { Component } from 'react';
import Stats from './components/Stats';
import Race from './components/Race';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      race: "human"
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state.name);
  }

  // This method is passed to Race as a prop and is used to change the state of the App component based on a selector.
  handleRaceChange(event) {

  }


  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" onChange={this.handleNameChange}/>
          <Race />
          <Stats race={this.state.race}/>
        </form>
        
      </div>
    );
  }
}

export default App;
