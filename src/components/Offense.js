import React from 'react';
import AttackBonuses from './offense/AttackBonuses';
import CMB from './offense/CMB';

const Offense = (props) => {
    return (
        <React.Fragment>
            <AttackBonuses 
                bab={props.bab}
                dexMod={props.dexMod}
                strMod={props.strMod}
            />
            <CMB 
                bab={props.bab}
                strMod={props.strMod}
            />
        </React.Fragment>
    );
}

export default Offense;