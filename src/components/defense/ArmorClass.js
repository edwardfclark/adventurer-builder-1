import React from 'react';

const ArmorClass = (props) => {

    let dex = Math.floor((props.dexterity-10)/2);
    let {armor, shield, deflection, dodge, luck, sacred, natural} = props.ac;

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-3">
                    <label>AC: </label>
                </div>
                <div className="col-3">
                    <p>{armor+
                        shield+
                        deflection+
                        dodge+
                        luck+
                        sacred+
                        natural+
                        dex+
                        10}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{`FF: ${armor+shield+deflection+luck+sacred+natural+10}, Touch: ${dex+luck+deflection+dodge+sacred+10}, FF-Touch: ${10}`}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ArmorClass;