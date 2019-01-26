import React from 'react';
import StatsSelector from './StatsSelector'


// This will work like a point buy calculator would, but with different styling.
// Race is set on another component and its value is passed down as a prop.
// StatsSelector is a reusable component.
const Stats = (props) => {
    console.log(props);
    return (
        <div>
            <StatsSelector selectorId="strength" statVal={props.stats.strength} handleStatsChange={props.handleStatsChange}/>
            <StatsSelector selectorId="dexterity" statVal={props.stats.dexterity} handleStatsChange={props.handleStatsChange}/>
            <StatsSelector selectorId="constitution" statVal={props.stats.constitution} handleStatsChange={props.handleStatsChange}/>
            <StatsSelector selectorId="intelligence" statVal={props.stats.intelligence} handleStatsChange={props.handleStatsChange}/>
            <StatsSelector selectorId="wisdom" statVal={props.stats.wisdom} handleStatsChange={props.handleStatsChange}/>
            <StatsSelector selectorId="charisma" statVal={props.stats.charisma} handleStatsChange={props.handleStatsChange}/>
        </div>
    )

}

export default Stats;