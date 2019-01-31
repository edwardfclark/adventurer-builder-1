import React from 'react';

const HitPoints = (props) => {

    let hd = props.hd;
    let perLvl = hd % 2 === 0 ? (hd/2)+1 : Math.ceil(hd/2);
    let lvlBonus = (props.level-1)*(perLvl);
    let conBonus = Math.floor((props.constitution-10)/2) * props.level;

    let hp = hd+lvlBonus+conBonus;

    return (
        <div className="row">
            <div className="col-3">
                <label>HP: </label>
            </div>
            {/* <div className="col-6">
                <p>{`(${hd}hd+${lvlBonus}lvl+${conBonus}con)`}</p>
            </div> */}
            <div className="col-3">
                <p>{hp}</p>
            </div>
            
        </div>
    );
}

export default HitPoints;