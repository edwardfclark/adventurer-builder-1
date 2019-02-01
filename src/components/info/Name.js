import React from 'react';

const Name = (props) => {
    return(
        <div className="row">
            <div className="col-3">
            <label htmlFor="name">Name: </label>
            </div>
            <div className="col-9">
            <input id="name" type="text" onChange={props.handleNameChange} className="form-control form-control-sm"/>
            </div>
        </div>
    );
}

export default Name;