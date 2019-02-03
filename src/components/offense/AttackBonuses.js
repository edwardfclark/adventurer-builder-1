import React from 'react';

const AttackBonuses = (props) => {


    return (
        <div className="row">
            <div className="col">
                <p><label>BAB:</label> {props.bab}</p>
            </div>
            <div className="col">
                <p><label>Melee:</label> {props.bab + props.strMod}</p>
            </div>
            <div className="col">
                <p><label>Ranged:</label> {props.bab + props.dexMod}</p>
            </div>
        </div>
        
    );

}

export default AttackBonuses;