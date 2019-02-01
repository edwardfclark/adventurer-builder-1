import React from 'react';

// StatsSelector has four columns - stat label, selector, race mod input, total, and mod.
// Values for these fields are either user-inputted (selector, sometimes race mod) or derived automatically from the state.
// User inputs will change application state using methods defined on the App component.

const StatsSelector = (props) => {
    return (
        <div className="row">
            <div className="col-3">
                <label htmlFor={props.selectorId}>{props.selectorId.toUpperCase().slice(0,3)+": "} </label>
            </div>
            <div className="col-3">
                <select  id={props.selectorId} defaultValue={props.statVal} onChange={props.handleStatsChange} className="form-control form-control-sm">
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                </select>
            </div>
            <div className="col-3">
                <input 
                    type="number" 
                    name={`race-${props.selectorId}`} 
                    min="-4" 
                    max="4" 
                    value={props.raceVal} 
                    onChange={props.handleRaceModChange} 
                    data-stat={props.selectorId}
                    className="form-control form-control-sm" 
                    readOnly={!props.raceModActive}
                />
            </div>
            <div className="col-3">
                <p id={`total-${props.selectorId}`}>{`${props.statVal} (${Math.floor((props.statVal-10)/2)})`}</p>
            </div>
            
        </div>
    );
}

export default StatsSelector;