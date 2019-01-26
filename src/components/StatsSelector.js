import React from 'react';

const StatsSelector = (props) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <label htmlFor={props.selectorId}>{props.selectorId.toUpperCase().slice(0,3)+": "} </label>
            </div>
            <div className="col-xs-3">
                <select  id={props.selectorId} defaultValue={props.statVal} onChange={props.handleStatsChange} className="stat-selector">
                    <option value={7}>7 (-2)</option>
                    <option value={8}>8 (-1)</option>
                    <option value={9}>9 (-1)</option>
                    <option value={10}>10 (+0)</option>
                    <option value={11}>11 (+0)</option>
                    <option value={12}>12 (+1)</option>
                    <option value={13}>13 (+1)</option>
                    <option value={14}>14 (+2)</option>
                    <option value={15}>15 (+2)</option>
                    <option value={16}>16 (+3)</option>
                    <option value={17}>17 (+3)</option>
                    <option value={18}>18 (+4)</option>
                </select>
            </div>
            <div className="col-xs-3">
                <input type="number" name={`race-${props.selectorId}`} min="-4" max="4" className="form-control-sm"/>
            </div>
            <div className="col-xs-2">
                <p id={`total-${props.selectorId}`}>{props.statVal}</p>
            </div>
            <div className="col-xs-2">
                <p id={`${props.selectorId}-mod`}>Mod</p>
            </div>
        </div>
    );
}

export default StatsSelector;