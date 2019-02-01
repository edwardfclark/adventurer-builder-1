import React from 'react';
import ArmorClass from './defense/ArmorClass';
import HitPoints from './defense/HitPoints';
import Saves from './defense/Saves';


// This component contains all the derived stats related to a character's survivability.
const Defense = (props) => {
    
    // An object used to look up stat mods for the derived Defense stats.
    const statMods = {
        con: props.calculateStatMod(props.stats.constitution.total),
        dex: props.calculateStatMod(props.stats.dexterity.total),
        wis: props.calculateStatMod(props.stats.wisdom.total),
        str: props.calculateStatMod(props.stats.strength.total)
    }

    // Calculate mod to CMD based on the PC's size.
    const calculateSizeMod = (size) => {
        if (size === "medium") {
            return 0;
        } else {
            return -1;
        }
    }

    // Some bonuses to AC also apply to CMD. This function calculates the total bonus.
    const calculateACtoCMD = (ac) => {
        return ac.dodge + ac.deflection + ac.luck + ac.morale + ac.insight + ac.sacred;
    }

    return (
        <React.Fragment>
            <HitPoints 
                level={props.level} 
                conMod={statMods.con} 
                hd={props.hd}
            />
            <ArmorClass 
                ac={props.ac}
                dexterity={props.stats.dexterity.total}
            />
            <Saves 
                charClass={props.charClass}
                classObj={props.classObj}
                dexMod={statMods.dex}
                conMod={statMods.con}
                wisMod={statMods.wis}
                level={props.level}
            />
            <div className="row">
                <div className="col-4">
                    <p><label>CMD:</label> {10 + props.bab + statMods.str + statMods.dex + calculateSizeMod(props.size) + calculateACtoCMD(props.ac)}</p>
                </div>
                <div className="col-8">
                    <p><label>Initiative:</label> {statMods.dex}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Defense;