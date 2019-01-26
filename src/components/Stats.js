import React from 'react';
import StatsSelector from './StatsSelector'


// This will work like a point buy calculator would, but with different styling.
// Race is set on another component and its value is passed down as a prop.
// StatsSelector is a reusable component.
const Stats = (props) => {
    return (
        <div>
            <StatsSelector 
            selectorId="strength" 
            raceVal={props.stats.strength.race} 
            statVal={props.stats.strength.total} 
            handleStatsChange={props.handleStatsChange} 
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            />
            <StatsSelector 
            selectorId="dexterity" 
            raceVal={props.stats.dexterity.race} 
            statVal={props.stats.dexterity.total} 
            handleStatsChange={props.handleStatsChange} 
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            />
            <StatsSelector 
            selectorId="constitution" 
            raceVal={props.stats.constitution.race} 
            statVal={props.stats.constitution.total} 
            handleStatsChange={props.handleStatsChange} 
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            />
            <StatsSelector 
            selectorId="intelligence" 
            raceVal={props.stats.intelligence.race} 
            statVal={props.stats.intelligence.total} 
            handleStatsChange={props.handleStatsChange} 
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            />
            <StatsSelector 
            selectorId="wisdom" 
            raceVal={props.stats.wisdom.race} 
            statVal={props.stats.wisdom.total} 
            handleStatsChange={props.handleStatsChange} 
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            />
            <StatsSelector 
            selectorId="charisma" 
            raceVal={props.stats.charisma.race} 
            statVal={props.stats.charisma.total} 
            handleStatsChange={props.handleStatsChange} 
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            />
            
        </div>
    )

}

export default Stats;