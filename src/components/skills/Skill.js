import React from 'react';

// Skill takes a string as a property and generates the input row for that string.

const Skill = (props) => {
    return (
        <div className="row mb-1 skill">
            <div className="col-3"> {/* Skill */}
                <label>{props.skill}</label>
            </div>
            <div className="col-2"> {/* Ranks */}
                <input 
                    type="number"
                    min="0"
                    max={props.level}
                    className="form-control form-control-sm"
                    value={props.ranks} 
                    onChange={ (event) => props.handleSkillRankChange(event, props.skill)}
                />
            </div>
            <div className="col-2"> {/* Class Skill */}
                <p className="text-center">{props.classSkill ? "Yes +3" : "No"}</p>
            </div>
            <div className="col-2"> {/* Attribute */}
                <p className="text-center">{props.attribute.slice(0,3).toUpperCase()+" "+(props.attr >= 0 ? "+" : "")+props.attr}</p>
            </div>
            <div className="col-3"> {/* Total */}
                <p className="text-center">{parseInt(props.ranks)+(props.classSkill && props.ranks > 0 ? 3 : 0)+parseInt(props.attr)}</p>
            </div>

        </div>
    );
}

export default Skill;