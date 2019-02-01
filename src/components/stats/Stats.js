import React from 'react';
import StatsSelector from './StatsSelector'


// This will work like a point buy calculator would, but with different styling.
// Race is set on another component and its value is passed down as a prop.
// StatsSelector is a reusable component. Six are generated dynamically, based on the keys in the props.stats object.
const Stats = (props) => {

    let statsArr = Object.keys(props.stats).map((attribute, index) => {
        return (
        <StatsSelector 
            selectorId={attribute} 
            raceVal={props.stats[attribute].race} 
            statVal={props.stats[attribute].total}
            handleStatsChange={props.handleStatsChange}
            raceModActive={props.raceModActive}
            handleRaceModChange={props.handleRaceModChange}
            key={index}
        />
        );
    });

    return (
        <div>
            {statsArr}
        </div>
    )

}

export default Stats;