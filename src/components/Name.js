import React from 'react';

const Name = (props) => {
    return(
        <div className="row">
            <div className="col-xs-2">
            <label htmlFor="name">Name: </label>
            </div>
            <div className="col-xs-10">
            <input id="name" type="text" onChange={props.handleNameChange}/>
            </div>
        </div>
    );
}

export default Name;