import React, { Component } from 'react';
import Stats from './components/Stats';
import Race from './components/Race';
import Name from './components/Name';
import {statsObj, raceObj} from './objects';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      race: "human",
      stats: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
      }
    }
  }

  // This method turns the Name input into a controlled component.
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  // This method is passed to Race as a prop and is used to change the state of the App component based on a selector.
  handleRaceChange = (event) => {
    console.log(`User has changed this.state.race to '${event.target.value}'`);
    this.setState({
      race: event.target.value
    })
  }

  handleStatsChange = (event) => {
    console.log(`User has changed ${event.target.id} value to ${event.target.value}`);

    // Create a copy of the stats object and change only the property you want to change.
    let newStats = this.state.stats;
    console.log(event.target.id);
    newStats[event.target.id] = parseInt(event.target.value);

    this.setState({
      stats: newStats
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div className="col-md-4">
                <Name handleNameChange={this.handleNameChange}/>
                <Race id="race" race={this.state.race} handleRaceChange={this.handleRaceChange}/>
                <Stats race={this.state.race} stats={this.state.stats} handleStatsChange={this.handleStatsChange}/>
              </div>
              <div className="col-md-8">
                <p>Content in the right column.</p>
              </div>
          </form>
        </div> 
      </div>
    );
  }
}

export default App;
