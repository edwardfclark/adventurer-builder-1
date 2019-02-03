import React from 'react';
import {skillsObj, classObj} from '../objects';


const SkillsTable = (props) => {
    // Create an array from all the keys in skillsObj.
    let skillsArr = Object.keys(skillsObj);

    // Only display skills that are class skills.
    let skills = skillsArr.map((skill, i) => {
        return classObj[props.charClass]["classSkills"].indexOf(skill) !== -1 ? (
            <li key={i}>{skill}</li>
        ) : (null)
    });

    // console.log("Skills: ", skillsList)
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <label>Skills:</label>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <ul>
                    {skills}
                </ul>
            </div>
            
        </div>
        
    );
}

export default SkillsTable;