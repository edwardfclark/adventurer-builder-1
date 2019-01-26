import React from 'react';

// Alignment is a very simple controlled component. 
// Alignment doesn't affect much in Pathfinder, but we want it to be stored in state just in case we export state to a database.

const Alignment = (props) => {
    return (
        <div className="row">
            <div className="col-3">
                <label htmlFor="alignment">Alignment: </label>
            </div>
            <div className="col-9">
                <select defaultValue={props.alignment} onChange={props.handleAlignmentChange} className="form-control form-control-sm">
                <option value="LG">Lawful Good</option>
                <option value="NG">Neutral Good</option>
                <option value="CG">Chaotic Good</option>
                <option value="LN">Lawful Neutral</option>
                <option value="NN">True Neutral</option>
                <option value="CN">Chaotic Neutral</option>
                <option value="LE">Lawful Evil</option>
                <option value="NE">Neutral Evil</option>
                <option value="CE">Neutral Good</option>
                </select>
            </div>
        </div>
    );
}

export default Alignment;