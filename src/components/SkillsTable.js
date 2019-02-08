import React from 'react';
import {skillsObj, classObj} from '../objects';
import Skill from './skills/Skill';


const SkillsTable = (props) => {
    // Create an array from all the keys in skillsObj.
    let skillsArr = Object.keys(skillsObj);

    // Only display skills that are class skills.
    // Used ternaries instead of if statements because the arrow function wants a value returned, and 'null' qualifies.
    let skills;

    if (props.skillsFilter === "class") {

        skills = skillsArr.map((skill, i) => {
            return classObj[props.charClass]["classSkills"].indexOf(skill) !== -1 ? (
                <Skill 
                    key={i} 
                    skill={skill} 
                    level={props.level}
                    classSkill={classObj[props.charClass]["classSkills"].indexOf(skill) !== -1}
                    attribute={skillsObj[skill]["linkedStat"]}
                    attr={props.calculateStatMod(props.stats[skillsObj[skill]["linkedStat"]].total)}
                    ranks={props.skills[skill]}
                    handleSkillRankChange={props.handleSkillRankChange}
                />
            ) : (null)
        });

    } else if (props.skillsFilter === "ranked") {
        
        skills = skillsArr.map((skill, i) => {
            return props.skills[skill] > 0 ? (
                <Skill 
                    key={i}
                    skill={skill}
                    level={props.level}
                    classSkill={classObj[props.charClass]["classSkills"].indexOf(skill) !== -1}
                    attribute={skillsObj[skill]["linkedStat"]}
                    attr={props.calculateStatMod(props.stats[skillsObj[skill]["linkedStat"]].total)}
                    ranks={props.skills[skill]}
                    handleSkillRankChange={props.handleSkillRankChange}
                />
            ) : (null)
        });

    } else {
        skills = skillsArr.map((skill, i) => {
            return (
                <Skill 
                    key={i}
                    skill={skill}
                    level={props.level}
                    classSkill={classObj[props.charClass]["classSkills"].indexOf(skill) !== -1}
                    attribute={skillsObj[skill]["linkedStat"]}
                    attr={props.calculateStatMod(props.stats[skillsObj[skill]["linkedStat"]].total)}
                    ranks={props.skills[skill]}
                    handleSkillRankChange={props.handleSkillRankChange}
                />
            );
        });
    }

    let ranksSpent = 0;

    for (let skill in props.skills) {
        ranksSpent += parseInt(props.skills[skill]);
    }
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <p>Skill:</p>
                    </div>
                    <div className="col-2">
                        <p className="text-center">Ranks:</p>
                    </div>
                    <div className="col-2">
                        <p className="text-center">Class Skill:</p>
                    </div>
                    <div className="col-2">
                        <p className="text-center">Attribute:</p>
                    </div>
                    <div className="col-3">
                        <p className="text-center">Total:</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                {skills}
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-3">
                        <p>Allowed: </p>
                    </div>
                    <div className="col-2">
                        <p className="text-center">Spent: {ranksSpent}</p>
                    </div>
                    <div className="col-4 offset-3">
                        <div className="form-check-inline">
                            <label className="form-check-label" htmlFor="filter-all">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    name="optradio" id="filter-all" 
                                    onClick={(event) => props.handleSkillFilterChange(event, "all")}
                                />All
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    name="optradio" id="filter-ranked" 
                                    onClick={(event) => props.handleSkillFilterChange(event, "ranked")}
                                />Ranked
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    name="optradio" 
                                    id="filter-class" 
                                    onClick={(event) => props.handleSkillFilterChange(event, "class")}
                                />Class
                            </label>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    );
}

export default SkillsTable;