import React from 'react';

const CMB = (props) => {
    return (
        <div className="row">
            <div className="col">
                <p><label>CMB:</label> {props.bab + props.strMod}</p>
            </div>
        </div>
    );
}

export default CMB;