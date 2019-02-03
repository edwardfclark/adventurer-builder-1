import React from 'react';

const HitPoints = (props) => {

    let hd = props.hd;
    let perLvl = hd % 2 === 0 ? (hd/2)+1 : Math.ceil(hd/2);
    let lvlBonus = (props.level-1)*(perLvl);
    let conBonus = props.conMod * props.level;

    let hp = hd+lvlBonus+conBonus;

    return (
        <div className="row">
            <div className="col-4">
                <label>HP: </label>
            </div>
            <div className="col-4">
                <p>{hp}</p>
            </div>
            
        </div>
    );
}

export default HitPoints;