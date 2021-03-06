import React, { Component } from 'react';
import Stats from './components/stats/Stats';
import Information from './components/Information';
import Defense from './components/Defense';
import Offense from './components/Offense';
import SkillsTable from './components/SkillsTable';
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
      size: "medium",
      stats: {
        strength: {
          input: 10, 
          race: 0, 
          total: 10
        },
        dexterity: {
          input: 10, 
          race: 0, 
          total: 10
        },
        constitution: {
          input: 10, 
          race: 0, 
          total: 10
        },
        intelligence: {
          input: 10, 
          race: 0, 
          total: 10
        },
        wisdom: {
          input: 10, 
          race: 0, 
          total: 10
        },
        charisma: {
          input: 10, 
          race: 0, 
          total: 10
        }
      },
      skills: {
        "Acrobatics": 0,
        "Appraise": 0,
        "Bluff": 0,
        "Climb": 0,
        "Craft": 0,
        "Diplomacy": 0,
        "Disable Device": 0,
        "Disguise": 0,
        "Escape Artist": 0,
        "Fly": 0,
        "Handle Animal": 0,
        "Heal": 0,
        "Intimidate": 0,
        "Kn: Arcana": 0,
        "Kn: Dungeoneering": 0,
        "Kn: Engineering": 0,
        "Kn: Geography": 0,
        "Kn: History": 0,
        "Kn: Local": 0,
        "Kn: Nature": 0,
        "Kn: Nobility": 0,
        "Kn: Planes": 0,
        "Kn: Religion": 0,
        "Linguistics": 0,
        "Perception": 0,
        "Perform": 0,
        "Profession": 0,
        "Ride": 0,
        "Sense Motive": 0,
        "Sleight of Hand": 0,
        "Spellcraft": 0,
        "Stealth": 0,
        "Survival": 0,
        "Swim": 0,
        "Use Magic Device": 0
      },
      skillsFilter: "class",
      points: 0,
      ac: {
        armor: 0,
        shield: 0,
        deflection: 0,
        dodge: 0,
        luck: 0,
        sacred: 0,
        natural: 0,
        morale: 0,
        insight: 0
      },
      raceModActive: true
    }
  }

  calculateStatMod = (stat) => {
    return Math.floor((stat-10)/2);
  }

  // This method turns the Name input into a controlled component.
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  // This method turns the Alignment input into a controlled component.
  handleAlignmentChange = (event) => {
    this.setState({
      alignment: event.target.value
    })
  }

  // This method turns every Skill Rank input into a controlled component.
  handleSkillRankChange = (event, skill) => {
    // Create a copy of Skills before setting state.
    let clonedSkills = Object.assign({}, this.state.skills);
    clonedSkills[skill] = event.target.value;

    this.setState({
      skills: clonedSkills
    })
  }

  // This method alters the skillsFilter key in state.
  handleSkillFilterChange = (event, filter) => {
    if (event.target.value === "on") {
      this.setState({skillsFilter: filter});
    }
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
      raceModActive: raceObj[event.target.value]["raceModActive"],
      size: raceObj[event.target.value]["size"]
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

  // handleLevelChange updates the state to set the hero's level based on the input in the CharClass component.
  handleLevelChange = (event) => {
    this.setState({
      level: parseInt(event.target.value),
      bab: Math.floor(classObj[this.state.charClass]["bab"] * parseInt(event.target.value))
    })
  }

  // handleStatsChange updates the input values in state and calculates the total points cost of the character's stat array.
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
      <div className="container-fluid">
        <div className="row">
            <div className="col-3"> {/* This is column 1. */}

              <div className="card">

                <div className="card-header" id="information">
                  <Information 
                    race={this.state.race}
                    alignment={this.state.alignment}
                    charClass={this.state.charClass}
                    handleRaceChange={this.handleRaceChange}
                    handleNameChange={this.handleNameChange}
                    handleCharClassChange={this.handleCharClassChange}
                    level={this.state.level}
                    handleLevelChange={this.handleLevelChange}
                  />
                </div>

                <div className="card-body" id="stats">
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
                <div className="card-body" id="defense">
                  <Defense 
                    level={this.state.level}
                    hd={this.state.hd}
                    ac={this.state.ac}
                    stats={this.state.stats}
                    calculateStatMod={this.calculateStatMod}
                    charClass={this.state.charClass}
                    classObj={classObj}
                    bab={this.state.bab}
                    size={this.state.size}
                  />
                </div>
                <div className="card-footer" id="offense">
                  <Offense 
                    bab={this.state.bab}
                    strMod={this.calculateStatMod(this.state.stats.strength.total)}
                    dexMod={this.calculateStatMod(this.state.stats.dexterity.total)}
                  />
                </div>
              </div>

                
            </div> {/* This is the end of the column.*/}
            
              <div className="col-9"> {/* This is column 2. */}
                
                <SkillsTable 
                  charClass={this.state.charClass}
                  level={this.state.level}
                  stats={this.state.stats}
                  calculateStatMod={this.calculateStatMod}
                  skills={this.state.skills}
                  handleSkillRankChange={this.handleSkillRankChange}
                  handleSkillFilterChange={this.handleSkillFilterChange}
                  skillsFilter={this.state.skillsFilter}
                />
                
              </div>
        </div> {/* This is the end of the row.*/}
      </div> 
    );
  }
}

export default App;
