import React from 'react';

// calculateSave gets used
const calculateSave = (saveType, statMod, level) => {

    if (saveType === "good") {
        return 2 + Math.floor(level/2) + statMod;
    } else {
        return Math.floor(level/3) + statMod;
    }

}

// Saves is the actual component that gets exported and used in the DOM.
const Saves = (props) => {

    let hero = {
        fort: props.classObj[props.charClass].fort,
        ref: props.classObj[props.charClass].ref,
        will: props.classObj[props.charClass].will
    }

    return (
        <div className="row">
            <div className="col">
                <p><label>Fort:</label> {calculateSave(hero.fort, props.conMod, props.level)}</p>
            </div>
            <div className="col">
                <p><label>Ref:</label> {calculateSave(hero.ref, props.dexMod, props.level)}</p>
            </div>
            <div className="col">
                <p><label>Will:</label> {calculateSave(hero.will, props.wisMod, props.level)}</p>
            </div>
        </div>
    );
}

export default Saves;