import React from 'react';

const CharClass = (props) => {
    return (
        <div className="row">
            <div className="col-3">
                <label htmlFor="character-class">Class: </label>
            </div>
            <div className="col-9">
            <select id="character-class" defaultValue={props.charClass} onChange={props.handleCharClassChange} className="form-control form-control-sm">
                <option value="cleric">Cleric</option>
                <option value="bard">Bard</option>
                <option value="barbarian">Barbarian</option>
                <option value="fighter">Fighter</option>
                <option value="druid">Druid</option>
                <option value="rogue">Rogue</option>
                <option value="monk">Monk</option>
                <option value="paladin">Paladin</option>
                <option value="ranger">Ranger</option>
                <option value="sorcerer">Sorcerer</option>
                <option value="wizard">Wizard</option>
            </select>
            </div>
        </div>
    );
}

export default CharClass;