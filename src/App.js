import React, { Component } from 'react';
import Stats from './components/Stats';
import Race from './components/Race';
import Name from './components/Name';
import Alignment from './components/Alignment';
import HitPoints from './components/HitPoints';
import CharClass from './components/CharClass';
import {statsObj, raceObj, classObj} from './objects';

// App is the parent component for everything.
// State is concentrated here for two reasons: 1) possible implementation of Redux and 2) so that state can be exported/imported to save the hero into a database.

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: 1,
      race: "human",
      alignment: "NN",
      charClass: "fighter",
      hd: 10,
      bab: 1,
      stats: {
        strength: {input: 10, race: 0, total: 10},
        dexterity: {input: 10, race: 0, total: 10},
        constitution: {input: 10, race: 0, total: 10},
        intelligence: {input: 10, race: 0, total: 10},
        wisdom: {input: 10, race: 0, total: 10},
        charisma: {input: 10, race: 0, total: 10}
      },
      points: 0,
      raceModActive: true
    }
  }

  // This method turns the Name input into a controlled component.
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleAlignmentChange = (event) => {
    this.setState({
      alignment: event.target.value
    })
  }

  // This method is passed to Race as a prop and is used to change the state of the App component based on a selector.
  handleRaceChange = (event) => {
    console.log(`User has changed this.state.race to '${event.target.value}'`);

    // Create a copy of the stats object and change the stats you want to change.
    let newStats = this.state.stats;
    

    // Remove all stat mods from the previous race.
    for (let key in newStats) {
      newStats[key]["race"] = 0;
    }

    // Apply all stat mods from the new race.
    for (let key in raceObj[event.target.value]["mods"]) {
      newStats[key]["race"] += parseInt(raceObj[event.target.value]["mods"][key]);
    }

    // Adjust all stat totals to account for new mods.
    for (let stat in newStats) {
      newStats[stat]["total"] = newStats[stat]["input"] + newStats[stat]["race"];
    }

    this.setState({
      race: event.target.value,
      stats: newStats,
      raceModActive: raceObj[event.target.value]["raceModActive"]
    })
  }

  // This method is passed to CharClass as a prop and used to change the app state.
  handleCharClassChange = (event) => {
    let bab = Math.floor(classObj[event.target.value]["bab"] * this.state.level);
    let hd = classObj[event.target.value]["hd"];
    this.setState({
      charClass: event.target.value,
      bab: bab,
      hd: hd
    });
  }

  // This method is passed to Stats as a prop and is called to update state totals in the app state whenever the user changes it.
  handleRaceModChange = (event) => {
    let stat = event.target.dataset.stat;

    // Create a copy of the stats object and make changes to it before calling this.setState().
    let newStats = this.state.stats;
    newStats[stat]["race"] = parseInt(event.target.value);
    newStats[stat]["total"] = newStats[stat]["input"] + newStats[stat]["race"]

    this.setState({
      stats: newStats
    });
  }

  handleStatsChange = (event) => {
    console.log(`User has changed ${event.target.id} value to ${event.target.value}. Mod should be ${Math.floor((event.target.value-10)/2)}.`);

    // Create a copy of the stats object and change only the property you want to change.
    let newStats = this.state.stats;
    newStats[event.target.id]["input"] = parseInt(event.target.value);
    newStats[event.target.id]["total"] = newStats[event.target.id]["input"] + newStats[event.target.id]["race"];

    let buildCost = 0;

    for (let stat in newStats) {
      buildCost += statsObj[newStats[stat]["input"]]["cost"];
    }

    this.setState({
      stats: newStats,
      points: buildCost
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-4">

              <div className="card">

                <div className="card-header">
                  <Name 
                    handleNameChange={this.handleNameChange}
                  />
                  <Alignment 
                    alignment={this.state.alignment}
                    handleAlignmentChange={this.handleAlignmentChange}
                  />
                  <Race 
                    id="race" 
                    race={this.state.race} 
                    handleRaceChange={this.handleRaceChange}
                  />
                  <CharClass 
                    charClass={this.state.charClass}
                    handleCharClassChange={this.handleCharClassChange}
                  />
                </div>

                <div className="card-body">
                  <Stats 
                    race={this.state.race} 
                    stats={this.state.stats} 
                    points={this.state.points}
                    handleStatsChange={this.handleStatsChange} 
                    raceModActive={this.state.raceModActive} 
                    handleRaceModChange={this.handleRaceModChange}
                  />
                </div>

                <div className="card-footer" id="points">
                  <div className="row">
                    <div className="offset-6 col-3"><label>Points: </label></div>
                    <div className="col-3"><p>{this.state.points}</p></div>
                  </div>
                </div>

              </div>
              <div className="card">
                <div className="card-body">
                  <HitPoints />
                </div>
              </div>
                
            </div> {/* This is the end of the column.*/}
            
              <div className="col-8">
                <p>Content in the right column.</p>
              </div>
        </div> {/* This is the end of the row.*/}
      </div> 
    );
  }
}

export default App;
