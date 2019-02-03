import React from 'react';
import Race from './info/Race';
import Name from './info/Name';
import Alignment from './info/Alignment';
import CharClass from './info/CharClass';

const Information = (props) => {
    return (
        <React.Fragment>
            <Name 
                handleNameChange={props.handleNameChange}
            />
            <Alignment 
                alignment={props.alignment}
                handleAlignmentChange={props.handleAlignmentChange}
            />
            <Race 
                id="race" 
                race={props.race} 
                 handleRaceChange={props.handleRaceChange}
            />
            <CharClass 
                charClass={props.charClass}
                handleCharClassChange={props.handleCharClassChange}
                level={props.level}
                handleLevelChange={props.handleLevelChange}
            />
        </React.Fragment>
    );
}

export default Information;