import React from 'react';

const Race = (props) => {
    
    return (
        <div className="row">
            <div className="col-xs-2">
                <label htmlFor="race">Race: </label>
            </div>
            <div className="col-xs-10">
                <select value={props.race} onChange={props.handleRaceChange} name="race" className="stat-selector">
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="gnome">Gnome</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="halfling">Halfling</option>
                    <option value="human">Human</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    );
}

export default Race;